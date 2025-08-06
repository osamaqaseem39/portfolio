# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized with Next.js for excellent performance
- 🎭 **Smooth Animations**: Beautiful animations using Framer Motion
- 📝 **Contact Form**: Functional contact form with validation
- 🎯 **SEO Optimized**: Built with SEO best practices
- 🌙 **Accessible**: WCAG compliant design

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal information and key strengths
3. **Skills Section**: Technical skills with animated progress bars
4. **Projects Section**: Showcase of featured projects with links
5. **Experience Section**: Professional experience timeline
6. **Contact Section**: Contact form and information
7. **Footer**: Additional links and information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update social media links
   - Modify the description

2. **About Section** (`components/About.tsx`):
   - Update the personal description
   - Modify key strengths and skills

3. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and proficiency levels
   - Add/remove skills as needed

4. **Projects Section** (`components/Projects.tsx`):
   - Replace project data with your actual projects
   - Update GitHub and live demo links
   - Add your own project images

5. **Experience Section** (`components/Experience.tsx`):
   - Update work experience with your actual history
   - Modify achievements and technologies

6. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Modify social media links

### Styling

The website uses Tailwind CSS for styling. You can customize:

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Fonts**: Change fonts in `tailwind.config.js`
3. **Animations**: Modify animations in `tailwind.config.js`

### Images

Replace placeholder images with your own:

1. **Project Images**: Update image URLs in `components/Projects.tsx`
2. **Profile Picture**: Add your profile picture to the hero section
3. **Background Images**: Customize background images as needed

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Connect your repository
- **Railway**: Deploy directly from GitHub

## Performance Optimization

The website is already optimized for performance:

- ✅ **Image Optimization**: Using Next.js Image component
- ✅ **Code Splitting**: Automatic with Next.js
- ✅ **Minification**: Built-in optimization
- ✅ **Caching**: Proper cache headers
- ✅ **Lazy Loading**: Images and components

## SEO

The website includes SEO best practices:

- ✅ **Meta Tags**: Proper meta descriptions and titles
- ✅ **Structured Data**: Ready for rich snippets
- ✅ **Sitemap**: Can be generated with next-sitemap
- ✅ **Robots.txt**: Proper robots configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to:

- Open an issue on GitHub
- Contact me directly
- Check the documentation

## Credits

- **Icons**: [Lucide React](https://lucide.dev/)
- **Images**: [Unsplash](https://unsplash.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Design Inspiration**: Modern portfolio trends

---

Made with ❤️ using Next.js and Tailwind CSS 