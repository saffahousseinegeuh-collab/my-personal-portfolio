# Safa Houssein – Portfolio

> A modern, elegant portfolio website for Safa Houssein, a Computer Engineering student passionate about technology, digital systems, and creativity.

![Portfolio Preview](assets/img/safa4.jpeg)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- - [🎮 Game](#-game)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Installation & Setup](#-installation--setup)
- [📄 Pages Overview](#-pages-overview)
- [🎨 Color Palette](#-color-palette)
- [📱 Responsive Design](#-responsive-design)
- [🤖 Chatbot](#-chatbot)
- [🔍 Search Functionality](#-search-functionality)
- [🌙 Dark Mode](#-dark-mode)
- [📧 Contact Form](#-contact-form)
- [🔧 Customization](#-customization)
- [📝 License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 **Home Page** | Animated typing text, welcome message, and poetic section |
| 👤 **About Page** | Personal bio, education timeline, and language skills (6 languages) |
| 🛠️ **Skills Page** | Technical skills overview (C, C++, Python, HTML/CSS, JS, MATLAB, Node.js) |
| 📁 **Portfolio Page** | 6 clickable projects with modal popups showing detailed information |
| 📧 **Contact Page** | Contact form with CV upload functionality |
| 🎮 **Game Page** | Interactive quiz about Safa (7 questions) |
| 🙏 **Thank You Page** | Confirmation page after form submission |
| 🌙 **Dark Mode** | Toggle between light and dark themes (saved in localStorage) |
| 🔍 **Search Bar** | Quick navigation to any page by typing keywords |
| 🤖 **Chatbot** | Virtual assistant that knows everything about Safa |
| 📱 **Responsive** | Works perfectly on mobile, tablet, and desktop |
| ✨ **Animations** | Smooth hover effects, typing animation, and floating stars |

---

## 🎮 Game

The portfolio includes an interactive quiz game that tests visitors' knowledge about Safa:

**Questions:**
1. What is my full name?
2. What am I studying?
3. How many languages do I speak?
4. Which programming language did I use for the Glino game?
5. What is my passion besides engineering?
6. How many projects are in my portfolio?
7. What is my favorite field in engineering?

---

## 📁 Project Structure
portfolio-safa/
│
├── index.html # Home page
├── about.html # About page (bio, timeline, languages)
├── skills.html # Skills page
├── portfolio.html # Portfolio page (projects + interests)
├── contact.html # Contact page (form + CV upload)
├── game.html # Quiz game page
├── merci.html # Thank you page (form confirmation)
│
├── style.css # Custom CSS (colors, animations, chatbot)
├── script.js # Custom JavaScript
│
├── assets/
│ ├── bootstrap/
│ │ ├── css/
│ │ │ └── bootstrap.min.css
│ │ └── js/
│ │ └── bootstrap.min.js
│ ├── fonts/
│ │ └── font-awesome.min.css
│ └── img/
│ ├── safa4.jpeg # Hero background image
│ ├── haya.jpg # Profile photo (About page)
│ └── ... # Other images
│
└── README.md # This file

text

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure of all pages |
| **CSS3** | Styling, animations, dark mode |
| **Bootstrap 5** | Responsive grid, components, modals |
| **JavaScript** | Chatbot, search, dark mode, quiz game |
| **Font Awesome** | Icons for social media and UI |
| **Google Fonts** | Montserrat & Kaushan Script fonts |
| **FormSubmit.co** | Backendless form handling (email) |

---

## 🚀 Installation & Setup

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- (Optional) A local server like Live Server for VS Code

### Steps

1. **Clone or download** the project folder

2. **Open the project** in VS Code or any code editor

3. **Launch the website**:
   - Method 1: Double-click `index.html` to open in browser
   - Method 2: Use Live Server extension (recommended for development)

4. **For the contact form to work**:
   - Open `contact.html`
   - Replace `saffahousseinegeuh@email.com` with your real email address
   - The form uses FormSubmit.co (free, 100 emails/month)

5. **For the CV download**:
   - Place your CV PDF in `assets/cv-safa.pdf`

6. **For the profile photo**:
   - Place your photo in `assets/img/haya.jpg`

---

## 📄 Pages Overview

### 🏠 Home (`index.html`)
- Hero section with animated typing text
- Personal poem
- Dark mode toggle button (bottom-left)
- Chatbot (bottom-right)

### 👤 About (`about.html`)
- Profile photo
- Education timeline (cards)
- Language cards with flags and proficiency stars

### 🛠️ Skills (`skills.html`)
- 3 main skill categories:
  - Programming Languages (C, C++, Python, MATLAB)
  - Web Technologies (HTML, CSS, JS, Node.js, Bootstrap)
  - Other Skills (Problem Solving, Creativity, Drawing)

### 📁 Portfolio (`portfolio.html`)
- 6 clickable project cards
- Modal popups with project details
- Interests section (Drawing, Science, Languages, Reading, Music, Psychology)
- Education timeline

### 📧 Contact (`contact.html`)
- Contact form with fields:
  - Full name
  - Email
  - CV upload (PDF/DOC)
  - Message
- Contact information (Email, Phone, Instagram) - clickable

### 🎮 Game (`game.html`)
- 7-question quiz about Safa
- Score tracking
- Personalized results message
- Play again option

### 🙏 Thank You (`merci.html`)
- Confirmation message after form submission
- Poetic thank you note
- Button to return home

---

## 🎨 Color Palette

| Name | Hex Code | Usage |
|------|----------|-------|
| **Bordeaux** | `#722f37` | Primary buttons, accents, borders |
| **Bordeaux Clair** | `#8b3a3f` | Gradients, hover effects |
| **Bordeaux Foncé** | `#3d1a1f` | Dark mode navbar |
| **Beige** | `#f5f0e8` | Background (light mode) |
| **Beige Foncé** | `#e8dcca` | Secondary backgrounds |
| **Gold** | `#c9a96e` | Star decorations, hover links |
| **Texte Foncé** | `#2c2c2c` | Main text |
| **Texte Clair** | `#6b5b4f` | Secondary text |

### Dark Mode Colors

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | `#f5f0e8` | `#1a0f12` |
| Cards | `#ffffff` | `#3d2530` |
| Text | `#2c2c2c` | `#e8dcca` |
| Navbar | `#3d1a1f` | `#0d080a` |

---

## 📱 Responsive Design

| Breakpoint | Devices | Layout Changes |
|------------|---------|----------------|
| > 1200px | Desktop | Full grid (3-4 columns) |
| 768px - 1199px | Tablet | Reduced grid (2-3 columns) |
| < 768px | Mobile | Single column, stacked layout |

---

## 🤖 Chatbot

The chatbot appears on every page (bottom-right corner). It can answer questions about Safa:

| Question Type | Example |
|---------------|---------|
| Name | "Who is Safa?" |
| Age/Studies | "What is she studying?" |
| Skills | "What programming languages does she know?" |
| Projects | "What projects has she done?" |
| Interests | "What are her hobbies?" |
| Contact | "How can I contact her?" |

---

## 🔍 Search Functionality

The search bar in the navigation allows quick navigation:

| Keyword | Goes to |
|---------|---------|
| "home", "accueil" | index.html |
| "about", "bio" | about.html |
| "skills", "competences" | skills.html |
| "portfolio", "projets" | portfolio.html |
| "contact", "email" | contact.html |
| "game", "jeu", "quiz" | game.html |
| "merci", "thank" | merci.html |

---

## 🌙 Dark Mode

- Toggle button at the **bottom-left corner** of every page
- Preference is **saved** in localStorage
- Changes colors of:
  - Background
  - Cards
  - Text
  - Buttons
  - Chatbot
  - Search bar

---

## 📧 Contact Form

The contact form uses **FormSubmit.co** (free service):

1. User fills name, email, CV, message
2. Data is sent to FormSubmit
3. You receive an email at your address
4. User is redirected to `merci.html`

**To set up your email:**
```html
<input type="hidden" name="_next" value="merci.html">
<!-- Change the email below -->
<form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST">
🔧 Customization
Change Colors
Edit CSS variables in <style>:

css
:root {
    --bordeaux: #722f37;
    --beige: #f5f0e8;
    --gold: #c9a96e;
}
Add/Modify Projects
Edit portfolio.html:

html
<div class="col-sm-6 col-md-4 portfolio-item">
    <div class="portfolio-caption" data-bs-toggle="modal" data-bs-target="#modalProjectX">
        <h4>📁 Project Name</h4>
        <p class="text-muted">Project description</p>
    </div>
</div>
Add Languages
Edit about.html:

html
<div class="col-md-2 col-sm-4 col-6">
    <div class="language-card">
        <div class="language-icon">🇫🇷</div>
        <h4>French</h4>
        <div class="language-level">★★★★★</div>
        <div class="language-desc">Fluent</div>
    </div>
</div>
Modify Quiz Questions
Edit game.html:

javascript
const quizData = [
    {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0  // Index of correct answer (0-3)
    }
];
📝 License
This project is created for Safa Houssein's personal portfolio.

👩‍💻 Author
Safa Houssein

Computer Engineering Student

Email: saffahousseinegeuh@email.com

Instagram: @safabintuhussein

🙏 Acknowledgments
Bootstrap 5 for the responsive framework

Font Awesome for icons

Google Fonts for typography

FormSubmit.co for form handling

📸 Screenshots
Home Page
https://assets/img/safa4.jpeg

Dark Mode
Toggle the 🌙 button at bottom-left for dark theme.

Chatbot
Click the 💬 button at bottom-right to chat with Safa's virtual assistant.

🚀 Future Improvements
Add more quiz questions

Add project filtering by technology

Add visitor counter

Add PDF download for CV

Add more animations

Made with ❤️ by Safa Houssein

text

---

## 📁 How to use this README

1. Create a new file in your project root called `README.md`
2. Copy the entire content above into the file
3. Save it

The README will automatically display nicely on:
- **GitHub** (when you push your project)
- **GitLab**
- **Any Markdown viewer**

---

## 🖼️ Optional: Add a screenshot

If you want to add a screenshot of your portfolio to the README:

1. Take a screenshot of your portfolio
2. Save it as `preview.png` in the `assets/img/` folder
3. Uncomment or add this line in the README:
```markdown
![Portfolio Preview](assets/img/preview.png)
