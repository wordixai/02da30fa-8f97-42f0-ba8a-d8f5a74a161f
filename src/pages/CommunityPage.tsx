import { PenSquare, Image, TrendingUp } from "lucide-react";
import BottomNav from "../components/BottomNav";
import PostCard from "../components/PostCard";

const posts = [
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    userName: "山野客",
    timeAgo: "2小时前",
    content: "终于完成了武功山的云海日出挑战！凌晨3点出发，虽然很累但是看到这样的景色一切都值得了。推荐大家冬天来，人少景美！",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
    ],
    likes: 128,
    comments: 32,
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    userName: "小雨",
    timeAgo: "5小时前",
    content: "莫干山的竹海太治愈了，适合周末轻徒步。空气清新，路况也很好，带老人小孩都没问题~",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    ],
    likes: 86,
    comments: 15,
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    userName: "高山流水",
    timeAgo: "昨天",
    content: "分享一下我的装备清单，希望对新手有帮助：登山杖（必备）、防水冲锋衣、速干T恤、登山鞋、头灯、急救包...",
    images: [],
    likes: 256,
    comments: 67,
  },
  {
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=200",
    userName: "云端漫步",
    timeAgo: "2天前",
    content: "四姑娘山长坪沟穿越完成！三天两夜的行程，遇到了超棒的队友。海拔4000+的高原徒步真的很挑战，但风景绝对一流！",
    images: [
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    ],
    likes: 342,
    comments: 89,
  },
];

const topics = [
  { label: "装备分享", icon: "🎒" },
  { label: "路线攻略", icon: "🗺️" },
  { label: "约伴同行", icon: "👥" },
  { label: "风景打卡", icon: "📸" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-hero pt-12 pb-6 px-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">社区分享</h1>
          <button className="bg-nature text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity">
            <PenSquare className="w-4 h-4" />
            发布
          </button>
        </div>

        {/* Topics */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {topics.map((topic) => (
            <button
              key={topic.label}
              className="flex items-center gap-1.5 px-4 py-2 bg-card rounded-lg shadow-card whitespace-nowrap hover:shadow-nature transition-shadow"
            >
              <span>{topic.icon}</span>
              <span className="text-sm font-medium text-foreground">{topic.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pt-4">
        {/* Trending */}
        <div className="bg-card rounded-xl p-4 shadow-card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">热门话题</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["#冬季徒步", "#日出云海", "#新手入门", "#装备测评", "#徒步穿越"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Create Post Prompt */}
        <div className="bg-card rounded-xl p-4 shadow-card mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Image className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="分享你的徒步故事..."
            className="flex-1 text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none"
          />
          <button className="text-primary font-medium text-sm">发布</button>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
