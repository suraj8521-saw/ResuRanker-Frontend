// Vite proxy live server redirection mapping
const BASE_URL = "/api/v1";

export const apiService = {
  // 1. Fetch system roles for dropdown
  fetchSystemRoles: async () => {
    try {
      // 🔥 FIXED: Logs ke mutabik path /resume/roles hoga
      const response = await fetch(`${BASE_URL}/resume/roles`); 
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

    // 🔥 FIXED: Logs ke mutabik path /resume/analyze hoga
    const response = await fetch(`${BASE_URL}/resume/analyze`, { 
      method: "POST",
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

    // 🌟 YEH ALREADY PERFECTION SE CHAL RAHA THA (200 OK)
    const response = await fetch(`${BASE_URL}/resume/filter-roles`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Matrix cross-matching failed.");
    return await response.json();
  },

  // 4. Bulk Resumes Screening Controller Engine (Corporate Bulk Router)
  bulkShortlistEngine: async (filesArray, primarySkillsStr, secondarySkillsStr) => {
    const formData = new FormData();
    
    filesArray.forEach((file) => {
      formData.append("files", file); 
    });
    formData.append("primary_jd", primarySkillsStr);
    formData.append("secondary_jd", secondarySkillsStr);

    // Agar company router ka path bhi /company/bulk-analyze hai, toh ye sahi hai
    const response = await fetch(`${BASE_URL}/company/bulk-analyze`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Bulk shortlisting engine execution failed.");
    return await response.json();
  },
};