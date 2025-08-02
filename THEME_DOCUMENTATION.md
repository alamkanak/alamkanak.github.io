# Linear.app Inspired Theme for Nuxt 3

This theme implements a comprehensive design system inspired by Linear.app's beautiful and modern interface. It provides a complete set of design tokens, utility classes, and components that work seamlessly in both light and dark modes.

## Features

- 🎨 **Complete Color System**: Primary, secondary, tertiary, neutral, success, warning, error, and info colors
- 🌗 **Dark Mode Ready**: Automatic theme switching with consistent design tokens
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🎯 **Semantic Design Tokens**: Never hardcode colors, spacing, or typography again
- ⚡ **Performance Optimized**: Built on Nuxt UI and Tailwind CSS
- 🔧 **Fully Customizable**: Easy to modify and extend

## Design Tokens

### Colors

The theme provides semantic color tokens that automatically adapt to light and dark modes:

#### Text Colors
- `text-dimmed` - Dimmed text (least prominent)
- `text-muted` - Muted text (secondary content)
- `text-toned` - Toned text (tertiary content)
- `text-default` - Default text (primary content)
- `text-highlighted` - Highlighted text (most prominent)
- `text-inverted` - Inverted text (for dark backgrounds)

#### Background Colors
- `bg-default` - Primary background
- `bg-muted` - Subtle background for less prominent areas
- `bg-elevated` - Elevated surfaces (cards, modals)
- `bg-accented` - Accented background for emphasis
- `bg-inverted` - Inverted background

#### Border Colors
- `border-default` - Default border color
- `border-muted` - Muted border color
- `border-accented` - Accented border color
- `border-inverted` - Inverted border color

#### Brand Colors
- `bg-primary`, `text-primary`, `border-primary` - Primary brand color
- `bg-secondary`, `text-secondary`, `border-secondary` - Secondary brand color
- `bg-success`, `text-success`, `border-success` - Success states
- `bg-warning`, `text-warning`, `border-warning` - Warning states
- `bg-error`, `text-error`, `border-error` - Error states
- `bg-info`, `text-info`, `border-info` - Informational states

### Typography

Use these classes for consistent typography:

```vue
<h1 class="linear-text-3xl font-bold text-highlighted">Large Heading</h1>
<h2 class="linear-text-2xl font-semibold text-highlighted">Medium Heading</h2>
<h3 class="linear-text-xl font-medium text-highlighted">Small Heading</h3>
<p class="linear-text-md text-default">Body text</p>
<span class="linear-text-sm text-muted">Caption text</span>
```

### Spacing

Use these spacing helpers for consistent layouts:

```vue
<div class="linear-space-xs">...</div>  <!-- space-y-1 -->
<div class="linear-space-sm">...</div>  <!-- space-y-2 -->
<div class="linear-space-md">...</div>  <!-- space-y-3 -->
<div class="linear-space-lg">...</div>  <!-- space-y-4 -->
<div class="linear-space-xl">...</div>  <!-- space-y-5 -->
```

## Component Classes

### Cards

```vue
<div class="linear-card">
  <!-- Basic card with default styling -->
</div>

<div class="linear-card-elevated">
  <!-- Elevated card with shadow -->
</div>
```

### Buttons

```vue
<button class="linear-button-primary">Primary Action</button>
<button class="linear-button-secondary">Secondary Action</button>
<button class="linear-button-ghost">Ghost Button</button>
```

### Inputs

```vue
<input class="linear-input" placeholder="Enter text..." />
```

## Nuxt UI Components

All Nuxt UI components automatically inherit the theme. Use them with semantic color props:

```vue
<UButton color="primary">Primary Button</UButton>
<UButton color="secondary">Secondary Button</UButton>
<UButton color="success">Success Button</UButton>
<UButton color="error">Error Button</UButton>

<UCard class="bg-elevated">
  <template #header>
    <h3 class="text-highlighted">Card Title</h3>
  </template>
  <p class="text-muted">Card content</p>
</UCard>

<UInput class="bg-default border-default text-default" />

<UBadge color="primary">Status</UBadge>
<UBadge color="success">Success</UBadge>
<UBadge color="warning">Warning</UBadge>
```

## Dark Mode

The theme automatically supports dark mode through Nuxt UI's color mode system:

```vue
<template>
  <div class="bg-default text-default">
    <!-- Content automatically adapts to dark mode -->
    <UColorModeButton />
  </div>
</template>
```

## Customization

### Modify Colors

To customize the color palette, edit the `@theme` section in `assets/css/main.css`:

```css
@theme {
  /* Customize primary color */
  --color-primary-500: #your-color;
  --color-primary-600: #your-darker-color;
  
  /* Add custom colors */
  --color-brand-500: #your-brand-color;
}
```

### Add Custom Color Aliases

In `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'brand', // Add your custom color
        // ... other colors
      ]
    }
  }
})
```

In `app.config.ts`:

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'blue',
      brand: 'rose', // Map to Tailwind color
    }
  }
})
```

### Extend Components

Customize Nuxt UI components globally:

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'font-semibold transition-all duration-200'
      }
    },
    card: {
      slots: {
        root: 'bg-elevated border border-default shadow-lg'
      }
    }
  }
})
```

## Best Practices

1. **Always use design tokens**: Never hardcode colors, use semantic tokens instead
2. **Leverage Nuxt UI components**: They're optimized and themed automatically
3. **Test in both modes**: Always check light and dark mode appearance
4. **Use semantic naming**: Choose color tokens based on meaning, not appearance
5. **Follow spacing system**: Use the predefined spacing scale for consistency

## Examples

### Hero Section
```vue
<section class="bg-default py-16">
  <div class="max-w-4xl mx-auto text-center px-6">
    <h1 class="linear-text-3xl font-bold text-highlighted mb-6">
      Welcome to My Portfolio
    </h1>
    <p class="linear-text-lg text-muted mb-8">
      Built with Linear.app inspired design system
    </p>
    <UButton color="primary" size="lg">Get Started</UButton>
  </div>
</section>
```

### Card Grid
```vue
<div class="grid gap-6 lg:grid-cols-3">
  <UCard v-for="item in items" class="linear-card-elevated">
    <template #header>
      <h3 class="font-semibold text-highlighted">{{ item.title }}</h3>
    </template>
    <p class="text-muted">{{ item.description }}</p>
    <template #footer>
      <UButton color="primary" variant="ghost">Learn More</UButton>
    </template>
  </UCard>
</div>
```

### Form Example
```vue
<form class="linear-space-lg max-w-md">
  <UInput 
    placeholder="Your name" 
    class="bg-default border-default" 
  />
  <UTextarea 
    placeholder="Your message" 
    class="bg-default border-default"
  />
  <UButton color="primary" type="submit" block>
    Send Message
  </UButton>
</form>
```

This theme gives you everything you need to build beautiful, consistent interfaces inspired by Linear.app's design excellence!
