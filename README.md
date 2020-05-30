# Scrape Recipe

## Installation

```
npm install scrape-recipe
```

## Usage

```js
// import module
const scrapeRecipe = require("scrape-recipe");

async function getRecipe() {
  let recipe = await scrapeRecipe("url");
  console.log(recipe);
}
```
