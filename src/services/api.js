// 🔥 FIXED: Aapka naya localtunnel live backend link yahan set ho gaya hai
const BASE_URL = "/api/v1";

// Localtunnel ke warning page ko bypass karne ke liye generic headers configuration
const tunnelHeaders = {
  "bypass-tunnel-reminder": "true",
};

export const apiService = {
  // 1. Fetch system roles for dropdown
  fetchSystemRoles: async () => {
    try {
      const response = await fetch(`${BASE_URL}/resume/roles`, {
        headers: tunnelHeaders
      });
      if (!response.ok) throw new Error("Roles load karne mein dikkat aayi.");
      const data = await response.json();
      return data.roles || [];
    } catch (error) {
      console.error("Fetch Roles Error:", error);
      return [];
    }
  },

  // 2. Single Path Targeted Analysis
  analyzeTargetProfile: async (file, targetRole) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("target_role", targetRole);

    const response = await fetch(`${BASE_URL}/resume/analyze`, {
      method: "POST",
      headers: tunnelHeaders, // Bypass guard triggered
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Analysis pipeline fail ho gayi.");
    }
    return await response.json();
  },

  // 3. Multi-Role Fitment Matrix
  fetchFitmentMatrix: async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${BASE_URL}/resume/filter-roles`, {
      method: "POST",
      headers: tunnelHeaders, // Bypass guard triggered
      body: formData,
    });

    if (!response.ok) throw new Error("Matrix cross-matching failed.");
    return await response.json();
  },
  // Bulk Resumes Screening Controller Engine
  bulkShortlistEngine: async (filesArray, primarySkillsStr, secondarySkillsStr) => {
    const formData = new FormData();
    
    // Natively append multiple files inside a single multi-part array vector
    filesArray.forEach((file) => {
      formData.append("files", file); 
    });
    formData.append("primary_jd", primarySkillsStr);
    formData.append("secondary_jd", secondarySkillsStr);

    const response = await fetch(`${BASE_URL}/company/bulk-analyze`, {
      method: "POST",
      headers: {
        "bypass-tunnel-reminder": "true", // Localtunnel bypass security guard
      },
      body: formData,
    });

    if (!response.ok) throw new Error("Bulk shortlisting engine execution failed.");
    return await response.json();
  },
};