import { useState } from "react";
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Bookmark, MoreHorizontal, Award } from "lucide-react";
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
  awards?: string[];
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
  awards,
}: PostCardProps) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [voteState, setVoteState] = useState<"up" | "down" | null>(null);

  const handleUpvote = () => {
    if (voteState === "up") {
      setVoteState(null);
      setUpvotes(initialUpvotes);
    } else {
      setVoteState("up");
      setUpvotes(initialUpvotes + 1);
    }
  };

  const handleDownvote = () => {
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
    <article className="bg-card rounded-lg border border-border hover:border-muted-foreground/30 transition-colors cursor-pointer">
      <div className="p-3">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs mb-2">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-bold">
            {subredditIcon}
          </div>
          <span className="font-semibold hover:underline">r/{subreddit}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">Posted by u/{author}</span>
          <span className="text-muted-foreground">{timeAgo}</span>
          {awards && awards.length > 0 && (
            <div className="flex items-center gap-1">
              <Award className="h-3 w-3 text-yellow-500" />
              <span className="text-muted-foreground">{awards.length}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium mb-2 leading-snug">{title}</h3>

        {/* Content */}
        {content && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{content}</p>
        )}

        {/* Image */}
        {image && (
          <div className="mb-3 rounded-lg overflow-hidden bg-muted">
            <img src={image} alt={title} className="w-full h-auto max-h-[512px] object-cover" />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Vote buttons */}
          <div className="flex items-center bg-secondary rounded-full">
            <Button
              variant={voteState === "up" ? "vote-active-up" : "vote"}
              size="xs"
              onClick={handleUpvote}
              className={cn(
                "rounded-l-full px-2",
                voteState === "up" && "animate-vote-bounce"
              )}
            >
              <ArrowBigUp className={cn("h-5 w-5", voteState === "up" && "fill-current")} />
            </Button>
            <span
              className={cn(
                "text-xs font-semibold min-w-[2rem] text-center",
                voteState === "up" && "text-upvote",
                voteState === "down" && "text-downvote"
              )}
            >
              {formatNumber(upvotes)}
            </span>
            <Button
              variant={voteState === "down" ? "vote-active-down" : "vote"}
              size="xs"
              onClick={handleDownvote}
              className={cn(
                "rounded-r-full px-2",
                voteState === "down" && "animate-vote-bounce"
              )}
            >
              <ArrowBigDown className={cn("h-5 w-5", voteState === "down" && "fill-current")} />
            </Button>
          </div>

          {/* Comments */}
          <Button variant="ghost" size="xs" className="gap-1 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>{formatNumber(comments)}</span>
          </Button>

          {/* Share */}
          <Button variant="ghost" size="xs" className="gap-1 text-muted-foreground hidden sm:flex">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>

          {/* Save */}
          <Button variant="ghost" size="xs" className="gap-1 text-muted-foreground hidden sm:flex">
            <Bookmark className="h-4 w-4" />
            <span>Save</span>
          </Button>

          {/* More */}
          <Button variant="ghost" size="icon" className="ml-auto h-7 w-7 text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
