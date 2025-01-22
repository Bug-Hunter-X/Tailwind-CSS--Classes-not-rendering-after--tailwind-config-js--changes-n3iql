# Tailwind CSS: Classes not rendering after `tailwind.config.js` changes

This repository demonstrates a common issue where changes in your `tailwind.config.js` file don't immediately reflect in your application's styling.

## The Problem

After modifying the Tailwind configuration (`tailwind.config.js`),  new or modified CSS classes might not be applied in your HTML. This happens because Tailwind's JIT (Just-In-Time) mode only compiles CSS classes used within your templates.  If you add a new color or modify existing ones,  it doesn't automatically update the CSS file unless you trigger a rebuild.

## Steps to Reproduce

1. Clone this repo.
2. Make changes to `tailwind.config.js` (e.g., add a new color palette).
3. Observe that the changes do not appear in the browser even after refreshing.

## Solution

Rebuild your CSS using the Tailwind CLI.  The exact command depends on your setup but will typically involve `npx tailwindcss`. Refer to the solution file for more details.

## Note

Ensure you've correctly configured Tailwind in your project. This problem is typically due to a lack of the rebuild step, not an inherent Tailwind bug.