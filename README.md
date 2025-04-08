This is a simple Next project that generates dynamic Mini App Embed images.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%farcasterxyz%2Fmini-app-img)


## Getting Started

```
pnpm install
pnpm dev
```

```
http://localhost:3000/api/img?title=Title&description=Description
```

Create a dynamic image using query parameters or other data sources.

[Next Image Response docs](https://nextjs.org/docs/app/api-reference/functions/image-response)


Setup additional templates by adding directories + `route.ts` files under `app/img`:

```
app/img/other/route.ts ->  http://localhost:3000/api/img/other
```

[Next Project Structure docs](https://nextjs.org/docs/app/getting-started/project-structure)


## Caching

By default images will be served with a `Cache-Control: public, immutable,
no-transform, max-age=31536000` so that after one request images will be served
from the CDN. You can add another query parameter if you need to bust a cache.

If you want the image content to get regenerated more often use a shorter `max-age`.

For more information see the [Dynamic Mini App Embed images docs](https://miniapps.farcaster.xyz/docs/guides/sharing#dynamic-embed-images).

