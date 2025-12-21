import { ChevronDown, LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";

const FeedFilter = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
      <Button variant="ghost" size="sm" className="gap-1 text-foreground hover:bg-secondary font-medium">
        Best
        <ChevronDown className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:bg-secondary">
        <LayoutGrid className="h-4 w-4" />
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default FeedFilter;
