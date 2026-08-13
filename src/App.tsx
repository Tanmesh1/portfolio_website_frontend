/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { ScrollToTop } from './components/ScrollToTop';

const HomeScreen = lazy(() => import('./pages/HomeScreen').then((m) => ({ default: m.HomeScreen })));
const ProjectsScreen = lazy(() => import('./pages/ProjectsScreen').then((m) => ({ default: m.ProjectsScreen })));
const ExperienceScreen = lazy(() => import('./pages/ExperienceScreen').then((m) => ({ default: m.ExperienceScreen })));
const AssistantScreen = lazy(() => import('./pages/AssistantScreen').then((m) => ({ default: m.AssistantScreen })));
const BlogScreen = lazy(() => import('./pages/BlogScreen').then((m) => ({ default: m.BlogScreen })));
const BlogPostScreen = lazy(() => import('./pages/BlogPostScreen').then((m) => ({ default: m.BlogPostScreen })));
const AgenticSalesDriverCaseStudy = lazy(() =>
  import('./pages/case-studies/AgenticSalesDriverCaseStudy').then((m) => ({ default: m.AgenticSalesDriverCaseStudy })),
);
const ReqscanAiAnalyzerCaseStudy = lazy(() =>
  import('./pages/case-studies/ReqscanAiAnalyzerCaseStudy').then((m) => ({ default: m.ReqscanAiAnalyzerCaseStudy })),
);

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
        <Suspense fallback={null}>
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
        </Suspense>
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
