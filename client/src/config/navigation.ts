export type NavigationItem = {
  name: string;
  link: string;
  key: string;
};

export const navigationItems: NavigationItem[] = [
  { name: 'خانه', link: '/', key: 'home' },
  { name: 'تخته سیاه', link: '/blackboard', key: 'blackboard' },
  { name: 'گوی و میدان', link: '/arena', key: 'arena' },
  { name: 'بوم رنگ خیال', link: '/canvas', key: 'canvas' },
  { name: 'دانای راه بلد', link: '/guide', key: 'guide' },
  { name: 'کافه نادری', link: '/cafe', key: 'cafe' },
  { name: 'در آیینه دیگران', link: '/mirror', key: 'mirror' },
  { name: 'سکانس آخر', link: '/final', key: 'final' },
  { name: 'گالری', link: '/gallery', key: 'gallery' },
  { name: 'داشبورد مدیریت', link: '/admin', key: 'admin' },
];


