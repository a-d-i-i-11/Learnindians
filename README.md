# LearnIndians - Fast Career Certifications

LearnIndians is a mobile-first prototype for a fast career certification platform.

## What is included

- Premium landing page for "Fast Career Certifications"
- 10 launch courses from the project brief
- Course catalog with category filters
- Supabase-ready email/password login
- Admin role login protection
- Supabase-ready progress storage
- Supabase-ready certificate storage and public verification lookup
- Manual UPI QR/link checkout and admin verification flow
- Swipe-style micro-learning lesson flow
- Quick quiz unlock system
- Progress dashboard
- Professional certificate view
- Verification page with certificate ID and verification URL
- Admin preview dashboard
- Dark and light mode
- Responsive mobile-first layout
- About page
- Contact page
- Terms & Conditions page
- Privacy Policy page
- Refund & Cancellation Policy page
- Payment-gateway review readiness section

## Brand settings

- Platform name: LearnIndians
- Tagline: Learn Fast. Get Certified.
- Issuer: LearnIndians Academy
- Certification board: LearnIndians Certification Board
- Company: Hirenix group Pvt Ltd
- Signature: Adnan Maqbool
- Support email: info@hirenix.co
- Payment gateway direction: Manual UPI verification now, Cashfree/PayU later
- Currency: INR
- Pricing: ₹49 per course, ₹199 monthly unlimited access
- Future domains: learnindians.in, learnindians.com, getlearnindians.com
- Temporary deployment direction: Vercel free URL first, custom domain later

## How to open

Open `index.html` in a browser.

## Before payment gateway submission

Deploy the app to Vercel and use the free Vercel URL as the first website URL during onboarding. Before final submission, add the real business address, phone number, GST/company details if available, and connect the custom domain after purchase.

## Supabase setup for real login and data

1. Create a free project at Supabase.
2. Open the Supabase SQL Editor.
3. Run everything inside `SUPABASE_SETUP.sql`.
4. Open Supabase Project Settings, then API.
5. Copy the Project URL and anon public key.
6. Paste them into `config.js`:

```js
window.LI_CONFIG = {
  supabaseUrl: "YOUR_PROJECT_URL",
  supabaseAnonKey: "YOUR_ANON_PUBLIC_KEY",
  adminEmails: ["info@hirenix.co"],
};
```

7. Redeploy to Vercel.
8. Create your admin account on the live site using `info@hirenix.co`.
9. In Supabase SQL Editor, run:

```sql
update public.profiles set role = 'admin' where email = 'info@hirenix.co';
```

After this, users can create real accounts and their progress/certificates will be stored in Supabase.

## Payment note

The current checkout uses a manual UPI verification flow. The user scans the UPI QR or opens the UPI app, pays the course fee, enters the UTR/reference number, and waits for admin approval. Admin approval unlocks the course.

Before going live, replace the placeholder UPI ID in `app.js`:

```js
upiId: "learnindians@upi",
```

Real automatic verification later needs Cashfree/PayU server-side payment initiation and webhook verification.

## Production integrations to add later

- Next.js app structure
- Supabase or Firebase authentication
- PostgreSQL course/progress/certificate tables
- Manual UPI payment request verification
- Cashfree or PayU payments with backend verification
- Real PDF certificate rendering
- Real QR code generation
- Admin content editor
- Vercel deployment
