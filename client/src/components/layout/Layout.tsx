import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import ChatSupport from "../shared/ChatSupport";

interface LayoutProps {
  children: ReactNode;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Layout({ children, mobileMenuOpen, setMobileMenuOpen }: LayoutProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title="Dashboard" 
          onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100" id="mainContent">
          {children}
          
          <ChatSupport />
        </main>
      </div>
    </div>
  );
}
