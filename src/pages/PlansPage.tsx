import { Plus, Calendar } from "lucide-react";
import BottomNav from "../components/BottomNav";
import PlanCard from "../components/PlanCard";
import { useState } from "react";

const plans = [
  {
    trailName: "武功山穿越",
    location: "江西萍乡",
    date: "12月28日",
    time: "06:00",
    status: "upcoming" as const,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
  },
  {
    trailName: "莫干山环线",
    location: "浙江湖州",
    date: "1月5日",
    time: "08:30",
    status: "upcoming" as const,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  },
  {
    trailName: "四姑娘山长坪沟",
    location: "四川阿坝",
    date: "待定",
    time: "待定",
    status: "draft" as const,
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400",
  },
  {
    trailName: "张家界金鞭溪",
    location: "湖南张家界",
    date: "12月15日",
    time: "07:00",
    status: "completed" as const,
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400",
  },
  {
    trailName: "黄山西海大峡谷",
    location: "安徽黄山",
    date: "12月8日",
    time: "05:30",
    status: "completed" as const,
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400",
  },
];

const tabs = ["全部", "即将开始", "已完成", "草稿"];

export default function PlansPage() {
  const [activeTab, setActiveTab] = useState("全部");

  const filteredPlans = plans.filter((plan) => {
    if (activeTab === "全部") return true;
    const statusMap: Record<string, string> = {
      即将开始: "upcoming",
      已完成: "completed",
      草稿: "draft",
    };
    return plan.status === statusMap[activeTab];
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-hero pt-12 pb-6 px-5">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">徒步计划</h1>
          <button className="bg-nature text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" />
            新建计划
          </button>
        </div>

        {/* Calendar Preview */}
        <div className="bg-card rounded-xl p-4 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">本月计划</p>
              <p className="font-semibold text-foreground">2 个行程待出发</p>
            </div>
          </div>
          <div className="flex gap-2">
            {["一", "二", "三", "四", "五", "六", "日"].map((day, idx) => (
              <div key={day} className="flex-1 text-center">
                <span className="text-xs text-muted-foreground">{day}</span>
                <div
                  className={`w-8 h-8 mx-auto mt-1 rounded-full flex items-center justify-center text-sm ${
                    idx === 5
                      ? "bg-nature text-primary-foreground font-medium"
                      : "text-foreground"
                  }`}
                >
                  {23 + idx}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pt-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-nature text-primary-foreground"
                  : "bg-card text-foreground shadow-card"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Plan List */}
        <div className="space-y-4">
          {filteredPlans.map((plan, idx) => (
            <PlanCard key={idx} {...plan} />
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">暂无相关计划</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
