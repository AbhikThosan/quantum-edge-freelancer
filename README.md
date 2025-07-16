Quantum Edge Freelancer
A Next.js-based freelancing platform for job listings and user authentication.
Overview
This project is a web application built with Next.js, TypeScript, and Tailwind CSS. It includes features for user registration, login, and job listings, with a focus on a responsive and modern UI.
Project Structure

```
my-nextjs-app/
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── README.md
├── public/
│   ├── icons/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── SocialLinksGroup.tsx
│   │   ├── jobs/
│   │   │   ├── JobCard.tsx
│   │   │   ├── JobList.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── navigation.tsx
│   │   ├── Login/
│   │   │   ├── LoginForm.tsx
│   │   ├── register/
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── TermsPrivacy.tsx
│   ├── hooks/
│   │   ├── useJobList.ts
│   │   ├── useLogin.ts
│   │   ├── usePopularPosts.ts
│   │   ├── useRegistration.ts
```

Installation

Clone the repository:
git clone https://github.com/AbhikThosan/quantum-edge-freelancer.git
cd my-nextjs-app

Install dependencies:
npm install

Run the development server:
npm run dev

Usage

Visit http://localhost:3000 to see the app.
Use the login and register pages under the /login and /register routes.
View job listings on the homepage or a dedicated jobs page.

Features

User authentication (login/register)
Job listing with cards
Responsive design with Tailwind CSS
Custom hooks for API calls

Technologies

Next.js
TypeScript
Tailwind CSS
React

Contributing
Feel free to open issues or submit pull requests. Please follow the existing code style.
License
MIT License (specify if different).
