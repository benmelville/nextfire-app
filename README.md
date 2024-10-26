This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.





# Notes

# Routes

### Static route
To create a basic route, you can either create a file with the name of the route or a directory followed by and index.js
file. These pages have a one to one relationship meaning one route points to one component.

### Dynamic route
Many different routes that may point to the same component. For example, as an admin a user can create and edit a post.
each post has a unique id and the user edits it by going to that post's slug in the browser. We need a dynamic route for
this. `admin/post-name-here`

We can create a route like this by wrapping the file name in `[]`. For example, `[slug].js`

### Directories

The same technique can be applied to directories. For example, see `[username]`. This means that any route we navigate
to beyond the route url will go to the username page. 

`localhost:3000/insert-anything-here` we will go to username page. 

Note: this does not conflict with the `enter` route. Next will automatically give preference to any routes that already 
exist in a static form. 

### useAuthState()

The `useAuthState()` hook provides an easy way to listen to the current user in firebase. When the user is signed in
it will be populated with the current user in firebase and when the user is signed out it will be null.