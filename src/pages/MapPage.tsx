import { Search, Filter, MapPin } from "lucide-react";
import BottomNav from "../components/BottomNav";
import TrailCard from "../components/TrailCard";
import { useState } from "react";

const trails = [
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    name: "黄山西海大峡谷",
    location: "安徽黄山",
    distance: "12.5",
    duration: "5-6小时",
    difficulty: "medium" as const,
    elevation: "890",
  },
  {
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
    name: "张家界金鞭溪",
    location: "湖南张家界",
    distance: "8.2",
    duration: "3-4小时",
    difficulty: "easy" as const,
    elevation: "320",
  },
  {
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
    name: "四姑娘山长坪沟",
    location: "四川阿坝",
    distance: "18.6",
    duration: "8-10小时",
    difficulty: "hard" as const,
    elevation: "1420",
  },
  {
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
    name: "武功山穿越",
    location: "江西萍乡",
    distance: "22.0",
    duration: "2天",
    difficulty: "hard" as const,
    elevation: "1580",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    name: "莫干山环线",
    location: "浙江湖州",
    distance: "9.5",
    duration: "4-5小时",
    difficulty: "easy" as const,
    elevation: "450",
  },
];

const filters = ["全部", "简单", "中等", "困难"];

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("全部");

  const filteredTrails = trails.filter((trail) => {
    if (activeFilter === "全部") return true;
    const difficultyMap: Record<string, string> = {
      简单: "easy",
      中等: "medium",
      困难: "hard",
    };
    return trail.difficulty === difficultyMap[activeFilter];
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Map Preview */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200"
          alt="Map"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute top-12 left-5 right-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索地点或路线名称..."
              className="w-full glass rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
        <button className="absolute bottom-4 right-5 bg-card p-3 rounded-xl shadow-card hover:shadow-nature transition-shadow">
          <MapPin className="w-5 h-5 text-primary" />
        </button>
      </div>

      <div className="px-5 pt-4">
        {/* Filters */}
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-card text-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm">筛选</span>
          </button>
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-nature text-primary-foreground"
                    : "bg-card text-foreground shadow-card"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Trail List */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            附近路线 <span className="text-muted-foreground font-normal text-sm">({filteredTrails.length})</span>
          </h2>
          <div className="space-y-4">
            {filteredTrails.map((trail) => (
              <TrailCard key={trail.name} {...trail} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
