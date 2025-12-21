import { Flame, Clock, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = [
  { id: "best", label: "Best", icon: Sparkles },
  { id: "hot", label: "Hot", icon: Flame },
  { id: "new", label: "New", icon: Clock },
  { id: "top", label: "Top", icon: TrendingUp },
];

const FeedFilter = () => {
  const [activeFilter, setActiveFilter] = useState("best");

  return (
    <div className="bg-card rounded-lg border border-border p-2 mb-4">
      <div className="flex items-center gap-1">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant="ghost"
            size="sm"
            onClick={() => setActiveFilter(filter.id)}
            className={cn(
              "gap-2 font-medium",
              activeFilter === filter.id && "bg-muted text-foreground"
            )}
          >
            <filter.icon className={cn(
              "h-4 w-4",
              activeFilter === filter.id && "text-primary"
            )} />
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FeedFilter;
