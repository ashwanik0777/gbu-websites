# 🌐 College Website - React + Vite

This is a modern, responsive college website built using **React.js** with **Vite** for blazing fast development.  
Each section like Home, About, Academics, Gallery, and Contact is modular and built using reusable components.

---

## 📁 Folder Structure

```
college-website/
├── public/              # Static assets like images
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main pages (Home, About, etc.)
│   ├── App.jsx          # App router and layout
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mygbu-bootcamp/gbu-website.git
cd gbu-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build the project for production

```bash
npm run build
```

### 5. Preview production build locally

```bash
npm run preview
```

---

## ✏️ How to Make Changes

- **Edit Pages:**  
  All main pages like Home, About, etc. are located in the `src/pages/` directory.

- **Update Components:**  
  Common elements like Navbar, Footer, etc. can be edited in `src/components/`.

- **Add Assets:**  
  Place images and other static files in the `public/assets/` directory.  
  Use them like:
  ```jsx
  <img src="/assets/logo.png" alt="Logo" />
  ```

- **Add Routes:**  
  Add new routes in `App.jsx` using `react-router-dom`.

---

## ⚙️ Scripts (Vite)

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build locally

---

## 🧪 Tech Stack

- React.js
- Vite
- React Router DOM
- Tailwind CSS (optional)

---

## 📦 Deployment

Build your project first:

```bash
npm run build
```

Then deploy the `dist/` folder using:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Firebase Hosting](https://firebase.google.com/)
- [GitHub Pages](https://pages.github.com/) (with adapter)

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m "Add feature"`
4. Push to GitHub: `git push origin feature-name`
5. Submit a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
