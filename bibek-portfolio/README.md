# Bibek Kumar Thagunna — Personal Portfolio

Recovered personal portfolio for `bibek.velayon.com`. This app was restored from
commit `89b64a5`, the final portfolio version before the repository root became
the Velayon Dynamics company website.

## Local development

```bash
npm install
npm run dev
```

## Vercel deployment

Create or open the Vercel project that should serve `bibek.velayon.com`, then
configure these settings:

- Repository: the same `velayon` GitHub repository
- Production branch: `main`
- Root Directory: `bibek-portfolio`
- Framework preset: Next.js
- Build and output settings: use the Next.js defaults
- Domain: `bibek.velayon.com`

The company website at `velayon.com` should continue using the repository root
(`./`) as its Vercel Root Directory.
