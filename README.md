# Tauri, React and Vite

The code in this repository is base on the following:

- [Tauri & ReactJS Part 5 - Migrating to Vite]() video.
- https://github.com/elibroftw/modern-desktop-app-template
- https://github.com/carltonj2000/tauri-react-1

For fs access add content below to `allowlist` of
`./src-tauri/tauri.confi.json`.

```json title="./src-tauri/tauri.confi.json"
      "fs": {
        "scope": ["/*"]
      }
```

```bash
npm create vite@latest
cd tauri-react-vite-1
npm add -D @tauri-apps/cli cross-env
npm install @tauri-apps/api
yarn tauri init # vite builds in ../dist
npm run dev # with cmd below for dev
yarn tauri dev # with cmd above for dev

npm run build
npm run appimage
```
