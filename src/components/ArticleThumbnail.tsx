import { FileText, Camera, Video, Users, Music, Award, Star, TrendingUp, Globe } from "lucide-react";

const gradients: Record<string, string> = {
  EXCLUSIVE: "from-rose-600/80 via-pink-600/60 to-amber-500/40",
  "RED CARPET": "from-purple-600/80 via-violet-600/60 to-fuchsia-500/40",
  MUSIC: "from-blue-600/80 via-cyan-600/60 to-teal-500/40",
  FILM: "from-amber-600/80 via-orange-600/60 to-red-500/40",
  TV: "from-emerald-600/80 via-green-600/60 to-lime-500/40",
  STYLE: "from-pink-600/80 via-rose-600/60 to-red-500/40",
  INTERVIEW: "from-indigo-600/80 via-blue-600/60 to-cyan-500/40",
  NEWS: "from-slate-600/80 via-gray-600/60 to-zinc-500/40",
  PHOTOS: "from-violet-600/80 via-purple-600/60 to-indigo-500/40",
  VIDEO: "from-red-600/80 via-rose-600/60 to-pink-500/40",
};

const catIcons: Record<string, React.ReactNode> = {
  EXCLUSIVE: <Star className="w-5 h-5" />,
  "RED CARPET": <Award className="w-5 h-5" />,
  MUSIC: <Music className="w-5 h-5" />,
  FILM: <Video className="w-5 h-5" />,
  TV: <Globe className="w-5 h-5" />,
  STYLE: <Camera className="w-5 h-5" />,
  INTERVIEW: <Users className="w-5 h-5" />,
  NEWS: <FileText className="w-5 h-5" />,
  PHOTOS: <Camera className="w-5 h-5" />,
  VIDEO: <Video className="w-5 h-5" />,
};

interface ArticleThumbProps {
  category: string;
  title: string;
  type: string;
  size?: "sm" | "md" | "lg";
}

export function ArticleThumbnail({ category, title, type, size = "md" }: ArticleThumbProps) {
  const gradient = gradients[category] || gradients.NEWS;
  const icon = catIcons[category] || <FileText className="w-5 h-5" />;
  const height = size === "lg" ? "aspect-[16/7]" : size === "sm" ? "aspect-[16/10]" : "aspect-[16/9]";

  return (
    <div className={`${height} bg-gradient-to-br ${gradient} relative overflow-hidden rounded-t-xl`}>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                          radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }} />

      {/* Category badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
        {icon}
        {category}
      </div>

      {/* Type badge */}
      {type === "video" && (
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded">
          <Video className="w-3 h-3" /> Video
        </div>
      )}
      {type === "photo" && (
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded">
          <Camera className="w-3 h-3" /> Gallery
        </div>
      )}
      {type === "interview" && (
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded">
          <Users className="w-3 h-3" /> Interview
        </div>
      )}

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white/15">{icon}</div>
      </div>

      {/* Bottom gradient with title hint */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <p className="text-white/80 text-xs font-medium line-clamp-1">{title}</p>
      </div>
    </div>
  );
}

export function FeaturedThumbnail({ category, title }: { category: string; title: string }) {
  const gradient = gradients[category] || gradients.NEWS;
  const icon = catIcons[category] || <FileText className="w-5 h-5" />;

  return (
    <div className="aspect-[16/7] bg-gradient-to-br ${gradient} relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(45deg, white 25%, transparent 25%),
                          linear-gradient(-45deg, white 25%, transparent 25%),
                          linear-gradient(45deg, transparent 75%, white 75%),
                          linear-gradient(-45deg, transparent 75%, white 75%)`,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
      }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white/10 scale-[4]">{icon}</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-8">
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-white/90 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded mb-3">
          {category}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold leading-tight text-white">{title}</h1>
      </div>
    </div>
  );
}