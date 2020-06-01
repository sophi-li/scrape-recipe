const jsonld = require('jsonld')
const { chromium } = require('playwright')

const scrapeRecipe = async (url) => {
  console.log('url: ', url)

  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto(url)

  const handle = await page.$('script[type="application/ld+json"]')
  const text = await handle.innerText()

  const schemaContext = {
    recipe: 'http://schema.org/Recipe',
    recipeIngredient: 'http://schema.org/recipeIngredient',
  }

  const compacted = await jsonld.compact(JSON.parse(text), schemaContext)

  let ingredients = compacted.recipeIngredient

  if (Array.isArray(compacted)) {
    ingredients = compacted['@graph'].filter(
      (item) => item['@type'] === 'recipe'
    )[0].recipeIngredient
  }

  await browser.close()
  return ingredients
}

module.exports = scrapeRecipe
