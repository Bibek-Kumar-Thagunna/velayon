# Velayon - Personal Site (bibek.velayon.com)

Personal portfolio and professional site for Bibek Kumar Thagunna, showcasing production-grade systems built with Agentic AI.

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel

## Features

- 🎨 Premium UI with sophisticated animations
- 📱 Mobile-responsive design
- ⚡ 60fps GPU-accelerated animations
- ♿ Accessibility compliant (WCAG)
- 🎯 SEO optimized
- 🌓 Respects `prefers-reduced-motion`

## Project Structure

```
src/                    # Personal Site (bibek.velayon.com)
├── app/
├── components/
└── ...

company-preview/        # Company Site (velayon.com)
├── src/
│   ├── app/
│   └── ...

subdomain-example/      # App Site (attendify.velayon.com)
├── app/
└── ...
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deployment

This site is designed to be deployed on **Vercel** at `bibek.velayon.com`.

### Deploy to Vercel

1. Push to GitHub
2. Import repository to Vercel
3. Configure custom domain: `bibek.velayon.com`
4. Update GoDaddy DNS with Vercel CNAME

See [deployment guide](https://vercel.com/docs/deployments) for details.

## Environment Variables

The site works without payment variables and falls back to the purchase-request
form. To enable Paddle Checkout, copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_PADDLE_ENV=sandbox
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=test_your_client_side_token
NEXT_PUBLIC_PADDLE_PRICE_ID=pri_your_sandbox_price_id
PADDLE_WEBHOOK_SECRET=pdl_ntfset_your_sandbox_notification_secret
```

Use only a Paddle **client-side token** in `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`.
Never expose a Paddle API key or `PADDLE_WEBHOOK_SECRET`. The webhook URL is
`/api/paddle/webhook`; subscribe it to `transaction.completed` in Paddle.
When moving to Live, replace the Sandbox price, client-side token, and webhook
secret with separately created Live values and set
`NEXT_PUBLIC_PADDLE_ENV=production`.

## Performance

- ✅ Lighthouse Score: 90+ (Performance)
- ✅ First Contentful Paint: <1.5s
- ✅ Time to Interactive: <3.5s

## License

Private - All Rights Reserved

## Contact

**Bibek Kumar Thagunna**
- Website: [bibek.velayon.com](https://bibek.velayon.com)
- Email: bibek@velayon.com
- Company: [Velayon](https://velayon.com)
