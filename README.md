## Mini Shop

ตัวอย่างการใช้ Next.js + Stripe + Supabase อ่านบทความเพิ่มเติม : https://www.devahoy.com/blog/2025/e-commerce-web-with-nextjs-supabase-stripe

![Screenshot](/demo/next-supabase-stripe.png)

## วิธีการใช้งาน

ติดตั้ง dependencies

```bash
npm install
```

รัน server บน local

```bash
npm run dev
```

สร้างไฟล์ `.env` ขึ้นมาโดย copy จากไฟล์ `.env.example` จากนั้นใส่ค่าจาก supabase และ stripe

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

สร้าง Product ลงไปใน stripe และ supabase โดยดึงข้อมูล mock จาก Fake Store API

```bash
npx tsx src/lib/create-stripe-products.ts
```

## Stripe webhook บนเครื่อง local

```bash
stripe listen --forward-to localhost:3000/api/stripe-webhooks
```

ลอง trigger event

```bash
stripe trigger <event_name>
```
