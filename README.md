# seed -- the seed for Jade, Stylus, LiveScript and React apps

This project is an application skeleton for anyone who loves Jade, Stylus, LiveScript and React.

## Develop

```bash
npm install
npm start
```

## Build

```bash
npm install
npm run build
```

## Layout

```
# all of the sources
src/
  lib/
    *.ls
    *.styl
  index.ls
  index.jade

# all of the files which are created and watched by gulp
# so you can host them with gh-pages
lib/
  **/*.js
  **/*.css
index.js
bundle.js
index.html
```
