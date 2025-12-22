import { Map, Users, CalendarDays, MessageCircle, Home } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { icon: Home, label: "首页", path: "/" },
  { icon: Map, label: "地图", path: "/map" },
  { icon: Users, label: "组队", path: "/teams" },
  { icon: CalendarDays, label: "计划", path: "/plans" },
  { icon: MessageCircle, label: "社区", path: "/community" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 pb-safe z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? "nav-item-active" : ""}`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "animate-float" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
