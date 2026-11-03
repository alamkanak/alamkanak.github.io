# Nuxt Portfolio Website

A modern, responsive portfolio website built with Nuxt 4, showcasing the work and expertise of Raquib Ul Alam, a Senior Android Engineer and ML Researcher.

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **Content**: [Nuxt Content](https://content.nuxt.com/)
- **UI Components**: [Nuxt UI](https://ui.nuxt.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Nuxt Icon](https://nuxt.com/modules/icon) with Material Design Icons
- **Images**: [Nuxt Image](https://image.nuxt.com/)
- **Fonts**: [Nuxt Fonts](https://fonts.nuxt.com/) with Inter font family
- **TypeScript**: Full type safety and IntelliSense support

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

### Managing Content

All contents are located in the `content/` directory. You can add, edit, or remove projects and profile details using Markdown and YAML files. The site uses Nuxt Content to render these files dynamically. Icons are used from Nuxt Icon: https://icon-sets.iconify.design/

### Search and sharing metadata

The homepage reads its title and description from `content/profile.yml`. Project pages use their Markdown title, description, and thumbnail. Metadata is rendered in the initial HTML and updates during navigation, with absolute canonical URLs and Open Graph/Twitter images. Filter query parameters canonicalize to the unfiltered portfolio.

`shared/utils/site.ts` defines the production URL, site identity, and default social preview. The homepage includes WebSite, Person, and ProfilePage structured data; project pages include WebPage, CreativeWork, and breadcrumb structured data. The generated fallback pages use `noindex`.

`/sitemap.xml` is a sitemap index covering the portfolio, PDFWeld, and Sequence. The portfolio's `/sitemap-portfolio.xml` is generated from the project collection during every static build, so new portfolio entries are included automatically. Independently deployed project sitemaps are registered in `projectSitemaps` in `shared/utils/site.ts`; add newly published sitemaps there after verifying they return valid sitemap XML. Builds do not fetch these external deployments. The root `robots.txt` points to the index, so all registered sitemaps can be discovered from one URL. After deployment, submit `https://alamkanak.github.io/sitemap.xml` in Google Search Console. Search engines control indexing and when updated metadata appears ([Google's SEO guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).

The favicon is an ink-and-ivory `ra` monogram, with its vector source in `public/favicon.svg` and ICO, 96px PNG, and 180px Apple touch exports. The default 1200×630 social preview is `public/social-card.png`, with an editable SVG source alongside it. The card uses the existing profile portrait; its lettering is outlined and its photo embedded so the SVG renders consistently without installed fonts or external assets. Update the corresponding exports when changing either design.

## 👨‍💻 About

Created by [Raquib Ul Alam](https://github.com/alamkanak)

- GitHub: [@alamkanak](https://github.com/alamkanak)
- LinkedIn: [alamkanak](https://www.linkedin.com/in/alamkanak/)
