# Fleur

Fleur is a modern Angular storefront for a lifestyle and home decor brand, built to showcase a refined product catalog fetched from the DummyJSON API.

## Overview

This project presents a premium editorial shopping experience with a warm minimal aesthetic, a left-side product gallery, a large feature product section, and a responsive product grid. The UI is designed to feel elevated and contemporary while remaining straightforward to build and scale.

## Features

- Editorial-style storefront layout
- Responsive product gallery and featured hero section
- Product cards with pricing, descriptions, categories, and ratings
- Live product data from DummyJSON
- Angular signal state management and RxJS HTTP integration
- Clean, modern styling inspired by luxury home and lifestyle branding

## Tech stack

- Angular 22
- TypeScript
- RxJS
- DummyJSON API

## Project structure

```bash
src/
├── app/
│   ├── app.css
│   ├── app.html
│   ├── app.ts
│   └── services/
│       └── products.ts
├── styles.css
└── index.html
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm
- Angular CLI (recommended)

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd APIinAngular
```

2. Install dependencies:

```bash
npm install
```

## Run locally

Start the Angular development server:

```bash
npm start
```

Then open:

```text
http://localhost:4200
```

## Production build

```bash
npm run build
```

The compiled output is generated in the `dist/` folder.

## Scripts

```bash
npm start      # run the app in development mode
npm run build  # create a production build
npm test       # run Angular tests
```

## Notes

The app uses the public DummyJSON products endpoint:

```text
https://dummyjson.com/products
```

All product imagery is pulled from DummyJSON data, matching the brand’s curated storefront look.

## License

This project is a demo storefront for learning and frontend experimentation and can be adapted for personal or commercial use.
