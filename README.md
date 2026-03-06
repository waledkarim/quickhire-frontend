# QuickHire – Frontend

This is the frontend for **QuickHire**, a simple job board application where users can browse job listings, view job details, and apply for jobs.

It was built based on the provided Figma design for the technical assessment. This is the github link for the QuickHire Backend repo: https://github.com/waledkarim/quickhire-backend.

### Deployment

The QuickHire frontend has been deployed on Vercel, link: https://quickhire-frontend-phi.vercel.app/

## Main Tech Stack

- Next.js v16
- React v19
- Tailwind CSS v4

## Validation

- Required fields must be provided
- Email must be properly formatted
- Resume link must be a valid URL
- The Job description field must be less than 20 chars.

## Note

**Ensure your backend server is running**

# ✨ Features

### Job Listings Page

- Displays all available jobs
- Search functionality
- Filter by category and location

### Job Details Page

- Full job description
- Apply Now form
  - Name
  - Email
  - Resume link
  - Cover note

### Admin Panel

- Create new job listings
- Delete job listings
- View job information

### UI/UX Enhancements

- Loading skeletons
- Error boundaries
- Fully responsive design
- Reusable components

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/quickhire-frontend.git
cd quickhire-frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create .env.local file:

```bash
NEXT_PUBLIC_API_BASE_URL = http://localhost:5000
API_BASE_URL = http://localhost:5000
```

### 4️⃣ Start the dev server

```bash
npm run dev
```
