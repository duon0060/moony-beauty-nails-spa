import React, { useState } from "react";
import { serviceCategories } from "../data/data";

export default function PricingMenu({ services }) {
  const [activeTab, setActiveTab] = useState("manicure");

  // Filter items based on selected tab
  const filteredServices = services.filter(
    (item) => item.category === activeTab,
  );

  return (
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
        {/* Header Section */}
        <div className="text-center mb-4">
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

        {/* --- Category Tabs Navigation --- */}
        <div
          className="chip-scroll d-flex flex-nowrap gap-2 overflow-auto pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`btn btn-sm rounded-pill flex-shrink-0 fw-bold ${
                activeTab === category.id
                  ? "text-white"
                  : "bg-transparent text-muted"
              }`}
              style={{
                backgroundColor:
                  activeTab === category.id ? "#3d1d4d" : "transparent",
                border:
                  activeTab === category.id
                    ? "none"
                    : "1px solid rgba(0,0,0,.15)",
                padding: "8px 18px",
                letterSpacing: "0.05em",
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* --- Menu Items Container --- */}
        <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm border border-light">
          {filteredServices.length === 0 ? (
            <p className="text-center text-muted my-4">
              No items available in this category.
            </p>
          ) : (
            filteredServices.map((item) => (
              <div key={item.id} className="mb-4">
                <div className="d-flex justify-content-between align-items-end ">
                  <div className="pe-2">
                    <h6
                      className="h6 fw-bold mb-1 text-dark"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {item.name}
                    </h6>
                    <p
                      className="text-muted fw-light mb-0 small"
                      style={{ maxWidth: "580px", fontSize: 12 }}
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
