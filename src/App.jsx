import React from "react";
import PricingMenu from "./components/PricingMenu";
import {
  galleryImages,
  reviews,
  servicePrices,
  socialMedia,
} from "./data/data.jsx";

export default function App() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=1989+St+Joseph+Blvd,+Orleans,+ON+K1C+1E5";
  const bookingUrl =
    "https://www.dashbooking.com/salon/moony-beauty-nails-and-spa";

  const handleMapClick = () => {
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  const handleBookingClick = () => {
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  };

  const handleClickSocial = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  const googleReviewUrl =
    "https://search.google.com/local/writereview?placeid=ChIJTT-_6xcRzkwRbdOFGxWbKAo";

  return (
    <div>
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
              <a onClick={handleBookingClick} className="btn btn-brand-primary">
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
                Service prices{" "}
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
          {servicePrices.map((item) => (
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

      <PricingMenu services={servicePrices} />

      {/* Pricing List Container
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
      </section> */}

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
              Moony Beauty Nails & Spa is a welcoming oasis in Ottawa,
              conveniently located at 1989 St Joseph Blvd. Step into our clean,
              comfortable space for a relaxing break, routine nail care, or a
              fresh new look. Our team focuses on attentive, detail-oriented
              service tailored to your style—whether you love a classic finish
              or something bold and modern. Visit us today for a premium salon
              experience close to home!
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

          <div className="position-relative mt-4">
            {/* 1. MOBILE CAROUSEL (Shows 1 image at a time, displays ALL images) */}
            <div
              id="galleryCarouselMobile"
              className="carousel slide d-md-none"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {galleryImages.map((img, index) => (
                  <div
                    key={`mobile-${index}`}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="img-fluid rounded-3 w-100 object-fit-cover"
                      style={{ height: "250px" }}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile Controls */}
              <button
                className="carousel-control-prev carousel-btn-custom ms-1"
                type="button"
                data-bs-target="#galleryCarouselMobile"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next carousel-btn-custom me-1"
                type="button"
                data-bs-target="#galleryCarouselMobile"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* 2. DESKTOP CAROUSEL (Shows 3 images at a time, perfectly clickable) */}
            <div
              id="galleryCarouselDesktop"
              className="carousel slide d-none d-md-block px-md-5"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* Dynamically slice the array into groups of 3 */}
                {Array.from({
                  length: Math.ceil(galleryImages.length / 3),
                }).map((_, slideIndex) => {
                  const startIdx = slideIndex * 3;
                  const slideChunk = galleryImages.slice(
                    startIdx,
                    startIdx + 3,
                  );

                  return (
                    <div
                      key={`desktop-slide-${slideIndex}`}
                      className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                    >
                      <div className="row g-3 justify-content-center">
                        {slideChunk.map((img, imgIndex) => (
                          <div
                            key={`desktop-img-${imgIndex}`}
                            className="col-4"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="img-fluid rounded-3 w-100 object-fit-cover"
                              style={{ height: "250px" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop Controls */}
              <button
                className="carousel-control-prev carousel-btn-custom ms-md-4"
                type="button"
                data-bs-target="#galleryCarouselDesktop"
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
                data-bs-target="#galleryCarouselDesktop"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="btn btn-outline-secondary font-sans-ui px-4 py-2 text-uppercase"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                borderRadius: "2px",
              }}
              data-bs-toggle="modal"
              data-bs-target="#fullGalleryModal"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* --- FULL LOOKBOOK LIGHTBOX MODAL --- */}
      <div
        className="modal fade"
        id="fullGalleryModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div
            className="modal-content border-0 rounded-0 shadow-lg"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* Modal Header */}
            <div className="modal-header border-0 px-4 pt-4 pb-2 d-flex justify-content-between align-items-center">
              <div className="text-start">
                <span
                  className="text-uppercase fw-bold small d-block"
                  style={{
                    color: "#834d9b",
                    letterSpacing: "0.15em",
                    fontSize: "0.7rem",
                  }}
                >
                  Moony Beauty Portfolio
                </span>
                <h5
                  className="modal-title fw-normal mt-1"
                  style={{
                    fontFamily: "serif",
                    fontSize: "1.75rem",
                    color: "#3d1d4d",
                    letterSpacing: "0.03em",
                  }}
                >
                  Our Full Lookbook
                </h5>
                <div
                  className="mt-2"
                  style={{
                    width: "35px",
                    height: "1px",
                    backgroundColor: "#3d1d4d",
                  }}
                ></div>
              </div>
              <button
                type="button"
                className="btn-close rounded-circle p-2"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ filter: "brightness(0.2)" }}
              ></button>
            </div>

            {/* Modal Body with Elegant Gallery Grid */}
            <div className="modal-body p-4">
              <div className="row g-3">
                {galleryImages.map((img, index) => (
                  <div
                    key={`modal-gallery-${index}`}
                    className="col-12 col-sm-4 col-md-3"
                  >
                    <div
                      className="position-relative overflow-hidden gallery-modal-item"
                      style={{ height: "240px" }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="img-fluid w-100 h-100 object-fit-cover transition-all"
                        loading="lazy"
                      />
                      {/* Brand-matching Elegant Tint Overlay */}
                      <div className="gallery-item-overlay">
                        <div className="overlay-text-box">
                          <span
                            className="text-white text-uppercase small tracking-wider d-block mb-1"
                            style={{
                              fontSize: "0.65rem",
                              letterSpacing: "0.1em",
                            }}
                          >
                            {img.alt}
                          </span>
                          <div
                            className="mx-auto"
                            style={{
                              width: "20px",
                              height: "1px",
                              backgroundColor: "rgba(255,255,255,0.6)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
            className="carousel slide bg-white p-4 p-md-5 rounded-3 shadow-sm border border-light text-center"
            data-bs-ride="carousel"
          >
            {/* Star Rating Icons Graphic */}
            <div
              className="mb-3 text-warning fs-6"
              style={{ letterSpacing: "3px" }}
            >
              ★★★★★
            </div>

            <div className="carousel-inner" style={{ minHeight: 100 }}>
              {reviews.map((review, index) => (
                <div
                  key={review.customer || index}
                  /* FIXED: Only the first item gets the 'active' class natively */
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <p
                    className="text-dark fw-normal px-4 px-md-5"
                    style={{
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      lineHeight: "1.6",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {review.desc}
                  </p>
                  <span
                    className="d-block text-muted text-uppercase font-sans-ui fw-semibold mt-3"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                  >
                    {review.customer}
                  </span>
                </div>
              ))}
            </div>

            {/* Carousel Arrow Navigation Buttons */}
            <button
              className="carousel-control-prev carousel-btn-custom"
              style={{ left: "-20px", position: "absolute", zIndex: 5 }}
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
              style={{ right: "-20px", position: "absolute", zIndex: 5 }}
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
            {/* FIXED: Dynamically map dots so the count always matches your data length */}
            <div className="carousel-indicators review-indicators position-relative mb-0 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  type="button"
                  data-bs-target="#reviewCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>{" "}
          {/* FIXED: Added missing closing div for #reviewCarousel */}
        </div>{" "}
        {/* FIXED: Added missing closing div for .container */}
        <div className="text-center my-4">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn font-sans-ui text-uppercase px-4 py-2"
            style={{
              color: "#3d1d4d",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              borderRadius: "0px",
              border: "1px solid #3d1d4d",
              transition: "all 0.3s ease",
            }}
          >
            Leave Us A Google Review
          </a>
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
                {socialMedia.map((media) => (
                  <div
                    key={media.name}
                    onClick={() => handleClickSocial(media.link)}
                  >
                    <i className={`bi bi-${media.name}`}></i>
                  </div>
                ))}
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
                <i className="bi bi-telephone"></i> Phone:{" "}
                <strong>(613) 327-6177</strong>
              </p>
              <div
                onClick={handleMapClick}
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleMapClick();
                }}
                aria-label="Open 1989 St Joseph Blvd in Google Maps"
              >
                {" "}
                <p className="small text-white-50 mb-0">
                  <i className="bi bi-geo-alt"></i> Location:{" "}
                  <strong>Orléans, Ottawa</strong>
                </p>
              </div>
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
