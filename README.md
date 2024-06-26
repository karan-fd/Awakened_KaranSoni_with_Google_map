This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Keys need to be updated before using, please follow the following steps:

1. Visit Google Console Cloud [https://console.cloud.google.com]
2. Create ClientID and Client Secret, i.e. by creating a project and then creating new credentials under OAuth Client IDs
3. Enable Places API and Google Map Platform
4. Following that you will receive MAP_API_KEY.
5. Now add your website url and redirect URL '[domain]/api/auth/callback/google'
6. Update all received, i.e. Client ID, Client Secret and GOGGLE_MAP_API_KEY with your obtained key.

Below is .env example

GOOGLE_CLIENT_ID= obtainer client id here
GOOGLE_CLIENT_SECRET= obtained client secret here

GOOGLE_MAP_API_KEYS= obtained map api key here
NEXT_PUBLI_GOOGLE_MAP_API_KEYS= obtained map api key here

Great now follow these below steps.

For any queries find me at [https://linkedin.com/in/karan243] or mail me at 'sonik1486@gmail.com'

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
