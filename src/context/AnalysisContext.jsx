import React, { createContext, useState } from 'react';

export const AnalysisContext = createContext();

export function AnalysisProvider({ children }) {
  // 🎯 1. Candidate Single Page persisted states
  const [analysisData, setAnalysisData] = useState(null);
  const [matrixData, setMatrixData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('targeted');

  // 💼 2. Company Enterprise Bulk Dashboard persisted states
  const [companyResults, setCompanyResults] = useState(null);
  const [companyFiles, setCompanyFiles] = useState([]);
  const [selectedCompanyCandidate, setSelectedCompanyCandidate] = useState(null);
  const [primaryInput, setPrimaryInput] = useState('React, Node.js, JavaScript, MongoDB');
  const [secondaryInput, setSecondaryInput] = useState('');

  return (
    <AnalysisContext.Provider value={{
      analysisData, setAnalysisData,
      matrixData, setMatrixData,
      selectedFile, setSelectedFile,
      isPreviewOpen, setIsPreviewOpen,
      activeTab, setActiveTab,
      
      companyResults, setCompanyResults,
      companyFiles, setCompanyFiles,
      selectedCompanyCandidate, setSelectedCompanyCandidate,
      primaryInput, setPrimaryInput,
      secondaryInput, setSecondaryInput
    }}>
      {children}
    </AnalysisContext.Provider>
  );
}