import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Page not found</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};
