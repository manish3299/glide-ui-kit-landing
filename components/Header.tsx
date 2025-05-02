export function Header() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Glide UI</h1>
        <nav className="space-x-6 text-sm">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#github" className="hover:text-blue-600">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
