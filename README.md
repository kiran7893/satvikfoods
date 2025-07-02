# Satvic Foods - Next.js Application

A modern Next.js application built with TypeScript, Tailwind CSS, and Framer Motion.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.20.1
- **Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Runtime**: Node.js 20.15.0
- **React**: 19.0.0
- **Deployment**: Vercel/Netlify compatible

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 20.15.0 or higher)
- npm or yarn package manager
- Git for version control

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Install Node.js (if not already installed)

```bash
# Install the specified Node.js version
nvm install 20.15.0

# Use the installed version
nvm use 20.15.0

# Verify the installed version
node --version  # Should output v20.15.0
```

### 2. Clone the repository

```bash
git clone https://github.com/anveshane/satvicfoods.git
cd satvicfoods
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
satvicfoods/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧩 Adding Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

## 📦 Key Dependencies

- **Next.js 15.3.4** - React framework
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12.20.1** - Animation library
- **Lucide React** - Icon library
- **shadcn/ui** - Component library

## 🌐 Deployment

This project is ready for deployment on Vercel or Netlify. The build process is optimized for these platforms.

## 📝 License

This project is private and proprietary.
