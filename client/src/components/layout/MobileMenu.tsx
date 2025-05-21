import { Link, useLocation } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <div 
      className={`md:hidden bg-primary text-white absolute z-10 w-64 h-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="p-4 border-b border-primary-light flex items-center space-x-2">
        <i className="bi bi-shield-lock-fill text-2xl"></i>
        <h1 className="text-xl font-bold">CyberShield</h1>
        <button 
          className="ml-auto text-white" 
          onClick={onClose}
          aria-label="Close menu"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      
      <nav className="flex-1 p-2">
        <ul>
          <li>
            <Link href="/">
              <a 
                className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/") ? "bg-primary-light" : "hover:bg-primary-light"}`}
                onClick={onClose}
              >
                <i className="bi bi-speedometer2"></i>
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/campaigns">
              <a 
                className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/campaigns") ? "bg-primary-light" : "hover:bg-primary-light"}`}
                onClick={onClose}
              >
                <i className="bi bi-graph-up"></i>
                <span>Campaigns</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/reports">
              <a 
                className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/reports") ? "bg-primary-light" : "hover:bg-primary-light"}`}
                onClick={onClose}
              >
                <i className="bi bi-journal-text"></i>
                <span>Reports</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a 
                className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/team") ? "bg-primary-light" : "hover:bg-primary-light"}`}
                onClick={onClose}
              >
                <i className="bi bi-people"></i>
                <span>Team</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a 
                className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/settings") ? "bg-primary-light" : "hover:bg-primary-light"}`}
                onClick={onClose}
              >
                <i className="bi bi-gear"></i>
                <span>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
