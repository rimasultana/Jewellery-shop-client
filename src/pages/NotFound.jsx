import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl text-gray-700 mb-4">Oops! Page not found.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
