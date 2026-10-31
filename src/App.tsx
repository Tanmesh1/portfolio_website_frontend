/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { ScrollToTop } from './components/ScrollToTop';

const HomeScreen = lazy(() => import('./pages/HomeScreen').then((m) => ({ default: m.HomeScreen })));
const ConsultingScreen = lazy(() => import('./pages/ConsultingScreen').then((m) => ({ default: m.ConsultingScreen })));
const ManualOpsAutomationCaseStudy = lazy(() =>
  import('./pages/case-studies/ManualOpsAutomationCaseStudy').then((m) => ({ default: m.ManualOpsAutomationCaseStudy })),
);
const ProjectsScreen = lazy(() => import('./pages/ProjectsScreen').then((m) => ({ default: m.ProjectsScreen })));
const ExperienceScreen = lazy(() => import('./pages/ExperienceScreen').then((m) => ({ default: m.ExperienceScreen })));
const AssistantScreen = lazy(() => import('./pages/AssistantScreen').then((m) => ({ default: m.AssistantScreen })));
const BlogScreen = lazy(() => import('./pages/BlogScreen').then((m) => ({ default: m.BlogScreen })));
const BlogPostScreen = lazy(() => import('./pages/BlogPostScreen').then((m) => ({ default: m.BlogPostScreen })));
const ProjectCaseStudy = lazy(() =>
  import('./pages/case-studies/ProjectCaseStudy').then((m) => ({ default: m.ProjectCaseStudy })),
);

const AnimatedRoutes = () => {
  const location = useLocation();

  // Fade in only. An exit animation (AnimatePresence mode="wait") got stuck when the
  // location changed mid-transition — redirects and fast clicks left a blank or stale page.
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Suspense fallback={null}>
        <Routes location={location}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/consulting" element={<ConsultingScreen />} />
          <Route path="/consulting/manual-ops-automation" element={<ManualOpsAutomationCaseStudy />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/experience" element={<ExperienceScreen />} />
          <Route path="/assistant" element={<AssistantScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/blog/:slug" element={<BlogPostScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </motion.div>
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
