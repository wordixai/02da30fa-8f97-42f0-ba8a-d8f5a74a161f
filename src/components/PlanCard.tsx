import { MapPin, Calendar, Clock, MoreVertical } from "lucide-react";

interface PlanCardProps {
  trailName: string;
  location: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "draft";
  image: string;
}

const statusMap = {
  upcoming: { label: "即将开始", class: "bg-primary/10 text-primary" },
  completed: { label: "已完成", class: "bg-muted text-muted-foreground" },
  draft: { label: "草稿", class: "bg-accent/10 text-accent" },
};

export default function PlanCard({
  trailName,
  location,
  date,
  time,
  status,
  image,
}: PlanCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover">
      <div className="flex">
        <img src={image} alt={trailName} className="w-24 h-full object-cover" />
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${statusMap[status].class}`}>
                {statusMap[status].label}
              </span>
              <h3 className="font-semibold text-foreground mt-2">{trailName}</h3>
            </div>
            <button className="text-muted-foreground hover:text-foreground p-1">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
