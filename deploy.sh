#!/bin/bash

# Build the React app
echo "Building React app..."
npm run build

# Create a simple index.html for GitHub Pages
echo "Creating GitHub Pages index.html..."
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shivam Tiwari - ML Engineer & Cloud Solutions Architect</title>
    <meta name="description" content="Portfolio of Shivam Tiwari - Machine Learning Engineer specializing in AI/ML solutions, GCP, Python, and end-to-end AI deployment." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

echo "Deployment files ready!"
echo "To deploy:"
echo "1. Install Node.js from https://nodejs.org/"
echo "2. Run: npm install"
echo "3. Run: npm run build"
echo "4. Copy the 'dist' folder contents to your GitHub Pages"
