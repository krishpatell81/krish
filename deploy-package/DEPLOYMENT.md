# Micro E-commerce - Netlify Deployment Guide

This package contains all the necessary files for deploying your Micro E-commerce application to Netlify.

## Manual Deployment Steps

1. Go to [Netlify.com](https://www.netlify.com/) and sign up/login
2. Click on "Sites" and then "Add new site" > "Deploy manually"
3. Drag and drop this entire folder (deploy-package) to the upload area
4. Wait for the upload to complete and the site to deploy

## Configure Environment Variables

After deployment, you need to configure these environment variables:

1. Go to Site settings > Environment variables
2. Add the following variables:
   ```
   DATABASE_URL=your_production_database_url
   NEXTAUTH_SECRET=your_auth_secret
   NEXTAUTH_URL=https://your-netlify-url.netlify.app
   ```

## What's Included

- `.next/`: The built Next.js application
- `public/`: Static assets
- `package.json`: Dependencies information
- `next.config.mjs`: Next.js configuration
- `netlify.toml`: Netlify deployment configuration

## Troubleshooting

If you encounter issues with the deployment:

1. Check that all files were uploaded successfully
2. Verify that your environment variables are set correctly
3. Check the Netlify deployment logs for errors
4. Make sure your database is accessible from Netlify's servers 