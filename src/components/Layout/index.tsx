import { Outlet, Link, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-black font-bold text-xl">
              HOKTUS
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`${
                  isActive('/')
                    ? 'text-black font-semibold'
                    : 'text-gray-600 hover:text-black'
                } transition-colors`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about')
                    ? 'text-black font-semibold'
                    : 'text-gray-600 hover:text-black'
                } transition-colors`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
