# FNF Legal App

Front end app to render data returned from Strapi Api.

### Home Page

![alt text](home.jpg?raw=true)

### Journeys

![alt text](home-journeys.jpg?raw=true)

### Steps 

![alt text](home-steps.jpg?raw=true)


## Quickstart

Make sure that the local Strapi server is still running at http://localhost:1337. Inside the Next.js app directory, run:

```bash
npm install
npm run dev
```

App will run on  http://localhost:3000/



## How to setup

### Step 1. Set up Strapi locally

[Follow the instructions on this page](https://strapi.io/documentation/v3.x/installation/cli.html) to create a Strapi project locally.

```bash
npx create-strapi-app my-project --quickstart
npm run develop
```

This will open http://localhost:1337/ and prompt you to create an admin user.

### Step 2. Install GraphQL for Strapi

Inside the Strapi directory, stop the server, [install GraphQL](https://strapi.io/documentation/v3.x/plugins/graphql.html), and restart the server:

```bash
npm run strapi install graphql

npm run develop
```

### Step 3. Set up environment variables

While the Strapi server is running, open a new terminal and `cd` into the Next.js app directory you created earlier.

```
cd fnf-legal-app
```

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `STRAPI_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).
- `NEXT_PUBLIC_STRAPI_API_URL` should be set as `http://localhost:1337` (no trailing slash).

### Step 4. Run Next.js in development mode

Make sure that the local Strapi server is still running at http://localhost:1337. Inside the Next.js app directory, run:

```bash
npm install
npm run dev
```


### Step 5. Deploy on Vercel (Optional)

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

