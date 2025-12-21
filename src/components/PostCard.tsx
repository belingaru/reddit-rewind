import { useState } from "react";
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface PostCardProps {
  id: number;
  subreddit: string;
  subredditIcon: string;
  author: string;
  timeAgo: string;
  title: string;
  content?: string;
  image?: string;
  upvotes: number;
  comments: number;
  isPromoted?: boolean;
  showJoin?: boolean;
  popularIn?: string;
}

const PostCard = ({
  subreddit,
  subredditIcon,
  author,
  timeAgo,
  title,
  content,
  image,
  upvotes: initialUpvotes,
  comments,
  isPromoted,
  showJoin = true,
  popularIn,
}: PostCardProps) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [voteState, setVoteState] = useState<"up" | "down" | null>(null);

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (voteState === "up") {
      setVoteState(null);
      setUpvotes(initialUpvotes);
    } else {
      setVoteState("up");
      setUpvotes(initialUpvotes + 1);
    }
  };

  const handleDownvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (voteState === "down") {
      setVoteState(null);
      setUpvotes(initialUpvotes);
    } else {
      setVoteState("down");
      setUpvotes(initialUpvotes - 1);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <article className="py-3 px-4 hover:bg-secondary/50 transition-colors cursor-pointer border-b border-border">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm">
            {subredditIcon}
          </div>
          <span className="font-medium text-foreground hover:underline">r/{subreddit}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{timeAgo}</span>
          {popularIn && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">Popular in {popularIn}</span>
            </>
          )}
          {isPromoted && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">Promoted</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          {showJoin && (
            <Button className="h-7 px-4 text-xs font-semibold bg-join hover:bg-join/90 text-primary-foreground rounded-full">
              Join
            </Button>
          )}
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-medium mb-2 text-foreground leading-snug">{title}</h3>

      {/* Content */}
      {content && (
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{content}</p>
      )}

      {/* Image */}
      {image && (
        <div className="mb-3 rounded-xl overflow-hidden bg-muted">
          <img src={image} alt={title} className="w-full h-auto max-h-[512px] object-cover" />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Vote buttons */}
        <div className="flex items-center bg-secondary rounded-full">
          <button
            onClick={handleUpvote}
            className={cn(
              "flex items-center gap-1 px-2 py-1.5 rounded-l-full transition-colors",
              voteState === "up" 
                ? "text-upvote" 
                : "text-muted-foreground hover:text-upvote hover:bg-upvote/10"
            )}
          >
            <ArrowBigUp className={cn("h-5 w-5", voteState === "up" && "fill-current")} />
          </button>
          <span
            className={cn(
              "text-xs font-semibold px-1",
              voteState === "up" && "text-upvote",
              voteState === "down" && "text-downvote",
              !voteState && "text-foreground"
            )}
          >
            {formatNumber(upvotes)}
          </span>
          <button
            onClick={handleDownvote}
            className={cn(
              "flex items-center gap-1 px-2 py-1.5 rounded-r-full transition-colors",
              voteState === "down" 
                ? "text-downvote" 
                : "text-muted-foreground hover:text-downvote hover:bg-downvote/10"
            )}
          >
            <ArrowBigDown className={cn("h-5 w-5", voteState === "down" && "fill-current")} />
          </button>
        </div>

        {/* Comments */}
        <button className="flex items-center gap-1.5 bg-secondary hover:bg-muted rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
          <MessageSquare className="h-4 w-4" />
          <span className="text-xs font-medium">{formatNumber(comments)}</span>
        </button>

        {/* Share */}
        <button className="flex items-center gap-1.5 bg-secondary hover:bg-muted rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
          <Share2 className="h-4 w-4" />
          <span className="text-xs font-medium">Share</span>
        </button>
      </div>
    </article>
  );
};

export default PostCard;
