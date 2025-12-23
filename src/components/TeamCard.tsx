import { Users, Calendar, MapPin, Check } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

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
  participants: initialParticipants,
  maxParticipants,
  avatar,
  hostName,
  image,
}: TeamCardProps) {
  const [participants, setParticipants] = useState(initialParticipants);
  const [joined, setJoined] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const spotsLeft = maxParticipants - participants;
  const isFull = spotsLeft <= 0;

  const handleJoinClick = () => {
    if (joined || isFull) return;
    setShowDialog(true);
  };

  const handleConfirmJoin = async () => {
    setLoading(true);
    // 模拟API请求
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setShowDialog(false);
    setJoined(true);
    setParticipants((prev) => prev + 1);
    toast({
      title: "加入成功！",
      description: `您已成功加入「${title}」活动，请准时参加。`,
    });
  };

  return (
    <>
      <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover">
        <div className="relative h-32">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-semibold text-card mb-1">{title}</h3>
          </div>
          {joined && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Check className="w-3 h-3" />
              已加入
            </div>
          )}
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
                {isFull ? "已满员" : `剩余 ${spotsLeft} 位`}
              </span>
            </div>
          </div>
          <button
            onClick={handleJoinClick}
            disabled={joined || isFull}
            className={`w-full mt-4 py-2.5 rounded-lg font-medium transition-all ${
              joined
                ? "bg-muted text-muted-foreground cursor-default"
                : isFull
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-nature text-primary-foreground hover:opacity-90"
            }`}
          >
            {joined ? "已报名" : isFull ? "名额已满" : "立即加入"}
          </button>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle>确认加入活动</DialogTitle>
            <DialogDescription className="pt-2">
              您确定要加入「{title}」吗？
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted rounded-lg p-3 space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>当前 {participants}/{maxParticipants} 人</span>
            </div>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <button
              onClick={() => setShowDialog(false)}
              className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleConfirmJoin}
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-nature text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "加入中..." : "确认加入"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
