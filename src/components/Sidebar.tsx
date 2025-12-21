import { Home, Flame, Compass, ArrowUpRight, Plus, ChevronUp, Gamepad2, LayoutGrid, Star, Info, Megaphone, Code, Sparkles, HelpCircle, FileText, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useSidebarContext } from "@/context/SidebarContext";

const games = [
  { name: "Pocket Grids", subtitle: "Mini crosswords", players: "1.4M monthly players", icon: "🟪", isNew: true },
  { name: "Farm Merge Valley", icon: "🌾" },
  { name: "Quiz Planet", icon: "🧠" },
  { name: "Sword & Supper", icon: "⚔️" },
];

const recentCommunities = [
  { name: "r/Daytrading", icon: "📈" },
];

const communities = [
  { name: "r/formula1", icon: "🏎️", hasStar: true },
];

const Sidebar = () => {
  const { isOpen } = useSidebarContext();
  const [gamesOpen, setGamesOpen] = useState(true);
  const [customFeedsOpen, setCustomFeedsOpen] = useState(true);
  const [recentOpen, setRecentOpen] = useState(true);
  const [communitiesOpen, setCommunitiesOpen] = useState(true);
  const [resourcesOpen, setResourcesOpen] = useState(true);

  return (
    <aside 
      className={cn(
        "hidden lg:block shrink-0 h-[calc(100vh-48px)] overflow-y-auto scrollbar-thin transition-all duration-300 ease-in-out",
        isOpen ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"
      )}
    >
      <div className="py-3 px-2 space-y-1 w-64">
        {/* Main Navigation */}
        <nav className="space-y-0.5">
          <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
            <Home className="h-5 w-5" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
            <Flame className="h-5 w-5" />
            Popular
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
            <Compass className="h-5 w-5" />
            Explore
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
            <ArrowUpRight className="h-5 w-5" />
            All
          </Button>
          <div className="h-px bg-border my-2" />
          <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
            <Plus className="h-5 w-5" />
            Start a community
          </Button>
        </nav>

        <div className="h-px bg-border my-3" />

        {/* Games Section */}
        <div>
          <button
            onClick={() => setGamesOpen(!gamesOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground"
          >
            Games on Reddit
            <ChevronUp className={cn("h-4 w-4 transition-transform", !gamesOpen && "rotate-180")} />
          </button>
          {gamesOpen && (
            <div className="space-y-0.5 mt-1">
              {games.map((game) => (
                <Button
                  key={game.name}
                  variant="ghost"
                  className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-sm relative">
                    {game.icon}
                    {game.isNew && (
                      <span className="absolute -top-1 -right-1 bg-primary text-[10px] px-1 rounded text-primary-foreground">NEW</span>
                    )}
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm">{game.name}</span>
                    {game.subtitle && <span className="text-xs text-muted-foreground">{game.subtitle}</span>}
                  </div>
                </Button>
              ))}
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-muted-foreground hover:bg-secondary">
                <Gamepad2 className="h-5 w-5" />
                Discover More Games
              </Button>
            </div>
          )}
        </div>

        <div className="h-px bg-border my-3" />

        {/* Custom Feeds */}
        <div>
          <button
            onClick={() => setCustomFeedsOpen(!customFeedsOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground"
          >
            Custom Feeds
            <ChevronUp className={cn("h-4 w-4 transition-transform", !customFeedsOpen && "rotate-180")} />
          </button>
          {customFeedsOpen && (
            <div className="space-y-0.5 mt-1">
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <Plus className="h-5 w-5" />
                Create Custom Feed
              </Button>
            </div>
          )}
        </div>

        <div className="h-px bg-border my-3" />

        {/* Recent */}
        <div>
          <button
            onClick={() => setRecentOpen(!recentOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground"
          >
            Recent
            <ChevronUp className={cn("h-4 w-4 transition-transform", !recentOpen && "rotate-180")} />
          </button>
          {recentOpen && (
            <div className="space-y-0.5 mt-1">
              {recentCommunities.map((community) => (
                <Button
                  key={community.name}
                  variant="ghost"
                  className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary"
                >
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs">
                    {community.icon}
                  </div>
                  {community.name}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="h-px bg-border my-3" />

        {/* Communities */}
        <div>
          <button
            onClick={() => setCommunitiesOpen(!communitiesOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground"
          >
            Communities
            <ChevronUp className={cn("h-4 w-4 transition-transform", !communitiesOpen && "rotate-180")} />
          </button>
          {communitiesOpen && (
            <div className="space-y-0.5 mt-1">
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-muted-foreground hover:bg-secondary">
                <LayoutGrid className="h-5 w-5" />
                Manage Communities
              </Button>
              {communities.map((community) => (
                <Button
                  key={community.name}
                  variant="ghost"
                  className="w-full justify-between h-10 font-normal text-foreground hover:bg-secondary group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs">
                      {community.icon}
                    </div>
                    {community.name}
                  </div>
                  {community.hasStar && <Star className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="h-px bg-border my-3" />

        {/* Resources */}
        <div>
          <button
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground"
          >
            Resources
            <ChevronUp className={cn("h-4 w-4 transition-transform", !resourcesOpen && "rotate-180")} />
          </button>
          {resourcesOpen && (
            <div className="space-y-0.5 mt-1">
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <Info className="h-5 w-5" />
                About Reddit
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <Megaphone className="h-5 w-5" />
                Advertise
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <Code className="h-5 w-5" />
                Developer Platform
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <Sparkles className="h-5 w-5" />
                Reddit Pro
                <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded ml-1">BETA</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <HelpCircle className="h-5 w-5" />
                Help
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <FileText className="h-5 w-5" />
                Blog
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-10 font-normal text-foreground hover:bg-secondary">
                <Briefcase className="h-5 w-5" />
                Careers
              </Button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
