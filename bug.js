```javascript
// ... your Tailwind CSS classes ...
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <p>This is some text.</p>
</div>
```

This code might produce unexpected results or no visual changes if you have made changes to your `tailwind.config.js` file (like adding new colors or changing the theme) but haven't run the `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` command (or your equivalent build process) to rebuild your CSS file.  Tailwind only generates the CSS classes that are actually used in your project.  If you don't re-build after config changes, the new classes won't be available.