import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnalysisProvider } from "./context/AnalysisContext"; // Centralized global state provider
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; 
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Editor from "./pages/Editor";
import CompanyDashboard from "./pages/CompanyDashboard"; 
import About from "./pages/About";
import SignIn from "./pages/SignIn"; // 🔥 Added: Authentication Sign-In pipeline route
import SignUp from "./pages/SignUp"; // 🔥 Added: Account generation Sign-Up pipeline route
import FeatureAlert from "./pages/FeatureAlert";
function App() {
  return (
    <AnalysisProvider> 
      <Router>
        {/* 🔥 FIXED: Base element background matched to bg-sky-50/60 to guarantee perfect layout consistency */}
        <div className="min-h-screen flex flex-col bg-sky-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Navbar />
          
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analyze" element={<Analyze />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/company" element={<CompanyDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} /> {/* 🔥 Added */}
              <Route path="/signup" element={<SignUp />} /> {/* 🔥 Added */}
              <Route path="/alert" element={<FeatureAlert />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AnalysisProvider>
  );
}

export default App;