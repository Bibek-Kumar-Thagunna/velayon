# 🚀 Quick Start: Deploy bibek.velayon.com NOW

## 5-Minute Deployment Guide

### Prerequisites
- GitHub account
- Vercel account (free)
- GoDaddy account (you already have velayon.com)

---

## Step 1: Push to GitHub (2 minutes)

```bash
cd /home/sybar/velayon

# Initialize git if not already done
git init
git branch -M main

# Stage all files
git add .

# Commit
git commit -m "Production ready: bibek.velayon.com"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/bibek-velayon.git
git push -u origin main
```

**✅ Checkpoint:** Code is on GitHub

---

## Step 2: Deploy to Vercel (1 minute)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `bibek-velayon` repo
5. Click "Deploy" (use all defaults)

**✅ Checkpoint:** Site live at `your-project.vercel.app`

---

## Step 3: Add Custom Domain (1 minute)

1. In Vercel → Settings → Domains
2. Add: `bibek.velayon.com`
3. Vercel shows: "Add CNAME record"
4. Copy the instructions (keep tab open)

---

## Step 4: Configure GoDaddy DNS (1 minute)

1. Go to https://dnsmanagement.godaddy.com
2. Find `velayon.com`
3. Click "Add" → Select "CNAME"
4. Fill in:
   - Name: `bibek`
   - Value: `cname.vercel-dns.com`
   - TTL: `600`
5. Save

**✅ Checkpoint:** DNS configured

---

## Step 5: Wait & Verify (10-30 minutes)

DNS propagation takes 10-30 minutes. Then:

1. Visit: https://bibek.velayon.com
2. Verify HTTPS (SSL) works
3. Test /resume page
4. Test on mobile

**✅ DEPLOYMENT COMPLETE!**

---

## Immediately After Deployment

### Add Resume PDF
```bash
# Add your resume PDF
cp ~/path/to/your-resume.pdf /home/sybar/velayon/public/bibek-thagunna-resume.pdf

git add public/bibek-thagunna-resume.pdf
git commit -m "Add resume PDF"
git push
```

Vercel auto-deploys in 30 seconds.

### Update LinkedIn
Add `bibek.velayon.com` to your LinkedIn profile → Website

### Start Applying
Include in job applications:
"Portfolio: https://bibek.velayon.com"

---

## Troubleshooting

**Q: Domain not working after 1 hour?**  
A: Check GoDaddy DNS for typos. Verify Vercel domain shows green checkmark.

**Q: SSL certificate error?**  
A: Wait 10 more minutes. Vercel auto-provisions SSL.

**Q: Resume page 404?**  
A: Check build logs in Vercel. Ensure commit was pushed.

---

## Next Steps

1. **This Week:** Apply to 30 remote jobs with new site
2. **Week 2-3:** Build velayon.com (company site)
3. **Month 2:** Polish Attendify → launch as SaaS

See `deployment_checklist.md` for full details.
See `velayon_strategic_roadmap.md` for business strategy.

---

**Ready to deploy? Run Step 1 now!**
