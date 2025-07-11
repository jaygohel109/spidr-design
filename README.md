# Spidr Design - Air Fryer Interest Form

A React-based interest form for Spidr Design's new air fryer product. This form is designed to be embedded at the bottom of a landing page to capture user interest.

## Features

- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Form Validation**: Real-time validation with helpful error messages
- **PIN Formatting**: Auto-format 16-digit PIN with dashes (####-####-####-####)
- **Spidr-Inspired Design**: Clean, professional styling inspired by Spidr Design's aesthetic
- **Accessibility**: Proper labels, focus states, and keyboard navigation

## Form Fields

1. First Name (required)
2. Last Name (required)
3. Phone Number (required, with validation)
4. Email Address (required, with email validation)
5. Air Fryer Cost Guess (required, numeric)
6. Secret 16-digit Spidr PIN (required, formatted with dashes)

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Hook Form** for form management and validation
- **Lucide React** for icons
- **Vite** for build tooling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spidr-design
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Form Submission

When the form is submitted, the data is logged to the browser console and a success message is displayed. In a real implementation, this would typically send the data to a backend API.

## Styling

The form uses a custom color palette inspired by Spidr Design:
- Primary: `#1a1a1a` (dark gray)
- Secondary: `#f5f5f5` (light gray)
- Accent: `#3b82f6` (blue)

## License

This project is created for the Spidr Design coding assessment.
