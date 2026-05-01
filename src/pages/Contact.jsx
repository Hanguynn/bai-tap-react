function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Gửi lời nhắn thành công!");
    e.target.reset();
  };

  return (
    <section className="container page-space">
      <h1>Liên hệ</h1>

      <div className="row mt-4">
        <div className="col-md-5">
          <h5>Thông tin cửa hàng</h5>
          <p>Email: sewisme012gmail.com</p>
          <p>Hotline: (+84) 855 899 356</p>
          <p>Địa chỉ: Ho Chi Minh City, Vietnam</p>
        </div>

        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Họ và tên</label>
              <input className="form-control" type="text" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Lời nhắn</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>

            <button className="btn btn-dark" type="submit">
              Gửi lời nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;