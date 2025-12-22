import { Users, Calendar, MapPin } from "lucide-react";

interface TeamCardProps {
  title: string;
  location: string;
  date: string;
  participants: number;
  maxParticipants: number;
  avatar: string;
  hostName: string;
  image: string;
}

export default function TeamCard({
  title,
  location,
  date,
  participants,
  maxParticipants,
  avatar,
  hostName,
  image,
}: TeamCardProps) {
  const spotsLeft = maxParticipants - participants;

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover">
      <div className="relative h-32">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-semibold text-card mb-1">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <img src={avatar} alt={hostName} className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{hostName}</span> 发起
          </span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{participants}/{maxParticipants} 人</span>
            </div>
            <span className={`text-sm font-medium ${spotsLeft <= 2 ? "text-accent" : "text-primary"}`}>
              剩余 {spotsLeft} 位
            </span>
          </div>
        </div>
        <button className="w-full mt-4 bg-nature text-primary-foreground py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
          立即加入
        </button>
      </div>
    </div>
  );
}
