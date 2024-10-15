// @ts-check
import { test, expect } from '@playwright/test'

test('Si me dirije a la página de gifs', async ({ page }) => {
  await page.goto('http://localhost:5173/buscador-de-gifs/')
  await page.getByPlaceholder('Introdusca el gif').click()
  await page.getByPlaceholder('Introdusca el gif').fill('hola')
  await page.getByRole('button', { name: 'Buscar' }).click()
  await expect(page).toHaveURL('http://localhost:5173/buscador-de-gifs/hola/g/en')
})
