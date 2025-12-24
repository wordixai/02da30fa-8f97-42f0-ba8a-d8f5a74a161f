import { Search, ChevronRight, Mountain, Map, Users, Compass } from "lucide-react";
import BottomNav from "../components/BottomNav";
import TrailCard from "../components/TrailCard";
import { Link } from "react-router-dom";

const featuredTrails = [
{
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
  name: "黄山西海大峡谷",
  location: "安徽黄山",
  distance: "12.5",
  duration: "5-6小时",
  difficulty: "medium" as const,
  elevation: "890"
},
{
  image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
  name: "张家界金鞭溪",
  location: "湖南张家界",
  distance: "8.2",
  duration: "3-4小时",
  difficulty: "easy" as const,
  elevation: "320"
}];


const quickActions = [
{ icon: Map, label: "探索路线", path: "/map", color: "bg-primary" },
{ icon: Users, label: "加入组队", path: "/teams", color: "bg-secondary" },
{ icon: Compass, label: "创建计划", path: "/plans", color: "bg-accent" }];


export default function Index() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-hero pt-12 pb-8 px-5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className='text-muted-foreground text-sm'>欢迎回来welco</p>
            <h1 className='text-foreground text-2xl font-bold'>发现精彩徒步-旅途</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-nature flex items-center justify-center">
            <Mountain className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索徒步路线、地点..."
            className="w-full bg-card rounded-xl py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/30" />

        </div>
      </div>

      <div className="px-5 -mt-2">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {quickActions.map((action) =>
          <Link
            key={action.path}
            to={action.path}
            className="bg-card rounded-xl p-4 shadow-card card-hover flex flex-col items-center gap-2">

              <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
                <action.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{action.label}</span>
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className="bg-card rounded-xl p-5 shadow-card mb-8">
          <h3 className="font-semibold text-foreground mb-4">本月统计</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">28.5</p>
              <p className="text-xs text-muted-foreground">公里</p>
            </div>
            <div className="text-center border-x border-border">
              <p className="text-2xl font-bold text-gradient">4</p>
              <p className="text-xs text-muted-foreground">次徒步</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient">1,280</p>
              <p className="text-xs text-muted-foreground">米爬升</p>
            </div>
          </div>
        </div>

        {/* Featured Trails */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">热门路线</h2>
            <Link to="/map" className="text-primary text-sm font-medium flex items-center gap-1">
              查看全部 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {featuredTrails.map((trail) =>
            <TrailCard key={trail.name} {...trail} />
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>);

}