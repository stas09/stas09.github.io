interface HeaderProps {
  title: string;
  onMenuToggle: () => void;
}

export default function Header({ title, onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-4">
      <button 
        className="md:hidden text-gray-600 mr-2" 
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        <i className="bi bi-list text-2xl"></i>
      </button>
      
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary hidden md:block" 
            />
          </div>
          
          <div className="relative">
            <button className="text-gray-600 relative" aria-label="Notifications">
              <i className="bi bi-bell text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-accent rounded-full text-white text-xs flex items-center justify-center h-4 w-4">3</span>
            </button>
          </div>
          
          <div className="md:hidden relative">
            <div className="rounded-full bg-secondary h-8 w-8 flex items-center justify-center">
              <span className="text-white font-semibold">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
