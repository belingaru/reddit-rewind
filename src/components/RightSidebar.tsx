import { TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";

const trendingTopics = [
  { topic: "Technology", posts: "25.4K posts" },
  { topic: "Gaming", posts: "18.2K posts" },
  { topic: "Sports", posts: "15.8K posts" },
  { topic: "Entertainment", posts: "12.3K posts" },
];

const growingCommunities = [
  { name: "LocalLLaMA", members: "452K", growth: "+12%" },
  { name: "ChatGPT", members: "3.2M", growth: "+8%" },
  { name: "StableDiffusion", members: "891K", growth: "+6%" },
  { name: "wallstreetbets", members: "14.8M", growth: "+4%" },
];

const RightSidebar = () => {
  return (
    <aside className="hidden xl:block w-80 shrink-0">
      <div className="sticky top-16 space-y-4">
        {/* Premium Banner */}
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">✦</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Reddit Premium</h3>
              <p className="text-xs text-muted-foreground mt-1">
                The best Reddit experience, with monthly Coins
              </p>
            </div>
          </div>
          <Button className="w-full mt-3" size="sm">
            Try Now
          </Button>
        </div>

        {/* Trending Today */}
        <div className="bg-card rounded-lg border border-border">
          <div className="flex items-center gap-2 p-3 border-b border-border">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="font-semibold text-sm">Trending Today</span>
          </div>
          <div className="p-2">
            {trendingTopics.map((item, index) => (
              <Button
                key={item.topic}
                variant="ghost"
                className="w-full justify-start gap-3 font-normal text-sm h-auto py-2"
              >
                <span className="text-muted-foreground text-xs w-4">{index + 1}</span>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{item.topic}</span>
                  <span className="text-xs text-muted-foreground">{item.posts}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Top Growing Communities */}
        <div className="bg-card rounded-lg border border-border">
          <div className="flex items-center gap-2 p-3 border-b border-border">
            <Users className="h-4 w-4 text-primary" />
            <span className="font-semibold text-sm">Top Growing Communities</span>
          </div>
          <div className="p-2">
            {growingCommunities.map((community, index) => (
              <div
                key={community.name}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              >
                <span className="text-muted-foreground text-xs w-4">{index + 1}</span>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {community.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">r/{community.name}</p>
                  <p className="text-xs text-muted-foreground">{community.members} members</p>
                </div>
                <span className="text-xs text-online font-medium">{community.growth}</span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border">
            <Button variant="secondary" size="sm" className="w-full">
              View All
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-muted-foreground space-y-2 px-2">
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <a href="#" className="hover:underline">User Agreement</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Content Policy</a>
          </div>
          <p>Reddit Clone © 2024. All rights reserved.</p>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
