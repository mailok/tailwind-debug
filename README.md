# Tailwind Debug Plugin

A Tailwind CSS plugin I made for myself 😅 that simplifies layout debugging by providing a shorthand syntax for borders. Instead of writing multiple classes like `border-2 border-red-500`, this plugin allows you to quickly visualize multiple layout elements with a single class like `debug` or `debug-{value}`.

## Installation

```bash
npm install tailwind-debug-plugin
# or
yarn add tailwind-debug-plugin
# or
pnpm add tailwind-debug-plugin
```

## Usage

Add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
  ],
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-debug-plugin'),
    // ...
  ],
}
```

## Features

### Basic Debug Utility

Use the `.debug` class to add a 2px red outline to any element:

```html
<div class="debug">
  This element will have a red outline to help with debugging.
</div>
```

### Customizable Debug Utilities

The plugin also provides a more flexible `debug-{value}` utility:

#### Outline Thickness

You can specify the thickness of the outline (0-19):

```html
<div class="debug-3">
  This element will have a 4px red outline (3+1).
</div>
```

#### Custom Colors and Shades

You can specify the color and shade from your Tailwind color palette:

```html
<div class="debug-2-blue-500">
  This element will have a 3px blue-500 outline.
</div>
```

The format is `debug-{thickness}-{color}-{shade}`, where:
- `thickness`: A number from 0-19
- `color`: Any color from your Tailwind color palette
- `shade`: Any shade from your Tailwind color palette for the specified color

## Examples

```html
<!-- Basic debug with default red outline -->
<div class="debug">Default red outline (2px)</div>

<!-- Custom thickness -->
<div class="debug-5">Thicker red outline (6px)</div>

<!-- Custom color and shade -->
<div class="debug-2-purple-600">Purple outline with custom thickness</div>
<div class="debug-0-green-300">Thin green outline</div>
<div class="debug-3-yellow-400">Yellow outline</div>
```

## License

MIT
