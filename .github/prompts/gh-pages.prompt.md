---
mode: agent
---
I want to publish this portfolio nuxt web app of mine to github pages. This repo is hosted in https://github.com/alamkanak/alamkanak.github.io

The github pages should be published in a `docs` folder in the repo.

This repo must run github actions so that any changes to the repo publishes latest artifacts to docs folder.

Write github actions for this.

Use #context7 for/before every piece of code you write

Also read the following documentations:

GitHub Pages
Deploy your Nuxt Application to GitHub Pages infrastructure.
Nuxt supports deploying to GitHub Pages with minimal configuration.

GitHub Pages only support static sites, Nuxt will pre-render your application to static HTML files.
If you are not using a custom domain, you need to set NUXT_APP_BASE_URL to your repository-slug for your build step.Example: https://<user>.github.io/<repository>/: NUXT_APP_BASE_URL=/<repository>/ npx nuxt build --preset github_pages
Setup
Follow the steps to create a GitHub Pages site.

Deployment
Here is an example GitHub Actions workflow to deploy your site to GitHub Pages using the github_pages preset:

.github/workflows/deploy.yml

# https://github.com/actions/deploy-pages#usage
name: Deploy to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: corepack enable
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      # Pick your own package manager and build script
      - run: npm install
      - run: npx nuxt build --preset github_pages
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./.output/public
  # Deployment job
  deploy:
    # Add a dependency to the build job
    needs: build
    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write      # to deploy to Pages
      id-token: write   # to verify the deployment originates from an appropriate source
    # Deploy to the github_pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    # Specify runner + deployment step
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4


GitHub Pages
Deploy Nitro apps to GitHub Pages.
Preset: github_pages

 Read more in GitHub Pages.
Setup
Follow the steps to create a GitHub Pages site.

Deployment
Here is an example GitHub Actions workflow to deploy your site to GitHub Pages using the github_pages preset:

.github/workflows/deploy.yml

# https://github.com/actions/deploy-pages#usage
name: Deploy to GitHub Pages

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: corepack enable
      - uses: actions/setup-node@v3
        with:
          node-version: "18"

      - run: npx nypm install
      - run: npm run build
        env:
          NITRO_PRESET: github_pages

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./.output/public

  # Deployment job
  deploy:
    # Add a dependency to the build job
    needs: build

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write      # to deploy to Pages
      id-token: write   # to verify the deployment originates from an appropriate source

    # Deploy to the github_pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    # Specify runner + deployment step
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
