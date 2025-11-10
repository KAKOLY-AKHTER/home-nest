# 🌻 SkillSwap – A Local Skill Exchange Platform

### Assignment Category: Assignment-09_category_Sunflower

SkillSwap is an interactive platform where people can **offer, learn, and exchange skills** within their local area.  
Whether it’s guitar lessons, language exchange, coding help, or yoga training — users can browse listings, rate experiences, and connect with local skill providers.

---

## 🚀 Live Demo
🔗 **Live Link:** [https://endearing-maamoul-d68514.netlify.app](https://endearing-maamoul-d68514.netlify.app)  
🔗 **GitHub Repository:** [https://github.com/programming-hero-web-course2/b12-a9-firesheild-KAKOLY-AKHTER.git](https://github.com/programming-hero-web-course2/b12-a9-firesheild-KAKOLY-AKHTER.git)

---

## 🧭 Project Overview
SkillSwap helps users:
- Discover and book various skill-based learning sessions.
- Create an account, sign in securely, and view their personalized profile.
- Explore popular and top-rated skill providers within their local area.
- Update their profile and book learning sessions through an intuitive interface.

---

## 🧱 Core Features

### 🏠 Home Page
- **Hero Section** with animated slider (Swiper/DaisyUI)
- **Popular Skills** section showcasing top-rated skills with images, price & rating
- **How It Works** section describing the process
- **Top Rated Providers** section (static/fake data)
- **Extra Section:** “Upcoming Workshops” / “Testimonials”

### 💡 Skill Listings
- Skills are fetched from a local JSON file
- Each skill card includes:  
  🖼️ Image • 🎓 Skill Name • ⭐ Rating • 💰 Price • 📄 View Details Button

### 🔒 Skill Details (Protected Route)
- Only logged-in users can view skill details  
- If not logged in, redirected to login page  
- Shows full skill information and includes a **Book Session Form**:
  - Name  
  - Email  
  - Submit (shows success toast)

### 👤 Authentication System (Firebase)
- Firebase Email/Password & Google authentication
- Signup with Name, Photo URL, Email, Password
- Password validation:  
  - 1 uppercase letter  
  - 1 lowercase letter  
  - Min 6 characters
- Login with email/password or Google
- Functional **Forgot Password** page (redirects to Gmail)
- Redirect after login/signup  
- Password visibility toggle

### 🧑‍💻 My Profile Page
- Displays user’s name, email, and photo
- Functional **Update Profile** feature using Firebase `updateProfile()`

### 📱 Responsive Design
- Fully responsive for mobile, tablet, and desktop
- Built with **TailwindCSS & DaisyUI**

---

## 🧰 Technologies Used
- React (Vite)
- React Router DOM
- Firebase Authentication
- Tailwind CSS + DaisyUI
- Swiper.js
- React Hot Toast
- AOS (Animation on Scroll)

---

## ⚙️ Setup Instructions
1. Clone the repository  
   ```bash
   git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-KAKOLY-AKHTER.git
