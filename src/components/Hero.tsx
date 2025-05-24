const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            แต่งเติมเรื่องราวในสไตล์คุณ
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            ร้านค้าตัวอย่างของคุณ
            สำหรับเลือกชมเสื้อผ้าและเครื่องประดับหลากหลายสไตล์
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            ช็อปเลย
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
