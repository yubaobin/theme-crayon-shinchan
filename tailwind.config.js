/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind'
import typography from '@tailwindcss/typography'
export const content = ['./templates/**/*.html', './src/main.ts']
export const theme = {
  extend: {}
}
export const plugins = [
  typography,
  addDynamicIconSelectors()
]
export const safelist = [
  'prose-sm',
  'prose-base',
  'prose-lg',
  'prose-xl',
  'prose-2xl',
  'prose-gray',
  'prose-slate',
  'prose-zinc',
  'prose-neutral',
  'prose-stone'
]
