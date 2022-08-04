# Migrating from Webpack to Vite

## Installing Vite

1. Let’s install vite and the react plugin

```jsx
yarn add vite @vitejs/plugin-react --dev

// N.B. If using node pre 16 then do the following instead

yarn add vite@2.9 @vitejs/plugin-react --dev
```

1. We need to now update our scripts in our package.json

```jsx
// builds our project
"build": "vite build",
// starts up the dev server
"dev": "vite",
// starts a server showing our application built for production
"preview": "vite preview"
```

1. Create a vite.config.js file in the root of your project
2. Add the react plugin ` yarn add``@vitejs/plugin-react `

```jsx
// vite.config.js

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [react()],
})
```

## Loaders

## Static asset handling

## Build optimisations

## Proxy

Star wars api

## Vite middleware
