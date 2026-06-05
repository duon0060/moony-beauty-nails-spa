import React from "react";

export default function App() {
  const services = [
    {
      id: "mani",
      name: "Manicure",
      price: "$35+",
      desc: "Precision nail shaping, detail cuticle care, light hand massage, and high-shine polish finish.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3d1d4d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Finger outline */}
          <path d="M10 22V8a3 3 0 0 1 6 0v14" />
          {/* Thumbnail */}
          <path d="M11.5 8.5a1.5 1.5 0 0 1 3 0V12h-3V8.5z" />
          {/* Artistic accent swirl */}
          <path d="M6 16a3 3 0 0 1 3-3c1.5 0 2.5 1 2.5 2.5S10.5 18 9 18c-2 0-3-1.5-3-3.5A5.5 5.5 0 0 1 14.5 9" />
        </svg>
      ),
    },
    {
      id: "pedi",
      name: "Pedicure",
      price: "$50+",
      desc: "Relaxing hot herbal foot soak, exfoliating scrub therapy, nail grooming, and deep tissue massage.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3d1d4d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Toe silhouette line */}
          <path d="M12 22V7a2.5 2.5 0 0 1 5 0v15" />
          {/* Toenail */}
          <path d="M13.5 7.5a1 1 0 0 1 2 0V10h-2V7.5z" />
          {/* Foot contour lines & minor toe indicator */}
          <path d="M7 18c0-2.5 1.5-3.5 3-3.5M6 14.5A2.5 2.5 0 0 1 8.5 12c1 0 2 .5 2 2" />
        </svg>
      ),
    },
    {
      id: "art",
      name: "Nail Enhancements",
      price: "$65+",
      desc: "Full custom acrylics sets, UV gel extension systems, refills, and bespoke modern freehand nail artistry.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3d1d4d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Polish bottle body */}
          <rect x="8" y="10" width="8" height="11" rx="2" />
          {/* Bottle neck & cap */}
          <path d="M10 10V4h4v6" />
          {/* Fluid level accent line */}
          <path d="M8 15h8" strokeDasharray="1 1" />
          {/* Droplet/accent line right side */}
          <path d="M19 13v4M19 20h.01" />
        </svg>
      ),
    },
    {
      id: "wax",
      name: "Waxing",
      price: "$20+",
      desc: "Quick, ultra-clean hair removal treatments specifically structured for brows, lip care, and legs.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3d1d4d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Wax/oil drops structure */}
          <circle cx="9" cy="15" r="3" />
          <circle cx="15" cy="15" r="3" />
          {/* Lotus/vessel handle line above drops */}
          <path d="M6 9c3-2 5-2 8 0s5 2 8 0" />
          <path d="M12 4v3" />
        </svg>
      ),
    },
    {
      id: "pkg",
      name: "Spa Packages",
      price: "$110+",
      desc: "Combined custom relaxation therapies designed for deep mental unplugging and skin rehydration.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3d1d4d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Center bud */}
          <path d="M12 21a5 5 0 0 0 5-5c0-4-5-9-5-9s-5 5-5 9a5 5 0 0 0 5 5z" />
          {/* Left petal */}
          <path d="M12 12c-2-1-4.5-1-5.5.5S6.2 17 8.5 17c1.5 0 2.5-.5 3.5-1.5" />
          {/* Right petal */}
          <path d="M12 12c2-1 4.5-1 5.5.5s.3 4.5-2 4.5c-1.5 0-2.5-.5-3.5-1.5" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Top Desktop Banner Brand Container */}
      {/* Top Desktop Banner Brand Container */}
      <div className="bg-white py-4 text-center d-none d-md-block border-bottom">
        <h1 className="font-brand display-4 mb-0" style={{ color: "#3d1d4d" }}>
          Moony Beauty
        </h1>

        {/* The matched Nails & Spa row */}
        <div className="logo-accent-row my-1">
          {/* Left Accent Arm */}
          <div className="brand-divider-line divider-left">
            <div className="diamond-wrapper">
              <div className="diamond small"></div>
              <div className="diamond medium"></div>
              <div className="diamond large"></div>
            </div>
          </div>

          <span
            className="font-brand h4 mb-0"
            style={{ color: "#3d1d4d", letterSpacing: "0.05em" }}
          >
            Nails & Spa
          </span>

          {/* Right Accent Arm */}
          <div className="brand-divider-line divider-right">
            <div className="diamond-wrapper">
              <div className="diamond large"></div>
              <div className="diamond medium"></div>
              <div className="diamond small"></div>
            </div>
          </div>
        </div>

        <p
          className="text-muted text-uppercase mb-0 font-sans-ui fw-semibold mt-2"
          style={{ letterSpacing: "0.25em", fontSize: "0.7rem" }}
        >
          Relax. Rejuvenate. Renew.
        </p>
      </div>

      {/* Responsive Bootstrap Sticky Navbar */}
      <nav className="navbar navbar-expand-md bg-navbar-custom sticky-top shadow-sm py-2">
        <div className="container">
          {/* Mobile visible branding element */}
          {/* Mobile visible branding element */}
          <div className="d-md-none text-center">
            <span className="navbar-brand font-brand text-white mb-0 h3 d-block mx-0">
              Moony Beauty
            </span>

            <div
              className="logo-accent-row justify-content-start"
              style={{ marginTop: "-4px" }}
            >
              <div
                className="brand-divider-line divider-left"
                style={{
                  width: "40px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              >
                <div className="diamond-wrapper">
                  <div
                    className="diamond small"
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                  <div
                    className="diamond medium"
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                  <div
                    className="diamond large"
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                </div>
              </div>

              <span className="font-brand text-white-50 h6 mb-0">
                Nails & Spa
              </span>

              <div
                className="brand-divider-line divider-right"
                style={{
                  width: "40px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              >
                <div className="diamond-wrapper">
                  <div
                    className="diamond large"
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                  <div
                    className="diamond medium"
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                  <div
                    className="diamond small"
                    style={{ backgroundColor: "#fff" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler border-0 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center py-3 py-md-0 gap-3">
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#prices">
                  Pricing Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-grid d-md-block text-center mt-2 mt-md-0">
              <a href="#contact" className="btn btn-brand-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Responsive Hero Header Area */}
      {/* Responsive Full-Bleed Hero Header Area */}
      <header id="home" className="hero-bleed-container">
        {/* The layered blur and gradient transition */}
        <div className="hero-blur-overlay"></div>

        {/* Foreground Text Layer */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-12 col-md-7 col-lg-6 text-center text-md-start px-4 py-5">
              <span
                className="text-uppercase fw-bold mb-2 d-block small font-sans-ui"
                style={{ color: "#834d9b", letterSpacing: "0.2em" }}
              >
                Your Beauty, Our Passion
              </span>

              <h2
                className="display-4 fw-normal text-dark mb-1"
                style={{
                  color: "#3d1d4d",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                }}
              >
                BEAUTY <br className="d-none d-md-block" />
                BEGINS AT <br />
                YOUR FINGERTIPS
              </h2>

              {/* Small decorative accent line under header matching the wireframe */}
              <div className="my-3 d-none d-md-flex align-items-center gap-2">
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "#3d1d4d",
                    opacity: 0.4,
                  }}
                ></div>
                <div
                  className="diamond small"
                  style={{
                    backgroundColor: "#3d1d4d",
                    opacity: 0.4,
                    width: "4px",
                    height: "4px",
                    transform: "rotate(45deg)",
                  }}
                ></div>
                <div
                  style={{
                    width: "15px",
                    height: "1px",
                    backgroundColor: "#3d1d4d",
                    opacity: 0.4,
                  }}
                ></div>
              </div>

              <p
                className="text-muted fw-light mb-4 mt-3 mt-md-0"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  maxWidth: "420px",
                }}
              >
                Experience relaxation and perfection at{" "}
                <br className="d-none d-sm-block" /> Moony Beauty Nails & Spa.
              </p>

              <a
                href="#prices"
                className="btn btn-brand-dark px-4 py-2.5 shadow-sm font-sans-ui"
                style={{ borderRadius: "4px", fontSize: "0.85rem" }}
              >
                Book Appointment{" "}
                <span className="ms-1" style={{ fontSize: "0.75rem" }}>
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Fast Categories Grid */}
      <section id="services" className="bg-white px-4 py-5 mt-4 text-center">
        <span
          className="text-uppercase fw-bold text-muted small font-sans-ui"
          style={{ letterSpacing: "0.15em" }}
        >
          Our Services
        </span>
        <div
          className="mx-auto my-2"
          style={{ width: "40px", height: "2px", backgroundColor: "#834d9b" }}
        ></div>

        <div className="row g-4 justify-content-center mt-3">
          {services.map((item) => (
            <div key={item.id} className="col-6 col-md-2.5 col-lg px-2">
              <div className="bg-white border rounded p-4 h-100 shadow-sm d-flex flex-column align-items-center justify-content-center">
                {/* Renders the fine-line icon natively */}
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{ height: "45px" }}
                >
                  {item.icon}
                </div>
                <h6
                  className="text-uppercase fw-bold text-secondary mb-0"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}
                >
                  {item.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Pricing List Container */}
      <section
        id="prices"
        className="py-5"
        style={{
          backgroundColor: "#fcf6fd",
          borderTop: "1px solid #f0e4f5",
          borderBottom: "1px solid #f0e4f5",
        }}
      >
        <div className="container" style={{ maxWidth: "850px" }}>
          <div className="text-center mb-5">
            <span
              className="text-uppercase fw-bold small font-sans-ui"
              style={{ color: "#834d9b", letterSpacing: "0.2em" }}
            >
              Menu & Pricing
            </span>
            <h2 className="text-dark mt-1">Affordable Luxury Packages</h2>
            <div
              className="mx-auto mt-2"
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#3d1d4d",
              }}
            ></div>
          </div>

          <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm border border-light">
            {services.map((item) => (
              <div key={item.id} className="mb-4">
                <div className="d-flex justify-content-between align-items-end flex-wrap flex-sm-nowrap">
                  <div className="pe-2">
                    <h5
                      className="h6 fw-bold mb-1 text-dark text-uppercase"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {item.name}
                    </h5>
                    <p
                      className="text-muted fw-light mb-0 small"
                      style={{ maxWidth: "580px" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div className="price-dots d-none d-sm-block"></div>
                  <div
                    className="fw-bold fs-5 mt-1 mt-sm-0"
                    style={{
                      color: "#3d1d4d",
                      minWidth: "70px",
                      textAlign: "right",
                    }}
                  >
                    {item.price}
                  </div>
                </div>
                <hr className="text-black-10 opacity-5 mt-3 mb-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Block */}
      <section id="about" className="container py-5 my-4">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
              alt="Salon Environment"
              className="img-fluid rounded shadow-sm w-100 object-fit-cover"
              style={{ height: "320px" }}
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <span
              className="text-uppercase fw-bold text-muted small font-sans-ui"
              style={{ letterSpacing: "0.15em" }}
            >
              About Us
            </span>
            <h3 className="text-dark mt-2 mb-3">
              A Space to Relax, Refresh & Feel Beautiful
            </h3>
            <p
              className="text-muted fw-light mb-4"
              style={{ fontSize: "0.95rem", lineHeight: "1.7" }}
            >
              At Moony Beauty Nails & Spa, we strongly prioritize consistency
              and strict sanitization. Our treatment experts utilize top-tier
              organic polishes and tools to make sure you get the physical
              restoration you deserve.
            </p>
            <a
              href="#prices"
              className="text-uppercase small fw-bold text-decoration-none border-bottom pb-1 font-sans-ui"
              style={{ color: "#3d1d4d", letterSpacing: "0.1em" }}
            >
              View Service Lineup ›
            </a>
          </div>
        </div>
      </section>

      {/* --- GALLERY PREVIEW INTERACTIVE CAROUSEL --- */}
      <section id="gallery" className="py-5 bg-white">
        <div className="container text-center">
          <span
            className="text-uppercase fw-bold text-muted small font-sans-ui"
            style={{ letterSpacing: "0.15em" }}
          >
            Gallery Preview
          </span>
          <div
            className="mx-auto my-2"
            style={{ width: "40px", height: "2px", backgroundColor: "#834d9b" }}
          ></div>

          {/* Multi-Item Desktop & Single Item Mobile Carousel */}
          <div
            id="galleryCarousel"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner px-md-5">
              {/* Slide 1 (Active) */}
              <div className="carousel-item active">
                <div className="row g-3 justify-content-center">
                  <div className="col-12 col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1604654894610-df490651e0ae?auto=format&fit=crop&w=500&q=80"
                      alt="Manicure Display 1"
                      className="img-fluid rounded-3 w-100 object-fit-cover"
                      style={{ height: "220px" }}
                    />
                  </div>
                  <div className="col-12 col-md-4 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=500&q=80"
                      alt="Pedicure Display 1"
                      className="img-fluid rounded-3 w-100 object-fit-cover"
                      style={{ height: "220px" }}
                    />
                  </div>
                  <div className="col-12 col-md-4 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
                      alt="Salon Spa Environment"
                      className="img-fluid rounded-3 w-100 object-fit-cover"
                      style={{ height: "220px" }}
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row g-3 justify-content-center">
                  <div className="col-12 col-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&w=500&q=80"
                      alt="Nail Extension Art"
                      className="img-fluid rounded-3 w-100 object-fit-cover"
                      style={{ height: "220px" }}
                    />
                  </div>
                  <div className="col-12 col-md-4 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=500&q=80"
                      alt="Cosmetic Waxing Products"
                      className="img-fluid rounded-3 w-100 object-fit-cover"
                      style={{ height: "220px" }}
                    />
                  </div>
                  <div className="col-12 col-md-4 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
                      alt="Spa Relaxation Treatment"
                      className="img-fluid rounded-3 w-100 object-fit-cover"
                      style={{ height: "220px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev carousel-btn-custom ms-md-4"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-btn-custom me-md-4"
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="mt-4">
            <a
              href="#gallery"
              className="btn btn-outline-secondary font-sans-ui px-4 py-2 text-uppercase"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                borderRadius: "2px",
              }}
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* --- LOVED BY OUR CLIENTS INTERACTIVE CAROUSEL --- */}
      <section
        id="reviews"
        className="py-5"
        style={{ backgroundColor: "#fcf6fd", borderTop: "1px solid #f0e4f5" }}
      >
        <div
          className="container position-relative"
          style={{ maxWidth: "750px" }}
        >
          <div className="text-center mb-4">
            <span
              className="text-uppercase fw-bold small font-sans-ui"
              style={{ color: "#834d9b", letterSpacing: "0.2em" }}
            >
              Loved By Our Clients
            </span>
          </div>

          {/* Review Carousel Container */}
          <div
            id="reviewCarousel"
            className="carousel slide carousel-fade bg-white p-4 p-md-5 rounded-3 shadow-sm border border-light text-center"
            data-bs-ride="carousel"
          >
            {/* Star Rating Icons Graphic */}
            <div
              className="mb-3 text-warning fs-6"
              style={{ letterSpacing: "3px" }}
            >
              ★★★★★
            </div>

            <div className="carousel-inner">
              {/* Review Item 1 */}
              <div className="carousel-item active">
                <p
                  className="text-dark fw-normal px-4 px-md-5"
                  style={{
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    lineHeight: "1.6",
                  }}
                >
                  "The staff is amazing and so welcoming. My nails look
                  beautiful every time!"
                </p>
                <span
                  className="d-block text-muted text-uppercase font-sans-ui fw-semibold mt-3"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                >
                  — Jessica L.
                </span>
              </div>

              {/* Review Item 2 */}
              <div className="carousel-item">
                <p
                  className="text-dark fw-normal px-4 px-md-5"
                  style={{
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    lineHeight: "1.6",
                  }}
                >
                  "Such a relaxing experience! My nails are perfect and the
                  service is outstanding."
                </p>
                <span
                  className="d-block text-muted text-uppercase font-sans-ui fw-semibold mt-3"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                >
                  — Amanda P.
                </span>
              </div>

              {/* Review Item 3 */}
              <div className="carousel-item">
                <p
                  className="text-dark fw-normal px-4 px-md-5"
                  style={{
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    lineHeight: "1.6",
                  }}
                >
                  "The absolute cleanest salon space in Orleans! Deeply love
                  their signature pedicures."
                </p>
                <span
                  className="d-block text-muted text-uppercase font-sans-ui fw-semibold mt-3"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                >
                  — Sarah M.
                </span>
              </div>
            </div>

            {/* Carousel Arrow Navigation Buttons */}
            <button
              className="carousel-control-prev carousel-btn-custom"
              style={{ left: "-20px" }}
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-btn-custom"
              style={{ right: "-20px" }}
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Bottom Carousel Track Dot Indicators */}
            <div className="carousel-indicators review-indicators position-relative mb-0 mt-4">
              <button
                type="button"
                data-bs-target="#reviewCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#reviewCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#reviewCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="text-white pt-5 pb-4"
        style={{ backgroundColor: "#1d0c24" }}
      >
        <div className="container">
          <div className="row g-4 text-center text-md-start pb-4 border-bottom border-secondary border-opacity-25">
            <div className="col-md-4">
              <h4 className="font-brand text-white mb-0">Moony Beauty</h4>
              <p className="font-brand mb-3" style={{ color: "#b999c9" }}>
                Nails & Spa
              </p>
              <p className="text-white-50 fw-light small col-12 col-md-6">
                Relax. Rejuvenate. Renew.
                <br />
                We look forward to booking you for a true salon care upgrade.
              </p>
              <div
                className="d-flex justify-content-center align-items-center col-12 col-md-2"
                style={{ gap: 15 }}
              >
                <i className="bi bi-facebook "></i>
                <i className="bi bi-instagram "></i>
                <i className="bi bi-tiktok"></i>
              </div>
            </div>

            <div className="col-md-4">
              <h5
                className="text-uppercase fw-bold fs-6 mb-3 text-white font-sans-ui"
                style={{ letterSpacing: "0.1em" }}
              >
                Contact Us
              </h5>
              <p className="small text-white-50 mb-2">
                <i class="bi bi-telephone"></i> Phone:{" "}
                <strong>(613) 327-6177</strong>
              </p>
              <p className="small text-white-50 mb-0">
                <i class="bi bi-geo-alt"></i> Location:{" "}
                <strong>Orléans, Ottawa</strong>
              </p>
            </div>

            <div className="col-md-4">
              <h5
                className="text-uppercase fw-bold fs-6 mb-3 text-white font-sans-ui"
                style={{ letterSpacing: "0.1em" }}
              >
                Hours
              </h5>
              <div
                className="small text-white-50 mx-auto mx-md-0 font-sans-ui"
                style={{ maxWidth: "240px" }}
              >
                <div className="d-flex justify-content-between mb-1">
                  <span>Mon - Fri:</span> <span>10:00am - 7:30pm</span>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <span>Saturday:</span> <span>10:00am - 7:00pm</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Sunday:</span> <span>10:00am - 6:00pm</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4 small text-white-50 font-sans-ui"
            style={{ fontSize: "0.75rem" }}
          >
            <p className="mb-2 mb-sm-0">
              © 2026 Moony Beauty Nails & Spa. All Rights Reserved.
            </p>
            <div>
              <a
                href="#privacy"
                className="text-white-50 text-decoration-none me-3"
              >
                Privacy
              </a>
              <a href="#terms" className="text-white-50 text-decoration-none">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
