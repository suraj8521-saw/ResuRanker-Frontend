import React, { useState, useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { apiService } from '../services/api';
import { AnalysisContext } from '../context/AnalysisContext'; // Central memory buffer context
import { UploadCloud, Zap, Target, Sparkles, FileText, X, ChevronDown } from 'lucide-react';

export default function Analyze() {
  const location = useLocation();

  // 🔌 CONNECT TO CENTRAL CONTEXT STORE (Persists layout states seamlessly)
  const {
    analysisData, setAnalysisData,
    matrixData, setMatrixData,
    selectedFile, setSelectedFile,
    isPreviewOpen, setIsPreviewOpen,
    activeTab, setActiveTab
  } = useContext(AnalysisContext);

  // Application Input Form States
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 🔥 CUSTOM DROPDOWN SELECTION STATES (Completely clean custom mechanics)
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  
  const mainDropdownRef = useRef(null);
  const exploreDropdownRef = useRef(null);

  // Local state extensions for internal sub-tabs
  const [explorerRole, setExplorerRole] = useState('');
  const [explorerData, setExplorerData] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  // Intercept data passed from the Home page router context safely
  useEffect(() => {
    if (location.state && location.state.uploadedResume) {
      setSelectedFile(location.state.uploadedResume);
    }
  }, [location.state, setSelectedFile]);

  // Generate memory stream binary URL for live document preview mapping
  useEffect(() => {
    if (selectedFile) {
      const generatedBlobUrl = URL.createObjectURL(selectedFile);
      setFileUrl(generatedBlobUrl);
      return () => URL.revokeObjectURL(generatedBlobUrl);
    } else {
      setFileUrl('');
    }
  }, [selectedFile]);

  // Populate drop-down configurations from asynchronous backend parameters
  useEffect(() => {
    const loadDropdownOptions = async () => {
      try {
        const systemRoles = await apiService.fetchSystemRoles();
        setRoles(systemRoles);
        if (systemRoles.length > 0) {
          setSelectedRole(systemRoles[0]);
          setExplorerRole(systemRoles[0]);
        }
      } catch (err) {
        console.error("Failed to fetch parameter arrays:", err);
      }
    };
    loadDropdownOptions();
  }, []);

  // Synchronize detailed metrics view when cross-examination values get modified
  useEffect(() => {
    if (matrixData && explorerRole) {
      const match = matrixData.ranked_fitment_matrix.find(
        (item) => item.role.toLowerCase() === explorerRole.toLowerCase()
      );
      if (match) {
        setExplorerData(match);
      } else {
        setExplorerData({
          role: explorerRole,
          score: 0,
          matched_primary: [],
          missing_primary: [],
          matched_secondary: [],
          missing_secondary: []
        });
      }
    }
  }, [explorerRole, matrixData]);

  // Close dropdown menu instances dynamically when clicking outside bounds
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mainDropdownRef.current && !mainDropdownRef.current.contains(event.target)) {
        setIsMainDropdownOpen(false);
      }
      if (exploreDropdownRef.current && !exploreDropdownRef.current.contains(event.target)) {
        setIsExploreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setError('');
    }
  };

  const executePipelineRequest = async (e) => {
    if (e) e.preventDefault();
    if (!selectedFile) {
      setError("Please select a valid resume document to proceed.");
      return;
    }
    setLoading(true);
    setError('');

    try {
      const [analyzeRes, matrixRes] = await Promise.all([
        apiService.analyzeTargetProfile(selectedFile, selectedRole),
        apiService.fetchFitmentMatrix(selectedFile)
      ]);

      setAnalysisData(analyzeRes);
      setMatrixData(matrixRes);
    } catch (err) {
      setError(err.message || "An unexpected error occurred during pipeline analysis.");
    } finally {
      setLoading(false);
    }
  };

  const getGradeStyles = (score) => {
    if (score >= 80) return { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", bar: "bg-emerald-500" };
    if (score >= 50) return { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", bar: "bg-blue-500" };
    if (score >= 30) return { text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", bar: "bg-amber-500" };
    return { text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-500/10 border-rose-500/20", bar: "bg-rose-500" };
  };

  // Real-time evaluation indicators configurations
  const primaryMetCount = analysisData?.primary_metrics?.matched?.length || 0;
  const primaryTotalCount = primaryMetCount + (analysisData?.primary_metrics?.missing?.length || 0);
  const primaryPercentage = primaryTotalCount > 0 ? Math.round((primaryMetCount / primaryTotalCount) * 100) : 0;

  const secondaryMetCount = analysisData?.secondary_metrics?.matched?.length || 0;
  const secondaryTotalCount = secondaryMetCount + (analysisData?.secondary_metrics?.missing?.length || 0);
  const secondaryPercentage = secondaryTotalCount > 0 ? Math.round((secondaryMetCount / secondaryTotalCount) * 100) : 0;

  const coverageDensity = analysisData ? Math.min(100, Math.round((analysisData.extracted_portfolio.length / 25) * 100)) : 0;

  return (
    <div className="min-h-screen bg-sky-50/60 dark:bg-slate-950 text-slate-700 dark:text-slate-100 px-4 py-8 md:px-12 transition-colors duration-300">
      
      {/* INPUT STREAM PORTAL INTERFACE */}
      {!analysisData && (
        <div className="max-w-3xl mx-auto mt-12 bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl shadow-xl border-2 border-sky-100 dark:border-slate-800 transition-all">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent uppercase tracking-tight">
              AI Resume Analyzer Portal
            </h1>
            <p className="mt-2 text-sm text-slate-400 dark:text-slate-400 font-bold uppercase tracking-wider">
              Enterprise Grade ATS Matrix Integration & Predictive Grading
            </p>
          </div>

          <form onSubmit={executePipelineRequest} className="space-y-6">
            
            {/* 1. CUSTOM SYSTEM MAIN DROPDOWN SELECTION */}
            <div className="relative" ref={mainDropdownRef}>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Select Target Career Track:</label>
              <button
                type="button" onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl border-2 border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-black text-sm text-slate-900 dark:text-white text-left shadow-inner focus:outline-none transition"
              >
                <span>{selectedRole ? selectedRole.toUpperCase() : "SELECT SYSTEM TRACK"}</span>
                <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 shrink-0 ${isMainDropdownOpen ? 'rotate-180 text-indigo-600' : 'rotate-0'}`} strokeWidth={2.5} />
              </button>

              {isMainDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full max-h-64 overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-2 border-sky-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 animate-fadeIn pr-1">
                  {roles.map((role) => (
                    <button
                      key={role} type="button"
                      onClick={() => { setSelectedRole(role); setIsMainDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-xs font-black tracking-wide uppercase border-b border-sky-50 dark:border-slate-800/60 last:border-none transition-colors ${
                        selectedRole.toLowerCase() === role.toLowerCase()
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-sky-50/80 dark:hover:bg-slate-800/80 hover:text-indigo-600 dark:hover:text-white"
                      }`}
                    >
                      🔹 {role}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Document Streaming Upload Wrapper */}
            <div className="border-2 border-dashed border-sky-200 dark:border-slate-800 rounded-xl p-8 text-center bg-sky-50/30 dark:bg-slate-950/40 hover:border-sky-400 dark:hover:border-slate-700 transition relative group">
              <input type="file" accept=".pdf,.txt" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <div className="flex flex-col items-center space-y-3">
                <UploadCloud size={40} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <p className="font-black text-sm text-slate-700 dark:text-slate-300">
                  {selectedFile ? `Selected: ${selectedFile.name} (Ready)` : "Drag & Drop Resume or Click to Browse"}
                </p>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Supported formats: PDF, TXT (Max 5MB)</span>
              </div>
            </div>

            {error && <div className="p-3 text-xs font-black text-rose-600 bg-rose-50 border-2 border-rose-500/20 rounded-xl uppercase">{error}</div>}

            <button type="submit" disabled={loading} className="w-full py-4 px-6 rounded-xl text-white font-black uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition duration-200">
              {loading ? "Performing Machine Learning Inference Analysis..." : "Grade My Resume Now"}
            </button>
          </form>
        </div>
      )}

      {/* WORKSPACE FEED PANEL CORE ELEMENTS */}
      {analysisData && (
        <div className="max-w-7xl mx-auto space-y-6 animate-fadeIn">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-sky-200 dark:border-slate-800 pb-5 gap-4">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Ecosystem Fitment Analysis</h2>
              <p className="text-xl font-black mt-1">Candidate Target Path: <span className="text-indigo-600 dark:text-indigo-400">{analysisData.target_role.toUpperCase()}</span></p>
            </div>
            <button
              onClick={() => { setAnalysisData(null); setMatrixData(null); setSelectedFile(null); setIsPreviewOpen(false); }}
              className="px-5 py-3 text-xs bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 font-black tracking-wider rounded-xl border-2 border-rose-500/30 dark:border-rose-500/40 hover:border-rose-500 transition-all shadow-md uppercase active:scale-95"
            >
              🔄 Reset & Upload Alternate CV
            </button>
          </div>

          {/* PREVIEW FRAME COMPONENT */}
          {selectedFile && fileUrl && (
            <div className="bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
              <button
                type="button" onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                className="w-full flex items-center justify-between p-4 font-black text-xs md:text-sm bg-sky-50/50 dark:bg-slate-800/30 hover:bg-sky-100/50 dark:hover:bg-indigo-950/20 transition uppercase"
              >
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 overflow-hidden w-3/4 justify-start">
                  <span>📄 Live Document Viewer</span>
                  <span className="text-xs px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 font-mono font-black normal-case truncate max-w-[150px] md:max-w-none border border-indigo-500/20">{selectedFile.name}</span>
                </div>
                <div className="text-xs font-black text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 px-3 py-1.5 rounded-xl shadow-sm">{isPreviewOpen ? '🔼 Hide CV' : '🔽 Show CV'}</div>
              </button>
              
              {isPreviewOpen && (
                <div className="w-full h-[400px] md:h-[600px] border-t-2 border-sky-100 dark:border-slate-800 bg-sky-100/50 dark:bg-slate-950 p-2 relative overflow-hidden">
                  {selectedFile.type === "application/pdf" ? (
                    <>
                      <iframe src={`${fileUrl}#toolbar=0&navpanes=0`} title="Preview" className="hidden md:block w-full h-full border-none rounded-xl bg-white shadow-inner" />
                      <div className="block md:hidden w-full h-full flex flex-col items-center justify-center bg-slate-900/40 rounded-xl p-6 text-center space-y-4">
                        <h4 className="font-black text-white uppercase">Mobile Viewer Mode</h4>
                        <a href={fileUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md">🚀 Launch Fullscreen</a>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full p-4 font-mono text-xs overflow-auto bg-white dark:bg-slate-900 rounded-xl text-slate-400 font-bold">Alternative streaming fallback text block.</div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* HOLISTIC SPECTRAblue portfolio elements mapping */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-sky-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">🔮 Holistic Skill Spectrum (AI Extracted Blueprint)</h3>
            <div className="flex flex-wrap gap-2">
              {analysisData.extracted_portfolio.map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-xs font-mono font-black rounded-xl bg-sky-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 border-2 border-sky-100 dark:border-slate-800 shadow-sm uppercase">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* NAVIGATION BAR SWITCHER TABS */}
          <div className="flex border-b-2 border-sky-100 dark:border-slate-800 gap-2">
            {[
              { id: 'targeted', label: '🎯 Targeted Path Report' },
              { id: 'matrix', label: '🌍 Universal Compatibility Fitment' },
              { id: 'explore', label: '🔍 Explore Alternate Career Gaps' }
            ].map((tab) => (
              <button
                key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-3 md:px-5 font-black text-xs md:text-sm border-b-2 tracking-wide uppercase transition ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: TARGETED PATH BLOCK VIEW */}
          {activeTab === 'targeted' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-sky-100 dark:border-slate-800 space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border-b border-sky-100 dark:border-slate-800 pb-3">🔥 Target Verified Core Skills:</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {analysisData.primary_metrics.matched.length > 0 ? (
                      analysisData.primary_metrics.matched.map(s => <span key={s} className="text-xs px-3 py-1.5 font-black rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-500/20 shadow-sm uppercase">{s}</span>)
                    ) : <span className="text-xs font-bold text-slate-400 italic">No primary requirements fulfilled yet.</span>}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-blue-400 border-b border-sky-100 dark:border-slate-800 pb-3">🌟 Secondary/Relevant Context Met:</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {analysisData.secondary_metrics.matched.length > 0 ? (
                      analysisData.secondary_metrics.matched.map(s => <span key={s} className="text-xs px-3 py-1.5 font-black rounded-xl bg-indigo-50 dark:bg-blue-950/80 text-indigo-700 dark:text-blue-300 border-2 border-indigo-500/20 shadow-sm uppercase">{s}</span>)
                    ) : <span className="text-xs font-bold text-slate-400 italic">No optional requirements fulfilled.</span>}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-sky-100 dark:border-slate-800 space-y-6">
                <div className={`p-4 rounded-2xl border-2 ${getGradeStyles(analysisData.match_percentage).bg} shadow-sm`}>
                  <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Calculated ATS Rating Index</span>
                  <div className="text-4xl font-mono font-black my-1 text-indigo-600 dark:text-indigo-400">{analysisData.match_percentage}%</div>
                  <div className={`text-sm font-black uppercase ${getGradeStyles(analysisData.match_percentage).text}`}>Verdict Evaluation: {analysisData.grade}</div>
                  <div className="w-full bg-slate-200 dark:bg-slate-950 h-2.5 rounded-full mt-4 overflow-hidden border border-slate-800/20">
                    <div className={`h-full ${getGradeStyles(analysisData.match_percentage).bar}`} style={{ width: `${analysisData.match_percentage}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs uppercase font-black text-rose-600 dark:text-rose-400 mb-2">🚨 Strictly Missing Must-Haves:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {analysisData.primary_metrics.missing.length > 0 ? (
                      analysisData.primary_metrics.missing.map(m => <span key={m} className="text-xs px-3 py-1.5 font-black rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-2 border-rose-500/20 shadow-md uppercase">{m}</span>)
                    ) : <span className="text-xs font-black text-emerald-600 bg-emerald-50 border border-emerald-500/20 px-3 py-1 rounded-xl">🎉 Meets all core primary requirements successfully.</span>}
                  </div>
                </div>
                
                {/* 🔥 RESTORED COMPLETELY: Highly recommended optional frameworks additions */}
                <div>
                  <h4 className="text-xs uppercase font-black text-amber-600 dark:text-amber-500 tracking-wider mb-2">💡 Highly Recommended Additions:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {analysisData.secondary_metrics.missing.length > 0 ? (
                      analysisData.secondary_metrics.missing.map(m => <span key={m} className="text-xs px-3 py-1.5 font-black rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-2 border-amber-500/20 shadow-md uppercase">{m}</span>)
                    ) : <span className="text-xs text-emerald-600 font-black bg-emerald-50 border border-emerald-500/20 px-3 py-1 rounded-xl">Meets all secondary recommendations successfully.</span>}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ==================== TAB 2 CONTENT: MARKET COMPETENCY MATRIX ==================== */}
          {activeTab === 'matrix' && matrixData && (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-sky-100 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-black uppercase text-slate-400 tracking-wider">Ranked Corporate Vector Map (Scores &ge; 15%)</h3>
              <p className="text-xs font-bold text-blue-400 -mt-2">💡 Tip: Click on any job stream block to cross-examine core skill gaps dynamically inside the inspector window.</p>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {matrixData.ranked_fitment_matrix.map((item) => (
                  <div 
                    key={item.role} onClick={() => { setExplorerRole(item.role); setActiveTab('explore'); }}
                    className="p-4 rounded-2xl border-2 border-sky-100 dark:border-slate-800/80 bg-sky-50/30 dark:bg-slate-950/40 hover:border-indigo-400 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900/60 cursor-pointer transition-all duration-200 group shadow-sm active:scale-[0.995]"
                  >
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-black text-base text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 transition-colors">🔹 {item.role.toUpperCase()}</span>
                      <span className="font-mono font-black text-base flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        {item.score}%
                        <span className="text-[10px] bg-indigo-500/10 text-indigo-400 font-sans tracking-widest uppercase px-2 py-1 rounded-lg font-black opacity-0 group-hover:opacity-100 transition-all border border-indigo-500/20">Inspect &rarr;</span>
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden"><div className={`h-full ${getGradeStyles(item.score).bar}`} style={{ width: `${item.score}%` }}></div></div>
                    
                    {/* 🔥 RESTORED COMPLETELY: Explicit token badges footer grid mapping */}
                    <div className="mt-3 text-xs flex flex-col sm:flex-row sm:gap-6 gap-2 border-t-2 border-sky-50 dark:border-slate-800/50 pt-2.5">
                      <div>
                        <span className="text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-wider text-[10px] block mb-0.5">Met:</span> 
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.matched_primary.length > 0 ? item.matched_primary.map(s => <span key={s} className="px-1.5 py-0.5 font-mono font-bold bg-emerald-500/5 text-emerald-600 border border-emerald-500/10 text-[10px] rounded uppercase">{s}</span>) : <span className="text-slate-400 italic text-[10px]">None</span>}
                        </div>
                      </div>
                      <div>
                        <span className="text-rose-600 dark:text-rose-400 font-black uppercase tracking-wider text-[10px] block mb-0.5">Missing:</span> 
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.missing_primary.length > 0 ? item.missing_primary.map(s => <span key={s} className="px-1.5 py-0.5 font-mono font-bold bg-rose-500/5 text-rose-600 border border-rose-500/10 text-[10px] rounded uppercase">{s}</span>) : <span className="text-emerald-600 font-black text-[10px]">Perfect Match!</span>}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== TAB 3 CONTENT: DEEP-DIVE ALTERNATE CONTEXT INSPECTOR ==================== */}
          {activeTab === 'explore' && matrixData && (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-sky-100 dark:border-slate-800 space-y-6">
              
              {/* 2. 🔥 UPGRADED SELECTION BLOCK: SECOND CUSTOM DROPDOWN BOX CONTROL */}
              <div className="relative" ref={exploreDropdownRef}>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Select Alternate Path to Cross-Examine:</label>
                <button
                  type="button" onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
                  className="w-full md:w-1/2 flex items-center justify-between p-3.5 rounded-xl border-2 border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-black text-sm text-slate-900 dark:text-white text-left shadow-inner focus:outline-none transition"
                >
                  <span>{explorerRole ? explorerRole.toUpperCase() : "SELECT ALTERNATE PATH"}</span>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 shrink-0 ${isExploreDropdownOpen ? 'rotate-180 text-indigo-600' : 'rotate-0'}`} strokeWidth={2.5} />
                </button>

                {isExploreDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full md:w-1/2 max-h-64 overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-2 border-sky-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 animate-fadeIn pr-1">
                    {roles.map((role) => (
                      <button
                        key={role} type="button"
                        onClick={() => { setExplorerRole(role); setIsExploreDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-xs font-black tracking-wide uppercase border-b border-sky-50 dark:border-slate-800/60 last:border-none transition-colors ${
                          explorerRole.toLowerCase() === role.toLowerCase()
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400"
                            : "text-slate-700 dark:text-slate-300 hover:bg-sky-50/80 dark:hover:bg-slate-800/80 hover:text-indigo-600 dark:hover:text-white"
                        }`}
                      >
                        🔹 {role}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {explorerData && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border-t-2 border-sky-100 dark:border-slate-800 pt-6">
                  <div className={`p-5 rounded-2xl border-2 ${getGradeStyles(explorerData.score).bg} shadow-sm`}>
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Alternate Compatibility Fit Density</span>
                    <div className="text-4xl font-mono font-black my-1 text-indigo-600 dark:text-indigo-400">{explorerData.score}%</div>
                    <div className="w-full bg-slate-200 dark:bg-slate-950 h-2.5 rounded-full mt-4 overflow-hidden border border-slate-800/10"><div className={`h-full ${getGradeStyles(explorerData.score).bar}`} style={{ width: `${explorerData.score}%` }}></div></div>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-black uppercase text-rose-600 dark:text-rose-400 mb-2">🚨 Critical Missing Must-Haves for this role:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {explorerData.missing_primary.length > 0 ? (
                          explorerData.missing_primary.map(m => <span key={m} className="px-3 py-1.5 text-xs font-black rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-2 border-rose-500/20 shadow-md uppercase">{m}</span>)
                        ) : <span className="text-xs text-emerald-600 font-black bg-emerald-50 border border-emerald-500/20 px-3 py-1 rounded-xl">Meets all target core conditions dynamically.</span>}
                      </div>
                    </div>
                    
                    {/* 🔥 RESTORED COMPLETELY: Tab 3 alternate framework additions tracker panel */}
                    <div>
                      <h4 className="text-xs font-black uppercase text-amber-600 dark:text-amber-500 mb-2">💡 Highly Recommended Additions:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {explorerData.missing_secondary.length > 0 ? (
                          explorerData.missing_secondary.map(m => <span key={m} className="px-3 py-1.5 text-xs font-black rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-2 border-amber-500/20 shadow-md uppercase">{m}</span>)
                        ) : <span className="text-xs text-emerald-600 font-black bg-emerald-50 border border-emerald-500/20 px-3 py-1 rounded-xl">Meets all operational target recommendation vectors.</span>}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* STATS SUMMARY PANELS VECTOR MATRIX MAP */}
          <div className="pt-6 border-t-2 border-sky-100 dark:border-slate-800">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">📊 Statistical Competency Dashboard Matrix</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: "Overall Match Index", val: `${analysisData.match_percentage}%`, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-500", pct: analysisData.match_percentage, desc: "Weighted profile fit score ratio" },
                { label: "Primary Must-Haves Met", val: `${primaryPercentage}%`, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500", pct: primaryPercentage, desc: `${primaryMetCount} of ${primaryTotalCount} core target tracks` },
                { label: "Secondary Preferences", val: `${secondaryPercentage}%`, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500", pct: secondaryPercentage, desc: `${secondaryMetCount} of ${secondaryTotalCount} optional frameworks` },
                { label: "Jargon Keyword Volume Density", val: `${coverageDensity}%`, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500", pct: coverageDensity, desc: `${analysisData.extracted_portfolio.length} engineering entities map` }
              ].map((card, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-sky-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{card.label}</div>
                    <div className={`text-3xl font-mono font-black ${card.color} mt-2`}>{card.val}</div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-sky-50 dark:bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-200/50 dark:border-none"><div className={`h-full ${card.bg}`} style={{ width: `${card.pct}%` }}></div></div>
                    <span className="text-[10px] text-slate-400 font-bold block mt-1.5 uppercase">{card.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}