import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin"; 
import Work from "./pages/Work";

// 1. Scroll To Top Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 2. Page Transition Wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// 3. 404 Not Found Page
const NotFound = () => (
  <div className="h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
    <h1 className="text-9xl font-black text-white/5 absolute select-none">404</h1>
    <div className="relative z-10 text-center">
      <h2 className="text-3xl font-bold mb-4 text-cyan-500">System.Error: Page_Not_Found</h2>
      <a href="/" className="bg-slate-900 border border-slate-700 hover:bg-cyan-600 hover:border-cyan-500 hover:text-white transition-all px-8 py-3 rounded-full font-bold text-slate-300">
        Return to Dashboard
      </a>
    </div>
  </div>
);

// 4. Helper to conditionally render Footer
// This ensures the Footer does NOT show up on the Admin Panel
const LayoutWithFooter = ({ children }) => {
  const location = useLocation();
  const showFooter = location.pathname !== "/admin";

  return (
    <>
      <main className="min-h-screen">
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Navbar handles its own hiding logic internally */}
      <Navbar />

      <LayoutWithFooter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
            
            {/* Admin Route - No PageWrapper to keep dashboard layout stable */}
            <Route path="/admin" element={<Admin />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </LayoutWithFooter>
    </BrowserRouter>
  );
}

export default App;