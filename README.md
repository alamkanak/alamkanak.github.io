# Raquib Ul Alam - Portfolio Website

A modern, responsive portfolio website built with Nuxt 4, showcasing the work and expertise of Raquib Ul Alam, a Senior Android Engineer and ML Researcher.

## 🚀 Features

- **Modern Design**: Inspired by Linear.app's clean and minimal aesthetic
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Nuxt 4 for optimal speed and SEO
- **Content Management**: Uses Nuxt Content for managing projects and blog posts
- **Type-Safe**: Full TypeScript support throughout the application
- **Accessible**: Follows accessibility best practices
- **SEO Optimized**: Structured data, meta tags, and sitemap included

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **Content**: [Nuxt Content](https://content.nuxt.com/)
- **UI Components**: [Nuxt UI](https://ui.nuxt.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Nuxt Icon](https://nuxt.com/modules/icon) with Material Design Icons
- **Images**: [Nuxt Image](https://image.nuxt.com/)
- **Fonts**: [Nuxt Fonts](https://fonts.nuxt.com/) with Inter font family
- **TypeScript**: Full type safety and IntelliSense support

## 📁 Project Structure

```
├── app/
│   ├── assets/css/          # Custom CSS and theme
│   ├── components/          # Vue components
│   │   ├── common/          # Reusable common components
│   │   └── home/            # Home page specific components
│   ├── layouts/             # Layout components
│   ├── pages/               # Pages and routes
│   └── app.vue              # Root component
├── content/
│   └── project/             # Project markdown files
├── public/                  # Static assets
└── nuxt.config.ts           # Nuxt configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/alamkanak/alamkanak.github.io.git
cd alamkanak.github.io
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site for GitHub Pages
npm run generate
```

## 🎨 Customization

### Theme

The website uses a custom Linear.app-inspired theme defined in:
- `app/assets/css/main.css` - Custom CSS variables and utility classes
- `app/app.config.ts` - Nuxt UI theme configuration
- `nuxt.config.ts` - Global theme settings

### Content

Add new projects by creating markdown files in the `content/project/` directory. Each project should include frontmatter with:

```yaml
---
title: Project Title
description: Project description
tags: ['tag1', 'tag2']
thumbnail: ./thumbnail.png
date: 2024-01-01
links:
  - url: https://github.com/example
    text: View on GitHub
    icon: ['fab', 'github']
---
```

### Components

All components are located in the `app/components/` directory and follow Vue 3 Composition API patterns with full TypeScript support.

## 📱 Sections

The portfolio includes the following main sections:

1. **Hero Section**: Introduction with avatar and bio
2. **Contact Buttons**: Links to social profiles and contact methods
3. **Skills Section**: Technical expertise and experience
4. **Projects Section**: Dynamically loaded from content files

## 🚀 Deployment

This site is designed to be deployed on GitHub Pages:

1. Generate the static site:
```bash
npm run generate
```

2. The output will be in the `.output/public` directory

3. Deploy to GitHub Pages using GitHub Actions or manual upload

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About

Created by [Raquib Ul Alam](https://github.com/alamkanak) - Senior Android Engineer with 10+ years of experience, specializing in on-device ML deployment and signal processing.

- GitHub: [@alamkanak](https://github.com/alamkanak)
- LinkedIn: [alamkanak](https://www.linkedin.com/in/alamkanak/)
- Email: alam.kanak@gmail.com
