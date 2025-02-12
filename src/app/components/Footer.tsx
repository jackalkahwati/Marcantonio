const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-base text-gray-500 hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/services#defense" className="text-base text-gray-500 hover:text-gray-900">
                  Defense Innovation
                </a>
              </li>
              <li>
                <a href="/services#technology" className="text-base text-gray-500 hover:text-gray-900">
                  Technology Solutions
                </a>
              </li>
              <li>
                <a href="/services#consulting" className="text-base text-gray-500 hover:text-gray-900">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:info@marcantoniodefense.com" className="text-base text-gray-500 hover:text-gray-900">
                  info@marcantoniodefense.com
                </a>
              </li>
              <li>
                <span className="text-base text-gray-500">
                  Washington, D.C. Metro Area
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Marcantonio Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 