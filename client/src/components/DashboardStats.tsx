import { Image, Video, MessageSquare, TrendingUp, Loader2 } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  tint: string;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
}

function StatsCard({ title, value, icon, color, tint, change }: StatsCardProps & { isLoading?: boolean }) {
  return (
    <div className={`bg-gradient-to-br ${tint} rounded-2xl shadow-sm border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:ring-1 hover:ring-slate-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-700 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value.toLocaleString('fa-IR')}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              change.type === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className={`w-4 h-4 ml-1 ${
                change.type === 'decrease' ? 'rotate-180' : ''
              }`} />
              {change.value}% نسبت به ماه قبل
            </div>
          )}
        </div>
        <div className={`p-4 rounded-2xl ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

interface DashboardStatsProps {
  totalImages: number;
  totalVideos: number;
  totalTestimonials: number;
  recentActivity?: {
    images: number;
    videos: number;
    testimonials: number;
  };
  isLoading?: boolean;
}

export default function DashboardStats({
  totalImages,
  totalVideos,
  totalTestimonials,
  recentActivity,
  isLoading = false
}: DashboardStatsProps) {
  const stats = [
    {
      title: 'تصاویر',
      value: totalImages,
      icon: <Image className="w-8 h-8 text-blue-600" />,
      color: 'bg-blue-100',
      tint: 'from-blue-50 to-blue-100/50',
      change: recentActivity ? {
        value: recentActivity.images,
        type: 'increase' as const
      } : undefined
    },
    {
      title: 'ویدیوها',
      value: totalVideos,
      icon: <Video className="w-8 h-8 text-purple-600" />,
      color: 'bg-purple-100',
      tint: 'from-purple-50 to-purple-100/50',
      change: recentActivity ? {
        value: recentActivity.videos,
        type: 'increase' as const
      } : undefined
    },
    {
      title: 'دل‌نوشته‌ها',
      value: totalTestimonials,
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      color: 'bg-green-100',
      tint: 'from-emerald-50 to-emerald-100/50',
      change: recentActivity ? {
        value: recentActivity.testimonials,
        type: 'increase' as const
      } : undefined
    },
    {
      title: 'کل محتوا',
      value: totalImages + totalVideos + totalTestimonials,
      icon: <TrendingUp className="w-8 h-8 text-[#00a693]" />,
      color: 'bg-[#00a693]/10',
      tint: 'from-emerald-50 to-[#00a693]/10'
    }
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-neutral-50 rounded-2xl shadow-sm border border-neutral-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="h-4 bg-neutral-200 rounded animate-pulse mb-2"></div>
                <div className="h-8 bg-neutral-200 rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-neutral-200 rounded animate-pulse w-2/3"></div>
              </div>
              <div className="w-16 h-16 bg-neutral-200 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
          tint={stat.tint}
          change={stat.change}
        />
      ))}
    </div>
  );
}