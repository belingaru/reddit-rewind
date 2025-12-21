import { Search, Bell, MessageCircle, Plus, ChevronDown, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className="flex h-12 items-center justify-between px-4 gap-4">
        {/* Left section - Logo */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
              <svg viewBox="0 0 20 20" className="w-5 h-5 fill-primary-foreground">
                <circle cx="10" cy="10" r="10" />
                <path
                  d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23l.65-3.08 2.13.45a1.04 1.04 0 1 0 .11-.5l-2.38-.5a.25.25 0 0 0-.29.19l-.73 3.44a7.08 7.08 0 0 0-3.93 1.23 1.46 1.46 0 1 0-1.63 2.38 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .84-1.38zM6.67 11a1.04 1.04 0 1 1 2.08 0 1.04 1.04 0 0 1-2.08 0zm5.83 2.77a3.58 3.58 0 0 1-2.42.77 3.58 3.58 0 0 1-2.42-.77.25.25 0 1 1 .35-.36 3.08 3.08 0 0 0 2.07.63 3.08 3.08 0 0 0 2.07-.63.25.25 0 0 1 .35.36zm-.19-1.73a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z"
                  className="fill-primary"
                />
              </svg>
            </div>
            <span className="hidden sm:block text-xl font-semibold text-primary">reddit</span>
          </a>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search Reddit"
              className="w-full pl-10 pr-4 h-10 bg-secondary border-none rounded-full focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Right section - Actions */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Plus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Log In
          </Button>
          <Button size="sm" className="hidden md:flex">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
