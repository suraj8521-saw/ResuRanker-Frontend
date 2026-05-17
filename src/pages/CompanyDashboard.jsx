import React, { useState, useEffect, useContext } from 'react';
import { apiService } from '../services/api';
import { AnalysisContext } from '../context/AnalysisContext'; // Context memory buffer linked

export default function CompanyDashboard() {
  // 🔌 CONNECT TO THE CENTRAL MEMORY STORE
  const {
    companyResults, setCompanyResults,
    companyFiles, setCompanyFiles,
    selectedCompanyCandidate, setSelectedCompanyCandidate,
    primaryInput, setPrimaryInput,
    secondaryInput, setSecondaryInput
  } = useContext(AnalysisContext);

  const [loading, setLoading] = useState(false);
  const [cachedUrls, setCachedUrls] = useState({});

  const industryStandardRoles = {
    "Frontend Engineer": ["react", "javascript", "html", "css", "tailwindcss", "html5", "css3", "typescript", "next.js", "vue"],
    "Backend Engineer": ["node.js", "python", "java", "sql", "express", "mongodb", "postgresql", "django", "golang", "c#"],
    "Full Stack Developer": ["react", "node.js", "mongodb", "javascript", "express", "sql", "tailwindcss"],
    "Data Scientist / AI Analyst": ["python", "sql", "machine learning", "r", "pandas", "numpy", "tensorflow", "scikit-learn"],
    "DevOps / Cloud Engineer": ["docker", "linux", "git", "aws", "kubernetes", "agile", "cicd", "jenkins"]
  };

  // Automatically refresh blob triggers when file array changes
  useEffect(() => {
    if (companyFiles && companyFiles.length > 0) {
      const urlMapping = {};
      companyFiles.forEach((file, idx) => {
        urlMapping[idx] = URL.createObjectURL(file);
      });
      setCachedUrls(urlMapping);

      return () => {
        Object.values(urlMapping).forEach(url => URL.revokeObjectURL(url));
      };
    } else {
      setCachedUrls({});
    }
  }, [companyFiles]);

  const calculateAlternateTracks = (candidateSkills) => {
    if (!candidateSkills || candidateSkills.length === 0) return [];
    const lowerCandidateSkills = candidateSkills.map(s => s.toLowerCase());
    const matchedTracks = [];

    Object.entries(industryStandardRoles).forEach(([roleName, coreSkills]) => {
      const matches = coreSkills.filter(skill => lowerCandidateSkills.includes(skill));
      const score = Math.round((matches.length / coreSkills.length) * 100);
      if (score >= 50) {
        matchedTracks.push({ role: roleName, score: score });
      }
    });
    return matchedTracks.sort((a, b) => b.score - a.score);
  };

  const handleBulkFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setCompanyFiles(filesArray);
    }
  };

  const triggerBulkProcessing = async (e) => {
    e.preventDefault();
    if (companyFiles.length === 0) return alert("Please select at least few resumes first.");
    setLoading(true);
    
    const finalSecondary = secondaryInput.trim() ? secondaryInput : "";

    try {
      const data = await apiService.bulkShortlistEngine(companyFiles, primaryInput, finalSecondary);
      setCompanyResults(data.shortlisted_matrix);
      if (data.shortlisted_matrix.length > 0) {
        setSelectedCompanyCandidate(data.shortlisted_matrix[0]);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPipeline = () => {
    setCompanyResults(null);
    setCompanyFiles([]);
    setSelectedCompanyCandidate(null);
    setSecondaryInput('');
  };

  return (
    // 🔥 FIXED: Container background is now a soothing Pale Sky Blue (bg-sky-50) tint, shifting away from grey slate/blank white glare
    <div className="min-h-screen bg-sky-50 dark:bg-slate-950 text-slate-700 dark:text-slate-100 p-4 md:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Portal Branding Module with Indigo/Violet Accents */}
        <div className="border-b border-sky-200 dark:border-slate-800 pb-4">
          <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent uppercase tracking-tight">
            ResuRanker Enterprise Corporate Portal
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-extrabold">Automated Multi-Candidate Fitment Matrix & High Volume Screening Core Engine</p>
        </div>

        {/* 📋 INPUT SETUP ZONE FORM (Crisp white panels with sky blue highlighters) */}
        {!companyResults && (
          <form onSubmit={triggerBulkProcessing} className="bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 p-6 rounded-2xl space-y-5 shadow-lg dark:shadow-none transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-black uppercase text-emerald-700 dark:text-emerald-400 mb-2">Mandatory Must-Have Skills (Required):</label>
                <input 
                  type="text" required value={primaryInput} onChange={(e) => setPrimaryInput(e.target.value)}
                  className="w-full p-3 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400 mb-2">Optional Preferred Skills (Optional - Can leave blank):</label>
                <input 
                  type="text" placeholder="e.g. Docker, AWS, Git (Or leave completely empty)" value={secondaryInput} onChange={(e) => setSecondaryInput(e.target.value)}
                  className="w-full p-3 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white font-black focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner transition"
                />
              </div>
            </div>

            {/* Custom File Upload Dropzone (Adaptive soft blue surface) */}
            <div className="border-2 border-dashed border-sky-200 dark:border-slate-800 rounded-xl p-8 bg-white/70 dark:bg-slate-950/40 text-center relative group hover:border-sky-400 dark:hover:border-slate-700 transition duration-200">
              <input type="file" multiple accept=".pdf" onChange={handleBulkFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
              <div className="text-slate-500 dark:text-slate-400 text-sm font-black uppercase tracking-wide">
                📁 {companyFiles.length > 0 ? `Ready to scan ${companyFiles.length} Candidate Resumes` : "Click or Drag & Drop Multiple PDF Resumes Here"}
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-sm uppercase tracking-wider rounded-xl hover:opacity-90 transition shadow-lg shadow-indigo-600/20 active:scale-[0.99]">
              {loading ? "🕵️‍♂️ Multi-Threaded AI Scanning In Progress..." : `Shortlist ${companyFiles.length} Candidates In 1-Click`}
            </button>
          </form>
        )}

        {/* 📊 INTERACTIVE CORPORATE SCREENER MAIN METRIC GRID */}
        {companyResults && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn">
            
            {/* Left Column Layout: Ranked shortlisting feed (Blue accents linked) */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 rounded-2xl p-4 space-y-3 h-[850px] overflow-y-auto shadow-sm">
              <div className="flex justify-between items-center px-2 border-b border-sky-100 dark:border-slate-800 pb-4">
                <span className="text-xs font-black tracking-widest text-slate-500 dark:text-slate-400 uppercase">Ranked Shortlist Feed</span>
                
                <button 
                  onClick={handleResetPipeline} 
                  className="px-5 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-black tracking-wider rounded-xl border-2 border-rose-500/30 dark:border-rose-500/40 hover:border-rose-500 transition-all shadow-md active:scale-95 uppercase"
                >
                  🔄 Reset Core Pipeline
                </button>
              </div>

              {companyResults.map((cand, i) => (
                <div 
                  key={cand.candidate_id}
                  onClick={() => setSelectedCompanyCandidate(cand)}
                  className={`p-3 rounded-xl border-2 cursor-pointer transition flex justify-between items-center ${
                    selectedCompanyCandidate?.candidate_id === cand.candidate_id 
                      ? 'bg-indigo-50 dark:bg-indigo-600/20 border-indigo-500 shadow-sm text-indigo-700 dark:text-indigo-400' 
                      : 'bg-sky-50/50 dark:bg-slate-950/40 border-sky-100 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="w-3/4">
                    <div className="text-xs font-black text-slate-400 dark:text-slate-500">RANK #{i+1}</div>
                    <div className="text-sm font-black truncate text-slate-700 dark:text-slate-200">{cand.filename}</div>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-mono font-black ${cand.score >= 70 ? 'text-emerald-600 dark:text-emerald-400' : cand.score >= 40 ? 'text-blue-600 dark:text-blue-400' : 'text-rose-600 dark:text-rose-400'}`}>
                      {cand.score}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column Layout: Candidate Deep-Dive Inspector Window (Balanced blue tint) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-800 rounded-2xl p-6 space-y-6 shadow-sm">
              {selectedCompanyCandidate ? (
                <>
                  <div>
                    <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight uppercase">{selectedCompanyCandidate.filename}</h3>
                    <p className="text-xs text-slate-400 font-extrabold">Automated Match Summary Metric Evaluation Analytics</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full h-[380px] bg-sky-100 dark:bg-slate-950 border-2 border-sky-200 dark:border-slate-800 rounded-xl overflow-hidden relative shadow-inner">
                      <iframe 
                        src={`${cachedUrls[selectedCompanyCandidate.file_index]}#toolbar=0`} 
                        className="w-full h-full border-none hidden md:block bg-white" 
                      />
                      <div className="md:hidden flex flex-col items-center justify-center h-full p-4 text-center space-y-3 bg-sky-100 dark:bg-slate-950">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Mobile document isolation activated</span>
                        <a href={cachedUrls[selectedCompanyCandidate.file_index]} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 text-white text-xs font-black rounded-lg uppercase tracking-wide">
                          Open Candidate CV
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                      <div className="p-3 bg-sky-50 dark:bg-slate-950 border border-sky-100 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">Calculated Fit Index</div>
                        <div className="text-3xl font-mono font-black text-indigo-600 dark:text-indigo-400 mt-1">{selectedCompanyCandidate.score}%</div>
                      </div>

                      <div>
                        <div className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">✅ Verified Must-Haves Met:</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedCompanyCandidate.verified_primary.map(s => (
                            <span key={s} className="text-xs md:text-sm px-3 py-1.5 font-black tracking-wide rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-500/20 dark:border-emerald-500/30 shadow-sm">
                              {s.toUpperCase()}
                            </span>
                          ))}
                          {selectedCompanyCandidate.verified_primary.length === 0 && <span className="text-xs italic text-slate-400 font-bold pl-1">No primary matches detected.</span>}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">❌ Critical Core Skills Missing:</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedCompanyCandidate.missing_primary.map(s => (
                            <span key={s} className="text-xs md:text-sm px-3 py-1.5 font-black tracking-wide rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-300 border-2 border-rose-500/20 dark:border-rose-500/30 shadow-sm">
                              {s.toUpperCase()}
                            </span>
                          ))}
                          {selectedCompanyCandidate.missing_primary.length === 0 && <span className="text-xs font-black text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-950/40 border-2 border-emerald-500/20 px-3 py-1 rounded-xl">🎉 Perfect Target Coverage!</span>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Path Section */}
                  <div className="border-t border-sky-100 dark:border-slate-800 pt-4 space-y-2">
                    <div className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 tracking-wider">🌍 Alternative Path Recommendations (Compatibility &ge; 50%)</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[160px] overflow-y-auto pr-1">
                      {calculateAlternateTracks(selectedCompanyCandidate.all_extracted).map((track) => (
                        <div key={track.role} className="p-2.5 bg-white dark:bg-slate-950 border-2 border-sky-100 dark:border-slate-800/80 rounded-xl flex flex-col justify-center space-y-1.5 shadow-sm">
                          <div className="flex justify-between items-center text-xs font-black text-slate-700 dark:text-slate-200">
                            <span>🔹 {track.role.toUpperCase()}</span>
                            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-black">{track.score}%</span>
                          </div>
                          <div className="w-full bg-sky-100 dark:bg-slate-900 h-2 rounded-full overflow-hidden border border-sky-200 dark:border-none">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${track.score}%` }}></div>
                          </div>
                        </div>
                      ))}
                      {calculateAlternateTracks(selectedCompanyCandidate.all_extracted).length === 0 && (
                        <div className="col-span-2 text-xs italic text-slate-400 font-bold p-2">
                          No alternative matching career paths found with competency density above 50%.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="border-t border-sky-100 dark:border-slate-800 pt-4">
                    <div className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">🔮 Holistic Skill Spectrum (AI Extracted Blueprint):</div>
                    <div className="flex flex-wrap gap-1.5 max-h-[100px] overflow-y-auto pr-1">
                      {selectedCompanyCandidate.all_extracted.map(skill => (
                        <span key={skill} className="text-xs px-2.5 py-1 bg-sky-50 dark:bg-slate-900 border-2 border-sky-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono rounded-lg font-black tracking-wide shadow-sm">
                          {skill.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-20 text-slate-400 font-extrabold uppercase tracking-widest text-xs">
                  Select a candidate from the ranked feed feed to investigate profiles.
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}