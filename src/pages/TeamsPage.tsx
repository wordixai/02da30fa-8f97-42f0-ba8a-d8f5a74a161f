import { Plus, Search } from "lucide-react";
import BottomNav from "../components/BottomNav";
import TeamCard from "../components/TeamCard";
import { useState } from "react";

const teams = [
  {
    title: "周末武功山云海日出",
    location: "江西萍乡 · 武功山",
    date: "12月28日 周六",
    participants: 8,
    maxParticipants: 12,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    hostName: "山野客",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
  },
  {
    title: "莫干山轻徒步一日游",
    location: "浙江湖州 · 莫干山",
    date: "12月29日 周日",
    participants: 5,
    maxParticipants: 8,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    hostName: "小雨",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    title: "四姑娘山长坪沟穿越",
    location: "四川阿坝 · 四姑娘山",
    date: "1月3日-5日",
    participants: 4,
    maxParticipants: 6,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    hostName: "高山流水",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
  },
  {
    title: "黄山日出观云海",
    location: "安徽黄山",
    date: "1月11日-12日",
    participants: 10,
    maxParticipants: 15,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=200",
    hostName: "云端漫步",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
  },
];

const tabs = ["全部活动", "我发起的", "我参与的"];

export default function TeamsPage() {
  const [activeTab, setActiveTab] = useState("全部活动");

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-hero pt-12 pb-6 px-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">徒步组队</h1>
          <button className="bg-nature text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" />
            发起活动
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索活动..."
            className="w-full bg-card rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="px-5 pt-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-nature text-primary-foreground"
                  : "bg-card text-foreground shadow-card"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team List */}
        <div className="space-y-4">
          {teams.map((team, idx) => (
            <TeamCard key={idx} {...team} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
