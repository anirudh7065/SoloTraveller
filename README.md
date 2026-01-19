# SoloTraveller 🌍

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue?style=for-the-badge&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green?style=for-the-badge&logo=supabase)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**SoloTraveller** is a budget-focused travel guide platform for people who love exploring.
It provides realistic, affordable, and practical travel guides focused on public transport, low-cost stays, walkable exploration, and peaceful experiences.

No luxury fluff.  
No unrealistic itineraries.  
Just travel that works in real life.

---

## 🌿 What SoloTraveller Offers

- Budget travel guides for Indian destinations  
- Solo-friendly accommodation suggestions  
- Public transport based route planning  
- Walking & slow-travel itineraries  
- Realistic cost breakdowns  
- Safety & solo-travel tips  

---

## 🎯 Target Audience

- First-time solo travellers  
- College students & young professionals  
- Budget backpackers  
- People seeking peaceful slow travel  
- Travelers who prefer real costs over luxury marketing  

---

## 💡 Core Travel Philosophy

- Travel light  
- Use public transport  
- Walk whenever possible  
- Stay in hostels or homestays  
- Spend on experiences, not luxury  
- Travel slow, not rushed  

---

## 🛠 Tech Stack

**Frontend**

- Next.js 16 (App Router + Turbopack)
- React 19
- TypeScript

**Styling**

- Tailwind CSS 4
- Radix UI
- Emotion

**Content Rendering**

- Markdown via `markdown-to-jsx`

**Backend & Services**

- Supabase (PostgreSQL + Auth)
- Upstash Redis (Rate Limiting)
- Nodemailer (Email handling)

**Analytics & Hosting**

- Vercel Analytics
- Vercel Hosting

---

## 📂 Project Folder Layout

```

app/
├── api/
│   ├── formSubmit/
│   └── getdata/
│
├── blog/
├── contact/
├── content/
├── guide/
├── locations/
│
├── favicon.ico
├── globals.css
├── layout.tsx
├── not-found.tsx
└── page.tsx

components/

constants/

contribution/
├── locations/
└── guides/

lib/
├── supabase/
└── rateLimit.ts
└── utils.ts
└── validateForm.ts

```

### Folder Purpose

- **app/** — Next.js App Router pages and routes  
- **app/api/** — Backend API routes  
- **content/** — Rendered Markdown content fetched from Supabase  
- **guide/** — Guide listing and pages  
- **locations/** — Location listing and pages  
- **components/** — Reusable UI components  
- **constants/** — Static configuration  
- **contribution/** — Dev-only Markdown submission workspace
- **lib/** — functional parts,db and ratelimiting

---

## 🗂 Content & Data Management

SoloTraveller uses **Supabase as the central Markdown content database**.

### Locations Table

Each location record contains:

- `id` — Unique identifier  
- `title` — Destination name  
- `content` — Markdown travel content  
- `images` — Image URLs / array  

### Guides Table

Each guide record contains:

- `id` — Unique identifier  
- `title` — Guide title  
- `content` — Markdown guide content  

---

## 🔁 Content Workflow

### Writing Content

- Only SoloTraveller devs write Markdown  
- Draft Markdown files go into:

```

/contribution/locations/
/contribution/guides/

````
- check the example folders in each contribution folders for the structure
  
### Review Process

1. Dev adds Markdown file in contribution folder  
2. Opens GitHub Pull Request  
3. Content is reviewed and merged  

### Publishing Process

4. Approved Markdown is uploaded to Supabase  
2. Website fetches content dynamically  
3. Markdown renders instantly on the live site  

### Access Control

- No public content submission  
- Only devs can modify database content  

This ensures:

- Version control on drafts  
- Clean review flow  
- Instant content updates  
- Full editorial control  

---

## 🚀 Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/anirudh7065/SoloTraveller.git
````

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

This project uses environment variables for database access, rate limiting, and email services.

Create a `.env.local` file in the root of the project and add the following:

```env
# Contact Form & Rate Limiting
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""

# Email Service (Nodemailer SMTP)
SMTP_USER=""
SMTP_PASS=""
TO_EMAIL=""

# Supabase Database & Auth
SUPABASE_URL=""
SUPABASE_PUBLISHABLE_DEFAULT_KEY=""
```

## 🤝 Contributing

Code contributions are welcome.

- Fork the repository
- Make your changes
- Open a Pull Request

For travel content contributions, use the `/contribution` folder workflow described above.

---

## 📬 Contact

For collaboration or feedback:

📧 Email: [anirudhraj02@gmail.com](mailto:anirudhraj02@gmail.com)

---

## 🌄 Final Note

SoloTraveller is built for people who want:

- Quiet trips over crowded tours
- Real budgets over fake packages
- Simple journeys over complex plans

Travel alone.
Travel smart.
Travel free.
