const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Fake Store</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Products
            </a>

            <a
              href="https://www.devahoy.com"
              className="text-gray-600 hover:text-gray-900 font-medium"
              target="_blank"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
