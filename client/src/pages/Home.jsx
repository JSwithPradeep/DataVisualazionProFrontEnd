import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='bg-white-800'>
      <header className="bg-green-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Welcome to Home</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="relative">
                <Link to="/entry" className="nav-link">Entry</Link>
                <div className="triangle"></div>
              </li>
              <li className="relative">
                <Link to="/table" className="nav-link">Table</Link>
                <div className="triangle"></div>
              </li>
              <li className="relative">
                <Link to="/chart" className="nav-link">Chart</Link>
                <div className="triangle"></div>
              </li>
              <li className="relative">
                <Link to="/login" className="nav-link">Login</Link>
                <div className="triangle"></div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Data Visualization Project</h2>
        <p className="text-lg">We provide best solution for data Visualazion With Lattest and modern Technology.</p>
      </div>
    </div>
  );
};

export default HomePage;
