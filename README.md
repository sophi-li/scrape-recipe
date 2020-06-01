
![GitHub top language](https://img.shields.io/github/languages/top/sophi-li/scrape-recipe.svg?style=for-the-badge) ![GitHub repo size](https://img.shields.io/github/repo-size/sophi-li/scrape-recipe.svg?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/sophi-li/scrape-recipe.svg?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/sophi-li/scrape-recipe.svg?style=for-the-badge)

# Scrape Recipe

Scrape recipe websites with [recipe schema data](https://schema.org/Recipe) using [Playwright](https://github.com/microsoft/playwright).

## Installation

Using npm:

```
npm install scrape-recipe
```

## Usage

```js
// import module
const scrapeRecipe = require('scrape-recipe')

async function getRecipe() {
  let recipe = await scrapeRecipe('recipe-website-url')
  console.log(recipe)
}
```

## Contributing

Issues and pull requests are welcome. This codebase follows the [Contributor Covenant standard](https://github.com/sophi-li/scrape-recipe/blob/master/CODE_OF_CONDUCT.md).

## License

[MIT](https://github.com/sophi-li/scrape-recipe/blob/master/LICENSE)
