# Local Preview Guide

## Overview

You now have three sites to preview locally:

1. **bibek.velayon.com** (Personal) - Port 3001 - `/home/sybar/velayon`
2. **velayon.com** (Company) - Port 3002 - `/home/sybar/velayon/company-preview`
3. **attendify.velayon.com** (Subdomain) - Port 3003 - `/home/sybar/velayon/subdomain-example`

## Running All Sites Locally

### Terminal 1: bibek.velayon.com (Personal Site)
```bash
cd /home/sybar/velayon
npm run dev
# Runs on http://localhost:3001
```
**This is ALREADY RUNNING** - just visit http://localhost:3001

### Terminal 2: velayon.com (Company Site)
```bash
cd /home/sybar/velayon/company-preview
npm install
npm run dev -- -p 3002
# Runs on http://localhost:3002
```

### Terminal 3: attendify.velayon.com (Subdomain Example)
```bash
cd /home/sybar/velayon/subdomain-example
npm install
npm run dev -- -p 3003
# Runs on http://localhost:3003
```

## Quick Preview (One Command Per Site)

### Personal Site (Already Running)
```bash
# Already at http://localhost:3001
# Just open browser
```

### Company Site
```bash
cd /home/sybar/velayon/company-preview && npm install && npm run dev -- -p 3002
```

### Subdomain Example
```bash
cd /home/sybar/velayon/subdomain-example && npm install && npm run dev -- -p 3003
```

## Comparison: What's Different?

| Feature | bibek.velayon.com | velayon.com | attendify.velayon.com |
|---------|-------------------|-------------|----------------------|
| **Focus** | Personal hiring | Company brand | Product demo |
| **Name** | Bibek Kumar Thagunna | VELAYON | Attendify by Velayon |
| **Hero CTA** | Resume, Get in Touch | View Products | Start Free Trial |
| **Content** | Your projects | Company products | App features |
| **Tone** | Professional individual | Institutional | Product-focused |

## After Previewing

Once you've reviewed all three sites:
1. Make any adjustments
2. Follow DEPLOY.md to deploy bibek.velayon.com first
3. Deploy company site later (Week 2-3)
4. Deploy subdomain when product is ready
