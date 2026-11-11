# The Daily Grind - Express Server(lab-12.1)

A simple web server for "The Daily Grind" coffee shop built with Node.js and Express.

---

## What Changed: CommonJS to ES Modules

* Started with default CommonJS (`require`).
* Added `"type": "module"` to `package.json` to use modern `import` syntax.
* Replaced `require()` with `import express from "express"`.
* In ES Modules, `__dirname` is not available by default, so it was recreated using `fileURLToPath` and `import.meta.url` to keep file paths working.

---

## Reflection Questions
# 1. Difference between res.send() and res.sendFile()?
 res.send(): Sends plain text, small strings, or simple HTML snippets.

res.sendFile(): Reads an actual file from disk (like an .html file) and sends the entire file to the browser.

# 2. Why is the path module necessary when serving files?
Relative paths (like 'public/index.html') depend on where you ran the terminal command from and can easily break. path.join(__dirname, ...) creates a reliable absolute path that works across Windows, Mac, and Linux regardless of where the server is launched.

# 3. How would you add a third page (like a menu page)?
Create a menu.html file inside the public/ folder.

In server.js, add a new GET route:

JavaScript
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});