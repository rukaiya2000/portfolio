# Portfolio Website Setup & Customization Guide

Your portfolio website is built with **React**, **Vite**, and **Tailwind CSS**. It's ready to deploy on Vercel!

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Visit `http://localhost:5173` to see your site

### Build for Production
```bash
npm run build
```
The optimized build will be in the `dist/` folder

---

## 📝 Customization Guide

### ⚡ **Update Global Constants (START HERE!)**

All social links and personal information are stored in one place: [src/config/constants.js](src/config/constants.js)

Update this file once, and it will automatically update everywhere:
```javascript
export const SOCIAL_LINKS = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_PROFILE/",
  email: "your.email@example.com",
};

export const PERSONAL_INFO = {
  name: "YOUR NAME",
  title: "Your Title",
  location: "Your Location",
  phone: "+1 (XXX) XXX-XXXX",
};

export const RESUME_PATH = "/resume.pdf";
export const RESUME_FILENAME = "YourName_Resume.pdf";
```

**Used in:** Hero, Footer, Resume components ✅

### 1. **Update Personal Information**

All personal info is now centralized in [src/config/constants.js](src/config/constants.js) - update it once and it applies everywhere!

### 2. **Add Your Skills**

Edit [src/components/Skills.jsx](src/components/Skills.jsx):
Update the `skills` array with your actual skills:
```javascript
const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Vue", "TypeScript", "CSS"] 
  },
  // Add more categories...
];
```

### 3. **Add Your Experience**

Edit [src/components/Experience.jsx](src/components/Experience.jsx):
Update the `experiences` array with your work history:
```javascript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2023 - Present",
    achievements: [
      "Key achievement 1 with metric",
      "Key achievement 2 with metric",
      "Key achievement 3",
    ],
  },
  // Add more positions...
];
```

### 4. **Add Your Projects**

Edit [src/components/Projects.jsx](src/components/Projects.jsx):
Update the `projects` array with your project details:
```javascript
const projects = [
  {
    title: "Project Name",
    description: "What this project does and why it's cool",
    metrics: "Key metric or achievement (e.g., '~500 monthly users')",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project-repo",
    hosted: "https://deployed-url.com",  // Optional
    youtube: "https://youtube.com/watch?v=...",  // Optional
    walkthrough: "https://example.com/walkthrough",  // Optional
  },
  // Add more projects...
];
```

### 5. **Add Recommendations**

Edit [src/components/Recommendations.jsx](src/components/Recommendations.jsx):
```javascript
const recommendations = [
  {
    author: "Person's Name",
    role: "Job Title at Company",
    text: "Testimonial quote about working with you",
    emoji: "⭐",  // Pick an emoji
  },
  // Add more recommendations...
];
```

### 6. **Add Certifications**

Edit [src/components/Certifications.jsx](src/components/Certifications.jsx):
```javascript
const certifications = [
  {
    title: "Certification Name",
    issuer: "Organization Name",
    date: "2024",
    link: "https://certification-link.com",
    emoji: "📜",  // Pick an emoji
  },
  // Add more certifications...
];
```

### 7. **Add Your Hobbies/Interests**

Edit [src/components/Hobbies.jsx](src/components/Hobbies.jsx):
Update the `hobbies` array with your interests and photos:
```javascript
const hobbies = [
  {
    title: "Running",
    description: "Your description here",
    image: "URL_TO_YOUR_IMAGE",  // Use Unsplash, your own hosted images, or /public/images/
  },
  // Add more hobbies...
];
```

#### Add Your Own Images
1. Place image files in the `public/images/` folder (create it if it doesn't exist)
2. Reference them as: `"/images/my-photo.jpg"`

### 8. **Add Resume Download**

Place your resume PDF in the `public/` folder and name it `resume.pdf`.
The download button in [src/components/Resume.jsx](src/components/Resume.jsx) will automatically work.

### 9. **Customize Colors & Styling**

The site uses Tailwind CSS with purple as the primary color. To change colors:

**Tailwind Config** - Edit [tailwind.config.js](tailwind.config.js):
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
      },
    },
  },
}
```

**Quick color changes:**
- Purple buttons/accents appear throughout components
- Change `bg-purple-600`, `text-purple-600`, etc. to your preferred Tailwind colors

---

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation menu
│   │   ├── Hero.jsx            # Welcome section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Projects.jsx        # Project cards
│   │   ├── Hobbies.jsx         # About me / Interests
│   │   ├── Resume.jsx          # Resume download
│   │   └── Footer.jsx          # Social links
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles (Tailwind)
│   └── main.jsx                # Entry point
├── public/
│   ├── resume.pdf              # Your resume (add this)
│   ├── images/                 # Your photos (create this folder)
│   └── favicon.svg
├── index.html                  # HTML entry point
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── postcss.config.js           # PostCSS configuration
```

---

## 🚀 Deploy to Vercel

### Option 1: Git Push (Recommended)
1. Initialize git: `git init`
2. Add your GitHub repo as remote
3. Push to GitHub
4. Go to [vercel.com](https://vercel.com) → New Project → Select your repo
5. Vercel auto-detects it's a Vite app and deploys automatically

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts to deploy

### Option 3: Manual Deploy
```bash
npm run build
# Upload the 'dist' folder contents to any static host (Vercel, Netlify, GitHub Pages, etc.)
```

---

## 📱 Responsive Design

The site is fully responsive! It uses Tailwind's responsive classes:
- `md:` - Medium screens and up
- `lg:` - Large screens and up

Test on mobile by:
1. Running `npm run dev`
2. Opening DevTools (F12)
3. Clicking the mobile icon

---

## 🎨 Tips for a Great Portfolio

1. **Projects**: Include real GitHub links and hosted demos
2. **Descriptions**: Keep them short but impactful
3. **Images**: Use high-quality photos for hobbies section
4. **Colors**: Stick to your brand colors throughout
5. **Content**: Update regularly with new projects
6. **SEO**: Update `index.html` meta tags for better search results

---

## 🆘 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Tailwind classes not working?**
Make sure `tailwind.config.js` content paths are correct and restart dev server.

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)

Enjoy building your portfolio! 🎉
