const jsonld = require("jsonld");
const { chromium } = require("playwright");

const scrapeRecipe = async (req, res) => {
  console.log("url: ", req.body.url);

  if (!req.body.url) {
    res.status(400).send(`Bad request. URL: ${req.body.url}`);
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(req.body.url);

  const handle = await page.$('script[type="application/ld+json"]');
  const text = await handle.innerText();

  const schemaContext = {
    recipe: "http://schema.org/Recipe",
    recipeIngredient: "http://schema.org/recipeIngredient",
  };

  const compacted = await jsonld.compact(JSON.parse(text), schemaContext);

  let ingredients = compacted.recipeIngredient;

  if (Array.isArray(compacted)) {
    ingredients = compacted["@graph"].filter(
      (item) => item["@type"] === "recipe"
    )[0].recipeIngredient;
  }

  await browser.close();
  res.json(ingredients);
};

module.exports = scrapeRecipe;
