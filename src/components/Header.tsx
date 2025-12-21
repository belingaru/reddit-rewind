import { Search, Bell, MessageCircle, Plus, Menu, Video } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebarContext } from "@/context/SidebarContext";

const Header = () => {
  const { toggle } = useSidebarContext();

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="flex h-12 items-center justify-between px-4 gap-4">
        {/* Left section - Logo */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggle}
            className="text-muted-foreground hover:text-foreground hover:bg-secondary"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">reddit</span>
          </a>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative flex items-center">
            <div className="flex items-center w-full bg-secondary rounded-full px-4 py-2 gap-2 hover:bg-muted transition-colors">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-primary-foreground">
                  <path d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23l.65-3.08 2.13.45a1.04 1.04 0 1 0 .11-.5l-2.38-.5a.25.25 0 0 0-.29.19l-.73 3.44a7.08 7.08 0 0 0-3.93 1.23 1.46 1.46 0 1 0-1.63 2.38 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .84-1.38zM6.67 11a1.04 1.04 0 1 1 2.08 0 1.04 1.04 0 0 1-2.08 0zm5.83 2.77a3.58 3.58 0 0 1-2.42.77 3.58 3.58 0 0 1-2.42-.77.25.25 0 1 1 .35-.36 3.08 3.08 0 0 0 2.07.63 3.08 3.08 0 0 0 2.07-.63.25.25 0 0 1 .35.36zm-.19-1.73a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Find anything"
                className="flex-1 bg-transparent border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <div className="flex items-center gap-1 bg-muted rounded-full px-3 py-1">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Ask</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Actions */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:bg-secondary">
            <Plus className="h-4 w-4" />
            <span className="hidden md:inline">Create</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center ml-1">
            <span className="text-xs font-bold text-primary-foreground">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
