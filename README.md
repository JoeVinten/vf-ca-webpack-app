# Migrating from Webpack to Vite

## Installing Vite

Let’s install vite and the react plugin

```js
yarn add vite @vitejs/plugin-react --dev

// N.B. If using node pre 16 then do the following instead

yarn add vite@2.9 @vitejs/plugin-react --dev
```

We need to now update our scripts in our package.json. Remove the webpack build, and start scripts while you're here.

```jsx
// builds our project
"build": "vite build",
// starts up the dev server
"dev": "vite",
// starts a server showing our application built for production
"preview": "vite preview"
```

Create a vite.config.js file in the root of your project and add in our new react plugin

```js
// vite.config.js

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [react()],
})
```

You can move your `index.html` file to the root level now and add a `<script type="module" src="./src/index.jsx">`. You'll also need to
change your `index.js` file to be `.jsx`.

Run `yarn dev` and now your project should be loading just like that.

We can now remove all the webpack junk.

`yarn remove source-map-loader url-loader webpack webpack-cli webpack-dev-server css-loader babel-loader `

## Proxying

Let's proxy our API endpoint.

Go into your `App.jsx` file and update the endpoint to be `/getJokes`.

We can then go the our `vite.config.js` file and update our server options.

```js
// vite.config.js
...
server: {
	proxy: {
				"/getJoke": {
					target: "https://icanhazdadjoke.com/",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/getJoke/, ""),
				},
			},
	}

	...
```

When making requests to our API we will now be rewriting that path and changing the origin.

## Adding other plugins

We can add other plugins and there's a ton you can find on the [awesome vite github](https://github.com/vitejs/awesome-vite#plugins).

Let's add some image minification for our jpegs by using the [imagemin plugin](https://github.com/vbenjs/vite-plugin-imagemin).

It's as simple as installing the plugin

yarn add vite-plugin-imagemin -D

````

Then after this just add it to your plugins section like so:

```js
...
		viteImagemin({
			mozjpeg: {
				quality: 20,
			},
		}),
...
````

## Build optimisations

We can adjust some of our build settings and customize them to our liking.

To add some configuration all we have to do is drop a `build` command into our vite config file.

Let's try adding a couple of basic ones ones:

```js
build: {
	chunkSizeWarningLimit: 600,
	minify: true,
	outDir: './dist'
}
```

We can also set some options with `rollupOptions` to set things like tree shaking as well as some other cool ones which can be found
[in the documentation](https://rollupjs.org/guide/en/#big-list-of-options).

Let's set `treeshaking` to be true, so we can see how the rollupoptions work.

```js
build: {
	...
	rollupOptions:{
		treeshaking: true
	}
}
```
