# Next.js module federation POC

This repository contains a proof-of-concept for creating microfrontends with NextJS using Webpack 5 module federation feature. There are currently two apps:

- **Homepage**: A mock landing page for a website.
- **Portal**: A mock portal for a web application.

Both apps are built with Next.js, they share a page called "Boring Page" and a button component called "Boring Button".

## Getting started

To run the apps locally, follow these steps:

1. Clone the repository: `git clone https://github.com/antoine-boue/nextjs-module-federation.git`
2. Navigate to the repository directory: `cd nextjs-module-federation`
3. Install dependencies in both apps: `npm install`
4. Start the development server in both apps: `npm run dev`

This will start both the `homepage` and `portal` apps on separate ports. You can access them by visiting `http://localhost:3001` for the homepage and `http://localhost:3000` for the portal.

## Directory structure

The repository is organized as follows:

nextjs-module-federation/
├── homepage/
│ ├── pages/
│ │ ├── boring-page.tsx
│ │ └── index.tsx
│ ├── public/
│ └── ...
├── portal/
│ ├── components/
│ │ └── BoringButton.tsx
│ ├── pages/
│ │ ├── boring-page.tsx
│ │ └── index.tsx
│ ├── public/
│ └── ...
└── README.md

- `homepage/` contains the source code for the mock homepage app.
- `portal/` contains the source code for the mock portal app.
- `README.md` is this file.

## Sharing components

To share components between the Next.js apps and other front-end frameworks, we use module module federation. Portal has the source code of both the BoringPage and the BoringButton and Homepage reuses both.

## Future improvements

Some possible improvements to the apps include:

- Improve the pages and components to make the use cases more realistic.
- Try both SSR and CSR.
- Share some vanilla/Vite React components to the Nextjs apps.
- Add JAML legacy code.

## License

This repository is licensed under the [MIT License](https://opensource.org/licenses/MIT).
