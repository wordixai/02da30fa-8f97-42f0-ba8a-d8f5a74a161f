import { MapPin, Clock, TrendingUp } from "lucide-react";

interface TrailCardProps {
  image: string;
  name: string;
  location: string;
  distance: string;
  duration: string;
  difficulty: "easy" | "medium" | "hard";
  elevation: string;
}

const difficultyMap = {
  easy: { label: "简单", class: "badge-easy" },
  medium: { label: "中等", class: "badge-medium" },
  hard: { label: "困难", class: "badge-hard" },
};

export default function TrailCard({
  image,
  name,
  location,
  distance,
  duration,
  difficulty,
  elevation,
}: TrailCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover">
      <div className="relative h-36">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <span className={`badge-difficulty ${difficultyMap[difficulty].class} absolute top-3 right-3`}>
          {difficultyMap[difficulty].label}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1">{name}</h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="font-medium text-foreground">{distance}</span> km
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            {elevation}m
          </span>
        </div>
      </div>
    </div>
  );
}
