import { FeatureItem, ReviewItem, StatItem } from './landing.model';

export const sectionStats: StatItem[] = [
  {
    title: '50K+',
    subtitle: 'Active Users',
  },
  {
    title: '1M',
    subtitle: 'Task Completed',
  },
  {
    title: '98%',
    subtitle: 'Satisfaction Rate',
  },
  {
    title: '4.9/5',
    subtitle: 'App Rating',
  },
];

export const sectionFeature: FeatureItem[] = [
  {
    title: 'Time Management',
    description:
      'Track and optimize every minute with smart scheduling and pomodoro timers',
    borderColor: 'border-teal-500',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`,
  },
  {
    title: 'Task Management',
    description:
      'Organize, prioritize, and complete tasks efficiently with intelligent workflows',
    borderColor: 'border-orange-400',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-400',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`,
  },
  {
    title: 'Money Management',
    description:
      'Budget smarter, track expenses, and achieve your financial goals',
    borderColor: 'border-sky-500',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-500',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`,
  },
  {
    title: 'Personal Growth',
    description:
      'Build habits, track goals, and become the best version of yourself',
    borderColor: 'border-rose-400',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-400',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>`,
  },
];

export const sectionUserReview: ReviewItem[] = [
  {
    rating: '⭐⭐⭐⭐',
    name: 'Muhamaad Naufal Abbiyu',
    review:
      'I have been using this app for a while now and it has been a game changer for me. I have been able to track my time and tasks with ease and it has helped me to be more productive.',
  },
  {
    rating: '⭐⭐⭐⭐',
    name: 'Rahmad Tobi',
    review: "It's great app bro",
  },
  {
    rating: '⭐⭐⭐⭐⭐',
    name: 'Mustaqim Anwar',
    review: 'Bener2 keren parah ini app njirr',
  },
  {
    rating: '⭐⭐⭐⭐⭐',
    name: 'Irfaan',
    review: 'gacor sih, semua org harus pake',
  },
];
