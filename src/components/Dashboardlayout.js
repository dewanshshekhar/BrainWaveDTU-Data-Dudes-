import React, { useState } from 'react';
import { Moon, Sun, Search, Settings, ChevronLeft, ChevronRight, Plus, Send, Wallet } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Dashboard = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Navigation items configuration
  const navigationItems = [
    { name: 'Overview', path: '/' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Budget Planner', path: '/budget' },
    { name: 'Insights', path: '/insights' }
  ];

  // Base styles that change with theme
  const themeStyles = {
    dark: {
      background: 'bg-[#0A0A0F]',
      surface: 'bg-[#12121A]',
      text: 'text-white',
      nav: 'bg-[#12121A]/50',
    },
    light: {
      background: 'bg-gray-100',
      surface: 'bg-white',
      text: 'text-gray-900',
      nav: 'bg-white',
    }
  };

  const currentTheme = themeStyles[theme];

  // Function to check if a path is active
  const isActivePath = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Determine if we should show the hero section (only on home page)
  const showHero = location.pathname === '/';

  return (
    <div className={`min-h-screen ${currentTheme.background} ${currentTheme.text} font-sans transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 px-6 py-4 flex items-center justify-between backdrop-blur-sm ${currentTheme.nav} z-50`}>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
          <span className="text-xl font-semibold">SmartSpend AI</span>
        </Link>
        
        <div className="flex items-center gap-6">
          {navigationItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 transition-colors relative ${
                isActivePath(path) 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {name}
              {isActivePath(path) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full" />
              )}
            </Link>
          ))}
          <button
            onClick={() => navigate('/finance')}
            className={`px-4 py-2 transition-colors relative ${
              isActivePath('/finance') ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Payment
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="/api/placeholder/32/32" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="px-4 py-2 text-sm font-medium bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            + Pro
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
            Join Now
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20"> {/* Added padding to account for fixed navbar */}
        {showHero ? (
          <>
            {/* Hero Section */}
            <div className="text-center mt-20 px-4">
              <h1 className="text-5xl font-bold mb-6">
                Pre-built method for
                <br />
                Payment Performance
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Financial performance is a complete evaluation of standing in categories such
                as assets, liabilities, expenses, revenue, and overall profitability.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <button 
                  className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  onClick={() => navigate('/community')}
                >
                  Join Web 3 Community
                </button>
                <button 
                  className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  onClick={() => navigate('/transactions')}
                >
                  Try it now!
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-1 text-sm">
                <span className="text-gray-400">Try our demo of dashboard now!</span>
                <span className="text-gray-400">-</span>
                <Link 
                  to="/transactions"
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 group"
                >
                  Learn more
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="mt-16 px-6">
              {/* Add your dashboard preview content here */}
            </div>
          </>
        ) : (
          // Render the child components (pages) when not on home
          <main className="px-6">
            {children}
          </main>
        )}
      </div>
    </div>
  );
};

export default Dashboard;