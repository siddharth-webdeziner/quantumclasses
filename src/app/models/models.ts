export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  original: number;
  rating: number;
  students: string;
  duration: string;
  lectures: number;
  badge: string;
  badgeColor: string;
  thumb: string;
  thumbBg: string;
  category: string;
  free: boolean;
}

export interface Teacher {
  name: string;
  subject: string;
  avatar: string;
  avatarBg: string;
  rating: number;
  students: string;
  qualification: string;
}

export interface Testimonial {
  text: string;
  author: string;
  info: string;
  avatar: string;
  avatarBg: string;
}

export interface Exam {
  icon: string;
  name: string;
  count: string;
}

export interface Feature {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

export interface LiveClass {
  icon: string;
  iconBg: string;
  title: string;
  sub: string;
  tag: string;
  tagBg: string;
  tagColor: string;
}

export interface EnrolledCourse {
  icon: string;
  iconBg: string;
  title: string;
  progress: string;
  chapter: string;
  percent: number;
}

export interface Toast {
  message: string;
  visible: boolean;
}
