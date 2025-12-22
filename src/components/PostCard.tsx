import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

interface PostCardProps {
  avatar: string;
  userName: string;
  timeAgo: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
}

export default function PostCard({
  avatar,
  userName,
  timeAgo,
  content,
  images,
  likes,
  comments,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-card rounded-xl p-4 shadow-card">
      <div className="flex items-center gap-3 mb-3">
        <img src={avatar} alt={userName} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-foreground">{userName}</h4>
          <span className="text-xs text-muted-foreground">{timeAgo}</span>
        </div>
      </div>
      <p className="text-foreground text-sm mb-3 leading-relaxed">{content}</p>
      {images.length > 0 && (
        <div className={`grid gap-2 mb-4 ${images.length === 1 ? "grid-cols-1" : images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className={`rounded-lg object-cover w-full ${images.length === 1 ? "h-48" : "h-28"}`}
            />
          ))}
        </div>
      )}
      <div className="flex items-center gap-6 pt-3 border-t border-border">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-sm transition-colors ${
            liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
          <span>{likeCount}</span>
        </button>
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto">
          <Share2 className="w-4 h-4" />
          <span>分享</span>
        </button>
      </div>
    </div>
  );
}
