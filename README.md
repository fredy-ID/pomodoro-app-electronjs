# React + TypeScript + Vite + Electron

## Initialize

```bash
npm init
```

## Dev

Simply write the following code to debug the app
```bash
npm run dev
```

This code will allow you to run the frontend with hot reloading
```bash
npm run dev:react
```

This code will allow you to debug the app with electron. You must have started an instance of the frontend with `npm run dev:react` from the terminal to avoid blank page.
```bash
npm run dev:electron
```

## Separate packaging

The following code will package the frontend react app
```bash
npm run build
```

The following code will package the electron app
```bash
npm run transpile:electron
```

## Build

This code will build the app for windows platform. use `dist:linux` or `dist:mac` for linux or mac versions.
```bash
npm run dist:win
```