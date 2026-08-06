export const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <p className="text-on-primary-container text-sm tracking-wide">
          © 2026 Tanmesh Joshi. Engineered for the deep void.
        </p>
        <div className="flex items-center gap-8">
          <a href="https://github.com/Tanmesh1" className="text-on-primary-container hover:text-secondary transition-colors text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/tanmeshjoshi" className="text-on-primary-container hover:text-secondary transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-on-primary-container hover:text-secondary transition-colors text-sm">Twitter</a>
          <a href="mailto:joshi.tanmesh@gmail.com" className="text-on-primary-container hover:text-secondary transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
};
