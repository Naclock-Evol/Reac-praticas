const { test, expect } = require('@playwright/test')

const LOCALHOST_URL = 'http://localhost:5173/'
test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const images = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc  =  await images.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.length).toBeGreaterThan(0)
})
