# Folder structure for React Project:

```
src/
├── assets/            
├── components/
│   ├── shared/        (Navbar.jsx, Footer.jsx)
│   └── ui/            (HeroSection.jsx )
├── config/            (firebase.config.js)
├── contexts/          (AuthProvider.jsx)
├── layouts/           (Root.jsx - Main layout of the entire site)
├── pages/             (Home.jsx, About.jsx, Blogs.jsx, Products.jsx, Contact.jsx)
├── pages/auth/        (Login.jsx, Register.jsx)
└── routes/            (Routes.jsx)
________________________________________
```

# Workflow:

1. User entered the site ➔ main loaded.
   
3. App started the router.
   
5. Router saw the current address / ➔ So it loaded the Root layout.
   
7. Root layout showed the Navbar and Footer inside it.
   
9. Routes file saw / Home page is needed for the address ➔ It sent the Home page to the Outlet inside the Root.

 ________________________________________

E-mail: www.jahirtawhid1988@gmail.com
Linkedin: Jahirtawhid
