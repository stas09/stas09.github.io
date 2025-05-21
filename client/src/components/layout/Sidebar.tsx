import { Link, useLocation } from "wouter";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <aside className={`hidden md:flex flex-col w-64 bg-primary text-white ${className}`}>
      <div className="p-4 border-b border-primary-light flex items-center space-x-2">
        <i className="bi bi-shield-lock-fill text-2xl"></i>
        <h1 className="text-xl font-bold">CyberShield</h1>
      </div>
      
      <nav className="flex-1 p-2">
        <ul>
          <li>
            <Link href="/">
              <a className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/") ? "bg-primary-light" : "hover:bg-primary-light"}`}>
                <i className="bi bi-speedometer2"></i>
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/campaigns">
              <a className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/campaigns") ? "bg-primary-light" : "hover:bg-primary-light"}`}>
                <i className="bi bi-graph-up"></i>
                <span>Campaigns</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/reports">
              <a className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/reports") ? "bg-primary-light" : "hover:bg-primary-light"}`}>
                <i className="bi bi-journal-text"></i>
                <span>Reports</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/team") ? "bg-primary-light" : "hover:bg-primary-light"}`}>
                <i className="bi bi-people"></i>
                <span>Team</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a className={`flex items-center space-x-2 p-3 rounded-lg mb-1 ${isActive("/settings") ? "bg-primary-light" : "hover:bg-primary-light"}`}>
                <i className="bi bi-gear"></i>
                <span>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-primary-light">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-secondary h-8 w-8 flex items-center justify-center">
            <span className="text-white font-semibold">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-300">Security Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
