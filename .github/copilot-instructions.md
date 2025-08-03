## Tech stack
- Vue 3
- Nuxt 4
- Tailwind CSS
- @nuxt/ui
- @nuxt/icon
- @nuxt/image
- @nuxt/fonts
- pinia

## Must follow practices
1. Use https://linear.app like design and components for frontend.
2. Use tailwind CSS for styling. Do not write custom CSS.
3. Support both light and dark mode.
4. Use a responsive design that works on both desktop and mobile.
5. UI must use theme from @nuxt/ui library to ensure consistency across the app and easily changeable theme.
6. Do not write duplicate components. Separate multiple use sections into components.
7. If an existing component is available like AppButton, use that one instead of <button>.
8. Secrets should come from the environment variables.
9. Components do not need importing as nuxt auto imports components from components directory. Also components naming include directory names. Example, `components/atoms/AppButton.vue` can be used as `<AtomsAppButton>` in the templates. For example, below 2 component files resolves to the same name ProfileFormUserDetails:
    - components/profile/form/UserDetails.vue
    - components/profile/ProfileFormUserDetails.vue
10. All pages should be SEO optimized.
11. Use fonts using @nuxt/fonts library.
12. Do not use javascript. Use typescript instead.
13. Write typesafe code. Use types for all variables, functions, and components.
14. Use Nuxt 4 and Vue 3 best practices everywhere.
15. Use yarn instead of npm.
16. Use icons available in @nuxt/icon instead. See more details at Context7 with project id `/nuxt/icon`. Do not install any new icons library.
17. For icons, do not use tailwind size classes. Icon components have size prop for this. Example: `size="1em"`.
18. Use components from @nuxt/ui library as much as possible.
19. Any place where a network request is being made, ui must show a loading state with animation.
20. Any frontend code should not hardcode color, border radius, border width, font size, font family etc. They are all defined in main.css as theme. Use the theme variables from main.css for these values. Example: `bg-primary, text-muted` etc.
21. Use the current theme (inspired by linear.app) for the whole site. The theme is defined in `assets/css/main.css`, `nuxt.config.ts`, and `app/app.config.ts` file. If necessary, update the theme instead of hardcoding styles in components.