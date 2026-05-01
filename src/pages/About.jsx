function About() {
  return (
    <section className="about-page page-space">
      <div className="about-hero">
        <div className="about-hero-content">
          <p className="about-label">ABOUT ZARA</p>
          <h1>Minimal fashion for modern living.</h1>
          
        </div>
      </div>

      <div className="container about-content">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>
            ZARA là thương hiệu thời trang hiện đại, tập trung vào thiết kế
              tối giản, chất lượng và trải nghiệm người dùng. Chúng tôi hướng đến
              những sản phẩm dễ phối, dễ mặc và phù hợp với nhiều phong cách sống.
            </p>
          </div>

          <div className="col-md-6">
            <img
              className="about-img"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
              alt="Fashion store"
            />
          </div>
        </div>

        <div className="about-video-section">
          <p className="about-label">BRAND VIDEO</p>
          <h2>Discover our collection</h2>

          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/9No-FiEInLA"
              title="Brand Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="row g-4 about-values">
          <div className="col-md-4">
            <h5>01. Minimal Design</h5>
            <p>Thiết kế đơn giản, tinh tế và dễ ứng dụng trong đời sống hằng ngày.</p>
          </div>

          <div className="col-md-4">
            <h5>02. Quality First</h5>
            <p>Tập trung vào chất lượng sản phẩm và cảm giác thoải mái khi sử dụng.</p>
          </div>

          <div className="col-md-4">
            <h5>03. Easy Styling</h5>
            <p>Giúp người dùng phối đồ nhanh hơn, gọn hơn và tự tin hơn.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;