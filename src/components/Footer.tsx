const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-300">
          <p>
            &copy; 2025 FakeStore. อ่านบทความเต็มที่ :{' '}
            <a
              href="https://github.com/devahoy/mini-shop-nextjs-stripe-supabase"
              className="underline underline-offset-2"
              target="_blank"
            >
              ทำระบบเว็บขายของ ซื้อสินค้า ร้านค้าออนไลน์ ด้วย Next.js + Supabase
              + Stripe
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
