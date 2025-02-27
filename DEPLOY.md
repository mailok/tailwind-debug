# Deployment Instructions

Follow these steps to deploy the Tailwind Debug Plugin to npm and GitHub:

## GitHub Repository Setup

1. Create a new GitHub repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/tailwind-debug-plugin.git
   git push -u origin main
   ```

2. Configure GitHub repository settings:
   - Enable issues
   - Add appropriate topics (tailwindcss, plugin, debug, etc.)
   - Add a description

## Building the Package

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the package:
   ```bash
   npm run build
   ```

3. Test the package locally:
   ```bash
   npm pack
   ```

## Publishing to npm

1. Create an npm account if you don't have one:
   ```bash
   npm adduser
   ```

2. Login to npm:
   ```bash
   npm login
   ```

3. Publish the package:
   ```bash
   npm publish
   ```

4. Update the package (for future versions):
   - Update the version in `package.json`
   - Run `npm publish`

## Setting Up GitHub Actions (Optional)

1. Create a `.github/workflows` directory:
   ```bash
   mkdir -p .github/workflows
   ```

2. Create a CI workflow file `.github/workflows/ci.yml`:
   ```yaml
   name: CI

   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 16
         - run: npm ci
         - run: npm run build
   ```

3. Create a publish workflow file `.github/workflows/publish.yml`:
   ```yaml
   name: Publish Package

   on:
     release:
       types: [created]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '16.x'
             registry-url: 'https://registry.npmjs.org/'
         - run: npm ci
         - run: npm run build
         - run: npm publish
           env:
             NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
   ```

## Creating Releases

1. Tag a new version:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. Create a new release on GitHub:
   - Go to your repository
   - Click on "Releases"
   - Click "Create a new release"
   - Select the tag
   - Add release notes
   - Publish release

## Updating Your Package

1. Make changes to your code
2. Update version in `package.json`
3. Commit changes
4. Create a new tag
5. Push to GitHub
6. Publish to npm 