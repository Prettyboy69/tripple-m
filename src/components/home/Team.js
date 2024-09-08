import React from "react";
import { socialIcons, team } from "../data/Data";
import { Link } from "react-router-dom";
import CommonHeading from "../common/CommonHeading";

export default function Teams() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Team"
            subtitle="Explore Our"
            title="Staffs"
          />
          <div className="row g-4">
            {team.map((item, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "350px",
                    maxHeight: "350px",
                    minHeight: "350px",
                  }}
                >
                  <div className="position-relative">
                    <img
                      className=""
                      src={item.image}
                      alt="img"
                      style={{
                        height: "200px",
                        maxHeight: "200px",
                        minHeight: "200px",
                        width: "100%",
                      }}
                    />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      {socialIcons.slice(0, 3).map((val, index) => (
                        <a
                          className="btn btn-square btn-primary mx-1"
                          href=""
                          key={index}
                        >
                          {val.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">{item.name}</h5>
                    <small>{item.designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
