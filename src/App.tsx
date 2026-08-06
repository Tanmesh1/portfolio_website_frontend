/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { ScrollToTop } from './components/ScrollToTop';

import { HomeScreen } from './pages/HomeScreen';
import { ProjectsScreen } from './pages/ProjectsScreen';
import { ExperienceScreen } from './pages/ExperienceScreen';
import { AssistantScreen } from './pages/AssistantScreen';
import { BlogScreen } from './pages/BlogScreen';
import { BlogPostScreen } from './pages/BlogPostScreen';
import { AgenticSalesDriverCaseStudy } from './pages/case-studies/AgenticSalesDriverCaseStudy';
import { ReqscanAiAnalyzerCaseStudy } from './pages/case-studies/ReqscanAiAnalyzerCaseStudy';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/projects/agentic-sales-driver" element={<AgenticSalesDriverCaseStudy />} />
          <Route path="/projects/reqscan-ai-analyzer" element={<ReqscanAiAnalyzerCaseStudy />} />
          <Route path="/experience" element={<ExperienceScreen />} />
          <Route path="/assistant" element={<AssistantScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/blog/:slug" element={<BlogPostScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="grow">
          <AnimatedRoutes />
        </main>

        <Footer />
        <MobileNav />
      </div>
    </BrowserRouter>
  );
}
