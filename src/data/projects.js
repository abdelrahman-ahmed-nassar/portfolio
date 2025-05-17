// Import project images
import omnifood from "../assets/projects-images/Omnifood.png";
import forkify from "../assets/projects-images/forkify.png";
import pigGame from "../assets/projects-images/Pig-Game.png";
import bankist from "../assets/projects-images/Bankist.png";
import bankistWebsite from "../assets/projects-images/bankist-website.png";
import mapty from "../assets/projects-images/mapty.png";
import passwords from "../assets/projects-images/passwords.png";
import productivity from "../assets/projects-images/productivity-zone.png";
import lms from "../assets/projects-images/lms-project.png";
import electronicProject from "../assets/projects-images/elec-projects.png";
import lmsDashboard from "../assets/projects-images/lms-dashboard.png";

// Project data
export const projectsData = [
  {
    title: "Learning Management System",
    summary:
      "A modern learning platform where students can buy recorded courses, attend interactive exams, and track their progress in a smooth, responsive interface.",
    description: `
    
# 🎓 Educational Platform (Student Side)

A modern, fully responsive e-learning website for recorded courses.

I developed a feature-rich educational platform that enables students to learn at their own pace through recorded video courses. The platform was designed for maximum usability and performance, with a sleek interface and modern design system that supports both light and dark modes.

---

### 🔑 Key Features

- **Course Enrollment & Access:**  
  Students can sign up, purchase courses securely, and get instant access to recorded lectures.

- **Organized Content Structure:**  
  Lectures are categorized by academic year, course, and unit — making navigation intuitive.

- **Interactive Exams:**  
  The platform offers built-in online exams with automatic correction, instant feedback, and result display.

- **Parent Notifications:**  
  Parents receive automatic updates via email or notifications about their child's grades and progress.

- **Student Analytics:**  
  Students can view a personal dashboard showing progress, scores, time spent, and course completion status.

- **Downloadable Materials:**  
  Each course includes file attachments (PDFs, slides, images) available for download.

- **Search & Filter:**  
  Smart filtering, searching, and sorting are implemented across all tables and course lists.

- **Responsive Design:**  
  Built with Tailwind CSS for a mobile-first, dark-mode-enabled UI that works across all devices.

- **Performance:**  
  Optimized with React Query for efficient data fetching and caching.

---

### 🚀 Tech Stack

- **Front-End:** Next.js, TypeScript, Tailwind CSS, React Query  
- **Back-End / DB:** Supabase (PostgreSQL-based), Auth, File Storage  
- **Design Approach:** Component-based, mobile-first, with accessibility and dark mode in mind  
- **Performance Optimizations:** React Query caching, server-side pagination, indexed search

`,
    projectLink: "https://mohammed-hekal.vercel.app/",
    img: lms,
    tags: ["NextJs"],
    year: "2025",
    featured: true,
    video: "https://youtube.com/shorts/UzkrhaJ0SVM?feature=share",
  },
  {
    title: "LMS Dashboard",
    summary:
      "An advanced dashboard for teachers to manage courses, students, exams, and analytics — with drag-and-drop tools, task tracking, and detailed performance stats.",
    description: `
      
# 🛠️ Admin Dashboard (Teacher Panel)

A powerful dashboard to manage content, students, exams, and platform performance.

The platform includes a custom-built admin dashboard that gives teachers full control over all educational content and platform activities — no coding skills needed.

---

### 🧩 Core Functionalities

- **Course Management:**  
  Create and organize courses by academic year and subject.  
  Structure units and lectures using a drag-and-drop interface for easy reordering.  
  Upload lecture videos and resources (PDFs, docs, images).

- **Exam Builder:**  
  Create interactive exams using a simple form-based interface (similar to Google Forms).  
  Define question types, scores, and link exams to specific courses or units.  
  Track student responses, success rates, and per-question analytics.

- **Student Management:**  
  View all registered students, their courses, progress, grades, and login activity.  
  Export or filter students by academic year or performance criteria.

- **Grades & Exam Analytics:**  
  Detailed breakdown of student scores across all exams.  
  Charts and statistics for average scores, success rates, and grade distribution.

- **Sales & Financials:**  
  Monitor course sales, earnings, and purchase records.  
  View student payment history and filter by course or time period.

- **Task Management System:**  
  Built-in to-do system to help teachers track their own monthly or weekly tasks.  
  Tasks can be categorized, marked complete, and sorted by urgency.

- **File Management:**  
  Upload and manage educational materials, media files, and downloadable documents.

- **Dynamic Tables with Full Control:**  
  Pagination, searching, sorting, filtering, and live data updates.  
  Each data table (students, courses, lectures, files, payments, etc.) supports full CRUD operations.

---

### 📊 Key Tables Managed in the Dashboard

- Students  
- Courses  
- Lectures  
- Files  
- Exams  
- Student Grades  
- Exam Grades  
- Purchases  
- Featured Courses  
- Task Tracker  

Each table can be filtered by course, unit, or year and supports multiple view types for specific use cases (e.g., show all lectures from a specific unit or student’s grades in a given exam).

---

### 🚀 Tech Stack

- **Front-End:** Next.js, TypeScript, Tailwind CSS, React Query  
- **Back-End / DB:** Supabase (PostgreSQL-based), Auth, File Storage  
- **Design Approach:** Component-based, mobile-first, with accessibility and dark mode in mind  
- **Performance Optimizations:** React Query caching, server-side pagination, indexed search

`,
    img: lmsDashboard,
    tags: ["NextJs"],
    year: "2025",
    featured: true,
    video: "https://youtube.com/shorts/UzkrhaJ0SVM?feature=share",
  },
  {
    title:
      " Official Student Projects Platform – Al-Azhar University (Faculty of Engineering)",
    summary:
      "A portfolio showcasing innovative electronic projects by Al-Azhar University students.",
    description: `

## 🎓 Official Student Projects Platform – Al-Azhar University (Faculty of Engineering)

### 📍 *Full-Stack Project*

**Tech Stack:** Next.js · TypeScript · Tailwind CSS · Supabase · PostgreSQL

---

### 🧠 Overview

As a first-year student in the Computer & Systems Engineering department, I was expected to build a hardware project for my electronics course. Instead, I proposed a software solution that addresses a major problem: the lack of a centralized, accessible archive for student projects.

I designed and developed an official platform where students can create accounts, form teams, and upload their engineering projects — including documentation, videos, and technologies used. The platform was officially adopted by the faculty and has become a recognized part of the department's academic ecosystem.

---

### 🎯 Project Goals

* **Showcase student activities** and real-world engineering efforts within the college.  
* **Create a mini portfolio for each student**, automatically built from their submitted projects.  
* **Preserve valuable student work** and make it accessible beyond graduation.  
* **Open doors for job opportunities** by allowing external visitors to browse projects and connect with student teams.

---

### 🛠 Key Features

* 🔍 **Project Browsing & Search** – Search by team, student name, or project.  
* 👥 **Team Profiles** – Each team has a dedicated page with specialties, members, and projects.  
* 📁 **Project Pages** – Showcasing project goals, used technologies, implementation details, documents, videos, and contributors.  
* 👤 **Student Profiles** – Auto-generated mini portfolios based on contributed projects.  
* ✏️ **Student Dashboard** – Login system with CRUD operations for updating profile, creating teams, and submitting projects.  
* 📊 **Scalable & Modern UI** – Futuristic design inspired by electronics and circuits.

---

### 🏩 Official Recognition

* ✅ Approved and adopted by the department as the official student project repository.  
* 👨‍🏫 Used by faculty members to review and evaluate student projects.  
* 🏆 **Presented at AZ-SENCS**, the annual engineering exhibition of the department.  
* 🎓 Demonstrated to the **Dean of Faculty**, **Head of Department**, and **University President**, receiving high praise.  
* ☁️ Now hosted on **university servers** and used as a centralized system for project submissions.


---

### 💡 What I Learned

* How to independently deliver a production-grade project from ideation to deployment.  
* Real-world full-stack development using modern technologies.  
* Institutional communication — pitching and presenting to faculty leadership.  
* Turning a course requirement into a portfolio-worthy, high-impact achievement.

`,
    projectLink: "https://al-azhar-electronics.netlify.app/",
    codeLink:
      "https://github.com/abdelrahman-ahmed-nassar/Electronics-projects-showcase",
    img: electronicProject,
    tags: ["NextJs"],
    year: "2023",
    featured: true,
  },
  {
    title: "Forkify",
    summary:
      "A recipe finder app with over 1,000,000 recipes and ingredient adjustments.",
    description:
      "A recipe finder app with over 1,000,000 recipes and ingredient adjustments.",
    projectLink: "https://abdelrahman-forkify.netlify.app/",
    codeLink: "https://github.com/abdelrahman-ahmed-nassar/forkify/",
    img: forkify,
    tags: ["JavaScript"],
    year: "2022",
    featured: true,
  },
  {
    title: "Omnifood",
    summary:
      "A modern restaurant landing page with responsive design and animations.",
    description:
      "A modern restaurant landing page with responsive design, smooth animations, and subscription features. The website includes interactive elements, a pricing section, testimonials, and a fully functional contact form, all optimized for various screen sizes.",
    projectLink: "https://abdelrahman-ahmed-nassar.github.io/omnifood/",
    codeLink: "https://github.com/abdelrahman-ahmed-nassar/omnifood/",
    img: omnifood,
    tags: ["HTML & CSS"],
    year: "2021",
    featured: true,
  },
  {
    title: "Productivity Zone",
    summary:
      "A suite of productivity tools with task management and Pomodoro timer.",
    description:
      "A suite of productivity tools including task management, pomodoro timer, and note-taking features. The app helps users organize their workflow, manage time effectively, and increase productivity with customizable settings and progress tracking.",
    projectLink:
      "https://abdelrahman-ahmed-nassar.github.io/productivity-zone/",
    codeLink: "https://github.com/abdelrahman-ahmed-nassar/productivity-zone",
    img: productivity,
    tags: ["React"],
    year: "2022",
    featured: true,
  },
  {
    title: "Password Manager",
    summary:
      "Secure password management app with encryption and easy credential access.",
    description:
      "Secure password management app with encryption and easy access to stored credentials. Features include password generation, strength assessment, categorization, and secure cloud backup with end-to-end encryption.",
    projectLink:
      "https://abdelrahman-ahmed-nassar.github.io/passwords-manager-app/",
    codeLink:
      "https://github.com/abdelrahman-ahmed-nassar/passwords-manager-app/",
    img: passwords,
    tags: ["React"],
    year: "2022",
    featured: false,
  },
  {
    title: "Bankist App",
    summary:
      "Banking application simulation with transfers and transaction history.",
    description:
      "Banking application simulation with transfers and transaction history.",
    projectLink: "https://abdelrahman-ahmed-nassar.github.io/bankist/",
    codeLink: "https://github.com/abdelrahman-ahmed-nassar/bankist/",
    img: bankist,
    tags: ["JavaScript"],
    year: "2021",
    featured: false,
  },
  {
    title: "Mapty",
    summary:
      "Workout tracking app with map integration for visualizing exercise locations.",
    description:
      "Workout tracking application with map integration for visualizing exercise locations. Users can log different types of workouts (running, cycling), set distances, durations, and other metrics, with all data persisted locally.",
    projectLink: "https://abdelrahman-ahmed-nassar.github.io/mapty/",
    codeLink: "https://github.com/abdelrahman-ahmed-nassar/mapty/",
    img: mapty,
    tags: ["JavaScript"],
    year: "2021",
    featured: false,
  },
  {
    title: "Bankist Website",
    summary: "Modern banking website with animations and interactive features.",
    description:
      "Modern banking website with animations and interactive features. The landing page includes smooth scrolling, lazy-loaded images, tabbed components, slider testimonials, and a modern sticky navigation that appears when needed.",
    projectLink: "https://abdelrahman-ahmed-nassar.github.io/bankist-website/",
    codeLink: "https://github.com/abdelrahman-ahmed-nassar/bankist-website/",
    img: bankistWebsite,
    tags: ["JavaScript"],
    year: "2021",
    featured: false,
  },
  {
    title: "Pig Game",
    summary: "Interactive dice game for two players with score tracking.",
    description:
      "Interactive dice game for two players with score tracking. Players take turns rolling dice to accumulate points, with strategic decisions on when to hold or continue rolling. Includes animations and a responsive design for all devices.",
    projectLink: "https://abdelrahman-ahmed-nassar.github.io/pig-game/",
    codeLink: "https://github.com/abdelrahman-ahmed-nassar/pig-game/",
    img: pigGame,
    tags: ["JavaScript"],
    year: "2020",
    featured: false,
  },
];
