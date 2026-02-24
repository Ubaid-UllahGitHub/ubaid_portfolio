Here is a clean, professional, and comprehensive **README.md** file specifically designed for a React + Tailwind + Shadcn project. It includes all the steps a new developer needs to get the project running without any confusion.

---

# 🚀 Momentum AI Landing Page

A high-performance, modern landing page built with **React**, **Tailwind CSS v4**, and **Shadcn/UI**. This project features smooth Framer Motion animations, a responsive testimonial slider, and a professional SaaS aesthetic.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS v4 (with custom `@theme` variables)
* **Components:** Shadcn/UI & Lucide React Icons
* **Animations:** Framer Motion
* **Font:** Inter (Primary)

---

## ⚙️ Getting Started

Follow these steps to set up the project locally on your machine.

### 1. Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Clone the Repository

```bash
git clone https://github.com/Ubaid-UllahGitHub/react-tailwnind-shadecn-LandingPage.git
cd react-tailwnind-shadecn-LandingPage

```

### 3. Install Dependencies

```bash
npm install

```

### 4. Run Development Server

```bash
npm run dev

```

The site will be live at `http://localhost:5173`.

### 5. Build for Production

```bash
npm run build

```

---

## 🎨 Key Features for Developers

### Custom Theme Variables

The project uses Tailwind v4 CSS variables located in `src/index.css`. You can easily update the brand identity here:

* `--color-brand-heading`: Primary dark color for titles.
* `--color-brand-body`: Slate gray color for paragraphs.
* `--background-image-brand-gradient`: The global dark gradient used for buttons.

### Animation Utils

Reusable animation variants (like `fadeInUp` and `zoomIn`) are located in `src/utils/animations.js`. Use them with Framer Motion:

```jsx
<motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
  Content here
</motion.div>

```

### Navbar Behavior

* **Sticky Header:** Automatically adds a glassmorphism blur effect on scroll.
* **Smooth Scroll:** Anchor links (`#features`, `#pricing`, etc.) scroll smoothly thanks to the global `scroll-behavior: smooth` in CSS.

---

## 📁 Project Structure

src/
├── components/
│   ├── ui/               # Atomic Shadcn/UI components (Button, Input, etc.)
│   └── layout/            # Layout wrapper components
│       ├── Navbar.jsx    # Sticky navigation with glassmorphism
│       └── Footer.jsx    # Site-wide footer and social links
├── sections/             # Large page blocks
│   ├── Hero.jsx          # Top section with main CTA
│   ├── Features.jsx      # Grid of product capabilities
│   ├── Testimonials.jsx  # Responsive customer slider
│   ├── Pricing.jsx       # Subscription plans
│   └── FAQ.jsx           # Accordion questions
├── utils/                # Framer Motion variants (fadeInUp, zoomIn)
├── assets/               # Local images, SVGs, and brand assets
├── index.css             # Tailwind v4 theme and global base styles
└── App.jsx               # Page assembly (imports all sections)
├── public/               # Favicon and static public assets
└── package.json          # Project dependencies and scripts

---

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License.

**Next Step:** Would you like me to help you set up the **GitHub Action** so that your project automatically deploys to GitHub Pages or Vercel every time you push?