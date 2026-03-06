import { Injectable } from '@angular/core';
import { Course, Teacher, Testimonial, Exam, Feature, LiveClass, EnrolledCourse } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DataService {

  getCourses(): Course[] {
    return [
      { id:1, title:'JEE Mains 2025 – Physics Complete Course', instructor:'Alakh Pandey', price:4999, original:9999, rating:4.9, students:'8.2L', duration:'480 hrs', lectures:320, badge:'Bestseller', badgeColor:'#FFB800', thumb:'⚡', thumbBg:'linear-gradient(135deg,#FF4F1F,#D93D0F)', category:'jee', free:false },
      { id:2, title:'NEET Biology – Human Physiology & Genetics', instructor:'Dr. Sachin Sir', price:3999, original:7999, rating:4.9, students:'4.1L', duration:'360 hrs', lectures:240, badge:'Top Rated', badgeColor:'#00C2A8', thumb:'🧬', thumbBg:'linear-gradient(135deg,#00C2A8,#00897B)', category:'neet', free:false },
      { id:3, title:'UPSC CSE Prelims – Complete GS Paper 1&2', instructor:'Vivek Singh', price:5999, original:12999, rating:4.8, students:'2.8L', duration:'600 hrs', lectures:400, badge:'New', badgeColor:'#8B5CF6', thumb:'🏛️', thumbBg:'linear-gradient(135deg,#8B5CF6,#7C3AED)', category:'upsc', free:false },
      { id:4, title:'JEE Maths – Calculus & Algebra Masterclass', instructor:'Sachin Gupta', price:3499, original:6999, rating:4.9, students:'6.5L', duration:'420 hrs', lectures:280, badge:'Bestseller', badgeColor:'#FFB800', thumb:'🔢', thumbBg:'linear-gradient(135deg,#FFB800,#F59E0B)', category:'jee', free:false },
      { id:5, title:'NEET Chemistry – Complete Organic & Inorganic', instructor:'Paaras Thakur', price:3999, original:7999, rating:4.8, students:'3.3L', duration:'380 hrs', lectures:260, badge:'Hot', badgeColor:'#FF4F1F', thumb:'⚗️', thumbBg:'linear-gradient(135deg,#3B82F6,#2563EB)', category:'neet', free:false },
      { id:6, title:'SSC CGL 2025 – Quantitative Aptitude Complete', instructor:'Prashant Bhaiya', price:2999, original:5999, rating:4.7, students:'5.2L', duration:'280 hrs', lectures:180, badge:'Popular', badgeColor:'#EC4899', thumb:'📊', thumbBg:'linear-gradient(135deg,#EC4899,#DB2777)', category:'ssc', free:false },
      { id:7, title:'Class 12 Physics – CBSE + JEE Foundation', instructor:'Alakh Pandey', price:0, original:4999, rating:4.9, students:'9.1L', duration:'320 hrs', lectures:210, badge:'Free Trial', badgeColor:'#00C2A8', thumb:'📐', thumbBg:'linear-gradient(135deg,#FF4F1F,#FFB800)', category:'class12', free:true },
      { id:8, title:'Bank PO 2025 – Complete Preparation Course', instructor:'Amit Mishra', price:2499, original:4999, rating:4.6, students:'3.8L', duration:'240 hrs', lectures:160, badge:'New', badgeColor:'#8B5CF6', thumb:'🏦', thumbBg:'linear-gradient(135deg,#8B5CF6,#06B6D4)', category:'bank', free:false },
      { id:9, title:'Class 10 Maths – CBSE Board Exam Prep', instructor:'Sachin Gupta', price:1999, original:3999, rating:4.8, students:'7.4L', duration:'200 hrs', lectures:140, badge:'Bestseller', badgeColor:'#FFB800', thumb:'📚', thumbBg:'linear-gradient(135deg,#FFB800,#10B981)', category:'class10', free:false },
      { id:10, title:'JEE Advanced Chemistry – Complete', instructor:'Paaras Thakur', price:4499, original:8999, rating:4.8, students:'3.1L', duration:'400 hrs', lectures:290, badge:'Top Rated', badgeColor:'#00C2A8', thumb:'🧪', thumbBg:'linear-gradient(135deg,#06B6D4,#0891B2)', category:'jee', free:false },
      { id:11, title:'NEET Physics – Mechanics to Modern Physics', instructor:'Alakh Pandey', price:4999, original:9999, rating:4.9, students:'5.5L', duration:'450 hrs', lectures:310, badge:'Bestseller', badgeColor:'#FFB800', thumb:'🔬', thumbBg:'linear-gradient(135deg,#10B981,#059669)', category:'neet', free:false },
      { id:12, title:'UPSC Mains – Essay & GS Answer Writing', instructor:'Vivek Singh', price:3999, original:6999, rating:4.7, students:'1.2L', duration:'200 hrs', lectures:120, badge:'New', badgeColor:'#8B5CF6', thumb:'✍️', thumbBg:'linear-gradient(135deg,#F59E0B,#D97706)', category:'upsc', free:false },
    ];
  }

  getTeachers(): Teacher[] {
    return [
      { name:'Alakh Pandey', subject:'Physics', avatar:'👨‍🏫', avatarBg:'rgba(255,79,31,0.15)', rating:5, students:'8M+', qualification:'IIT Grad' },
      { name:'Dr. Sachin Sir', subject:'Biology (NEET)', avatar:'👩‍⚕️', avatarBg:'rgba(0,194,168,0.15)', rating:5, students:'3M+', qualification:'MBBS Dr.' },
      { name:'Vivek Singh', subject:'History & Polity', avatar:'👨‍💼', avatarBg:'rgba(139,92,246,0.15)', rating:5, students:'2M+', qualification:'IAS Cleared' },
      { name:'Sachin Gupta', subject:'Mathematics', avatar:'🧮', avatarBg:'rgba(255,184,0,0.15)', rating:5, students:'5M+', qualification:'IIT Grad' },
      { name:'Paaras Thakur', subject:'Chemistry', avatar:'⚗️', avatarBg:'rgba(59,130,246,0.15)', rating:5, students:'4M+', qualification:'MSc Chem' },
      { name:'Prashant Bhaiya', subject:'Quantitative Aptitude', avatar:'📊', avatarBg:'rgba(236,72,153,0.15)', rating:5, students:'1.5M+', qualification:'CAT 99.9%' },
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      { text:'EduVerse completely transformed how I studied. The live classes with Alakh Sir made Physics feel approachable. I secured AIR 247 in JEE Advanced!', author:'Rahul Kumar', info:'JEE Advanced AIR 247 · IIT Bombay', avatar:'😊', avatarBg:'rgba(255,79,31,0.15)' },
      { text:'The Biology recordings and test series helped me score 695/720 in NEET. Dr. Sachin Sir\'s teaching style is unmatched. Thank you EduVerse!', author:'Priya Sharma', info:'NEET 695/720 · AIIMS Delhi', avatar:'👩‍🎓', avatarBg:'rgba(0,194,168,0.15)' },
      { text:'Coming from a small town, I could never afford coaching. EduVerse gave me world-class preparation at minimal cost. I cleared UPSC in my first attempt!', author:'Ankur Mishra', info:'UPSC CSE 2024 · IAS Officer', avatar:'🧑‍💼', avatarBg:'rgba(139,92,246,0.15)' },
    ];
  }

  getExams(): Exam[] {
    return [
      { icon:'⚡', name:'JEE Main & Advanced', count:'240+ Courses' },
      { icon:'🧬', name:'NEET UG', count:'180+ Courses' },
      { icon:'🏛️', name:'UPSC CSE', count:'95+ Courses' },
      { icon:'📋', name:'SSC CGL/CHSL', count:'120+ Courses' },
      { icon:'🏦', name:'Bank PO/Clerk', count:'85+ Courses' },
      { icon:'🎓', name:'CAT/MBA', count:'60+ Courses' },
      { icon:'⚙️', name:'GATE', count:'75+ Courses' },
      { icon:'🛡️', name:'NDA/CDS', count:'45+ Courses' },
      { icon:'📐', name:'Class 11 & 12', count:'300+ Courses' },
      { icon:'📚', name:'Class 9 & 10', count:'200+ Courses' },
    ];
  }

  getFeatures(): Feature[] {
    return [
      { icon:'fa-video', iconBg:'bg-orange', iconColor:'text-orange', title:'Live Interactive Classes', desc:'Learn directly from India\'s top educators in live sessions with real-time doubt solving and interactive polls.' },
      { icon:'fa-question-circle', iconBg:'bg-teal', iconColor:'text-teal', title:'Instant Doubt Resolution', desc:'Ask doubts anytime via our AI-powered doubt engine or get answers from educators within minutes.' },
      { icon:'fa-file-alt', iconBg:'bg-yellow', iconColor:'text-yellow', title:'10,000+ Practice Tests', desc:'Chapter-wise tests, mock exams, and previous year papers with detailed performance analytics.' },
      { icon:'fa-book-open', iconBg:'bg-purple', iconColor:'text-purple', title:'Comprehensive Study Material', desc:'Expert-curated notes, formula sheets, and revision guides for every topic and chapter.' },
      { icon:'fa-mobile-alt', iconBg:'bg-blue', iconColor:'text-blue', title:'Learn Offline, Anywhere', desc:'Download videos and study anywhere without internet. Available on Android and iOS.' },
      { icon:'fa-chart-line', iconBg:'bg-pink', iconColor:'text-pink', title:'AI-Powered Analytics', desc:'Get personalized insights on your preparation, weak areas, and improvement suggestions.' },
    ];
  }

  getLiveClasses(): LiveClass[] {
    return [
      { icon:'⚡', iconBg:'bg-orange', title:'Physics – Mechanics', sub:'By Alakh Pandey • 4,231 watching', tag:'JEE', tagBg:'bg-orange', tagColor:'text-orange' },
      { icon:'🧬', iconBg:'bg-teal', title:'Biology – Human Physiology', sub:'By Dr. Sachin Sir • 2,892 watching', tag:'NEET', tagBg:'bg-teal', tagColor:'text-teal' },
      { icon:'🏛️', iconBg:'bg-purple', title:'Polity – Constitutional Law', sub:'By Vivek Singh • 1,540 watching', tag:'UPSC', tagBg:'bg-purple', tagColor:'text-purple' },
      { icon:'🔢', iconBg:'bg-yellow', title:'Maths – Algebra Foundation', sub:'By Sachin Gupta • 3,100 watching', tag:'Class 10', tagBg:'bg-yellow', tagColor:'text-yellow' },
    ];
  }

  getEnrolledCourses(): EnrolledCourse[] {
    return [
      { icon:'⚡', iconBg:'bg-orange', title:'JEE Mains 2025 – Physics Complete', progress:'Lecture 42/120', chapter:'Electrostatics', percent:35 },
      { icon:'🧬', iconBg:'bg-teal', title:'NEET Biology – Complete Course', progress:'Lecture 67/200', chapter:'Genetics', percent:33 },
      { icon:'🔢', iconBg:'bg-yellow', title:'Mathematics – IIT JEE Foundation', progress:'Lecture 90/160', chapter:'Integration', percent:56 },
      { icon:'🏛️', iconBg:'bg-purple', title:'UPSC Prelims – Complete GS', progress:'Lecture 110/300', chapter:'Indian History', percent:37 },
    ];
  }
}
