import { Injectable } from '@angular/core';
import { Course, Teacher, Testimonial, Exam, Feature, LiveClass, EnrolledCourse } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DataService {

  getCourses(): Course[] {
    return [
      { id:1, title:'Physics Class 12 – Complete CBSE Syllabus', instructor:'Alakh Pandey', price:1999, original:3999, rating:4.9, students:'12.5L', duration:'240 hrs', lectures:180, badge:'Bestseller', badgeColor:'#FFB800', thumb:'⚡', thumbBg:'linear-gradient(135deg,#FF4F1F,#D93D0F)', category:'class12', free:false },
      { id:2, title:'Chemistry Class 12 – Organic & Inorganic', instructor:'Paaras Thakur', price:1799, original:3599, rating:4.9, students:'9.8L', duration:'220 hrs', lectures:160, badge:'Top Rated', badgeColor:'#00C2A8', thumb:'⚗️', thumbBg:'linear-gradient(135deg,#00C2A8,#00897B)', category:'class12', free:false },
      { id:3, title:'Biology Class 12 – Complete Human Physiology', instructor:'Dr. Sachin Sir', price:1599, original:3199, rating:4.9, students:'11.2L', duration:'200 hrs', lectures:150, badge:'Bestseller', badgeColor:'#FFB800', thumb:'🧬', thumbBg:'linear-gradient(135deg,#8B5CF6,#7C3AED)', category:'class12', free:false },
      { id:4, title:'Mathematics Class 12 – Calculus & Algebra', instructor:'Sachin Gupta', price:1999, original:3999, rating:4.9, students:'14.5L', duration:'260 hrs', lectures:190, badge:'Bestseller', badgeColor:'#FFB800', thumb:'🔢', thumbBg:'linear-gradient(135deg,#FFB800,#F59E0B)', category:'class12', free:false },
      { id:5, title:'English Class 12 – Literature & Language', instructor:'Shreya Sharma', price:999, original:1999, rating:4.8, students:'7.3L', duration:'120 hrs', lectures:90, badge:'Popular', badgeColor:'#00C2A8', thumb:'📖', thumbBg:'linear-gradient(135deg,#3B82F6,#2563EB)', category:'class12', free:false },
      { id:6, title:'History Class 12 – Medieval to Modern India', instructor:'Vivek Singh', price:899, original:1799, rating:4.7, students:'5.2L', duration:'100 hrs', lectures:75, badge:'New', badgeColor:'#8B5CF6', thumb:'📜', thumbBg:'linear-gradient(135deg,#EC4899,#DB2777)', category:'class12', free:false },
      { id:7, title:'Economics Class 12 – Micro & Macro', instructor:'Raj Kumar', price:1099, original:2199, rating:4.8, students:'6.1L', duration:'140 hrs', lectures:100, badge:'Popular', badgeColor:'#EC4899', thumb:'💰', thumbBg:'linear-gradient(135deg,#FF4F1F,#FFB800)', category:'class12', free:false },
      { id:8, title:'Geography Class 12 – Physical & Human', instructor:'Priya Sharma', price:899, original:1799, rating:4.7, students:'4.8L', duration:'110 hrs', lectures:85, badge:'New', badgeColor:'#8B5CF6', thumb:'🌍', thumbBg:'linear-gradient(135deg,#8B5CF6,#06B6D4)', category:'class12', free:false },
      { id:9, title:'Mathematics Class 11 – Foundation Course', instructor:'Sachin Gupta', price:1499, original:2999, rating:4.9, students:'8.4L', duration:'200 hrs', lectures:150, badge:'Bestseller', badgeColor:'#FFB800', thumb:'📐', thumbBg:'linear-gradient(135deg,#FFB800,#10B981)', category:'class11', free:false },
      { id:10, title:'Physics Class 11 – Mechanics & Waves', instructor:'Alakh Pandey', price:1799, original:3599, rating:4.8, students:'9.2L', duration:'210 hrs', lectures:155, badge:'Top Rated', badgeColor:'#00C2A8', thumb:'🔬', thumbBg:'linear-gradient(135deg,#06B6D4,#0891B2)', category:'class11', free:false },
      { id:11, title:'Chemistry Class 11 – General Principles', instructor:'Paaras Thakur', price:1599, original:3199, rating:4.9, students:'8.7L', duration:'190 hrs', lectures:140, badge:'Bestseller', badgeColor:'#FFB800', thumb:'🧪', thumbBg:'linear-gradient(135deg,#10B981,#059669)', category:'class11', free:false },
      { id:12, title:'Biology Class 11 – Cell & Genetics', instructor:'Dr. Sachin Sir', price:1499, original:2999, rating:4.8, students:'7.9L', duration:'180 hrs', lectures:135, badge:'Popular', badgeColor:'#EC4899', thumb:'🔭', thumbBg:'linear-gradient(135deg,#F59E0B,#D97706)', category:'class11', free:false },
    ];
  }

  getTeachers(): Teacher[] {
    return [
      { name:'Swati Shahi', subject:'Physics', avatar:'👨‍🏫', avatarBg:'rgba(255,79,31,0.15)', rating:5, students:'12M+', qualification:'IIT Grad' },
      { name:'Siddharth Shahi', subject:'Chemistry', avatar:'⚗️', avatarBg:'rgba(59,130,246,0.15)', rating:5, students:'9M+', qualification:'MSc Chem' },
      { name:'Dr. Sachin Sir', subject:'Biology', avatar:'👩‍⚕️', avatarBg:'rgba(0,194,168,0.15)', rating:5, students:'11M+', qualification:'MBBS Dr.' },
      { name:'Sachin Gupta', subject:'Mathematics', avatar:'🧮', avatarBg:'rgba(255,184,0,0.15)', rating:5, students:'14M+', qualification:'IIT Grad' },
      { name:'Shreya Sharma', subject:'English', avatar:'📖', avatarBg:'rgba(236,72,153,0.15)', rating:5, students:'7M+', qualification:'MA English' },
      { name:'Vivek Singh', subject:'History & Social Studies', avatar:'👨‍💼', avatarBg:'rgba(139,92,246,0.15)', rating:5, students:'5M+', qualification:'MA History' },
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      { text:'Quantum Classes helped me score 92% in my class 12 board exams. The structured content and practice tests made studying so much easier. Highly recommended!', author:'Rahul Kumar', info:'92% · CBSE Board Topper', avatar:'😊', avatarBg:'rgba(255,79,31,0.15)' },
      { text:'The live classes are amazing! Teacher explanations are crystal clear. I went from scoring 60% in mocks to 88% in final exams. Thank you Quantum Classes!', author:'Priya Sharma', info:'88% · ICSE State Topper', avatar:'👩‍🎓', avatarBg:'rgba(0,194,168,0.15)' },
      { text:'Affordable courses with world-class content. The doubt clearing feature was super helpful. Scored 85% without attending any coaching center!', author:'Ankur Mishra', info:'85% · State Board Topper', avatar:'🧑‍💼', avatarBg:'rgba(139,92,246,0.15)' },
    ];
  }

  getExams(): Exam[] {
    return [
      { icon:'📐', name:'Mathematics', count:'120+ Hours' },
      { icon:'⚡', name:'Physics', count:'100+ Hours' },
      { icon:'⚗️', name:'Chemistry', count:'90+ Hours' },
      { icon:'🧬', name:'Biology', count:'110+ Hours' },
      { icon:'📖', name:'English', count:'60+ Hours' },
      { icon:'📜', name:'History', count:'50+ Hours' },
      { icon:'🌍', name:'Geography', count:'45+ Hours' },
      { icon:'💰', name:'Economics', count:'55+ Hours' },
      { icon:'📚', name:'CBSE Boards', count:'500+ Resources' },
      { icon:'🎓', name:'ICSE Boards', count:'400+ Resources' },
    ];
  }

  getFeatures(): Feature[] {
    return [
      { icon:'fa-video', iconBg:'bg-orange', iconColor:'text-orange', title:'Live Interactive Classes', desc:'Learn directly from expert educators in engaging live sessions with real-time doubt solving and interactive explanations.' },
      { icon:'fa-question-circle', iconBg:'bg-teal', iconColor:'text-teal', title:'Instant Doubt Resolution', desc:'Ask doubts anytime and get instant answers from teachers. Clear your concepts before moving to the next chapter.' },
      { icon:'fa-file-alt', iconBg:'bg-yellow', iconColor:'text-yellow', title:'5000+ Practice Tests', desc:'Chapter-wise tests, board-level mock exams, and previous year papers with detailed solutions and analytics.' },
      { icon:'fa-book-open', iconBg:'bg-purple', iconColor:'text-purple', title:'Complete Study Material', desc:'Expert-curated notes, concept summaries, formula sheets, and revision guides for every chapter.' },
      { icon:'fa-mobile-alt', iconBg:'bg-blue', iconColor:'text-blue', title:'Learn Offline, Anywhere', desc:'Download videos and study offline without internet. Perfect for studying during travel or commute.' },
      { icon:'fa-chart-line', iconBg:'bg-pink', iconColor:'text-pink', title:'Performance Tracking', desc:'Get detailed analytics on your progress, identify weak areas, and receive personalized study recommendations.' },
    ];
  }

  getLiveClasses(): LiveClass[] {
    return [
      { icon:'⚡', iconBg:'bg-orange', title:'Physics – Mechanics & Motion', sub:'By Alakh Pandey • 5,231 watching', tag:'Class 12', tagBg:'bg-orange', tagColor:'text-orange' },
      { icon:'⚗️', iconBg:'bg-blue', title:'Chemistry – Organic Reactions', sub:'By Paaras Thakur • 3,892 watching', tag:'Class 12', tagBg:'bg-blue', tagColor:'text-blue' },
      { icon:'🧬', iconBg:'bg-teal', title:'Biology – Genetics & Evolution', sub:'By Dr. Sachin Sir • 4,540 watching', tag:'Class 12', tagBg:'bg-teal', tagColor:'text-teal' },
      { icon:'🔢', iconBg:'bg-yellow', title:'Maths – Calculus Mastery', sub:'By Sachin Gupta • 5,100 watching', tag:'Class 12', tagBg:'bg-yellow', tagColor:'text-yellow' },
    ];
  }

  getEnrolledCourses(): EnrolledCourse[] {
    return [
      { icon:'⚡', iconBg:'bg-orange', title:'Physics Class 12 – Complete Course', progress:'Chapter 8/22', chapter:'Electromagnetic Waves', percent:36 },
      { icon:'⚗️', iconBg:'bg-blue', title:'Chemistry Class 12 – Organic Compounds', progress:'Chapter 6/20', chapter:'Carboxylic Acids', percent:30 },
      { icon:'🧬', iconBg:'bg-teal', title:'Biology Class 12 – Genetics & Evolution', progress:'Chapter 15/18', chapter:'Molecular Basis of Inheritance', percent:83 },
      { icon:'🔢', iconBg:'bg-yellow', title:'Mathematics Class 12 – Calculus', progress:'Chapter 12/24', chapter:'Integration', percent:50 },
    ];
  }
}
