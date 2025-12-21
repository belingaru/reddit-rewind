import { Image, Link2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CreatePostBar = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-2 mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-lg">👤</span>
        </div>
        <Input
          placeholder="Create Post"
          className="flex-1 bg-secondary border-none rounded-full h-10"
        />
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Image className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Link2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CreatePostBar;
