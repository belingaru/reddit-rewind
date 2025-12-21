import { Home, Flame, ArrowUpRight, ChevronDown, Plus } from "lucide-react";
import { Button } from "./ui/button";

const communities = [
  { name: "AskReddit", members: "45.2M", icon: "?" },
  { name: "funny", members: "52.1M", icon: "😂" },
  { name: "gaming", members: "38.4M", icon: "🎮" },
  { name: "worldnews", members: "33.8M", icon: "🌍" },
  { name: "pics", members: "31.2M", icon: "📷" },
  { name: "todayilearned", members: "29.5M", icon: "💡" },
  { name: "movies", members: "28.1M", icon: "🎬" },
  { name: "science", members: "26.8M", icon: "🔬" },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-16 space-y-4">
        {/* Main Navigation */}
        <nav className="bg-card rounded-lg border border-border p-3">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 font-normal">
              <Home className="h-5 w-5" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 font-normal">
              <Flame className="h-5 w-5 text-primary" />
              Popular
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 font-normal">
              <ArrowUpRight className="h-5 w-5" />
              All
            </Button>
          </div>
        </nav>

        {/* Communities */}
        <div className="bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between p-3 border-b border-border">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Your Communities
            </span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-2">
            <Button variant="ghost" className="w-full justify-start gap-3 font-normal text-sm">
              <Plus className="h-4 w-4" />
              Create a community
            </Button>
            {communities.map((community) => (
              <Button
                key={community.name}
                variant="ghost"
                className="w-full justify-start gap-3 font-normal text-sm"
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs">
                  {community.icon}
                </div>
                <div className="flex flex-col items-start">
                  <span>r/{community.name}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
