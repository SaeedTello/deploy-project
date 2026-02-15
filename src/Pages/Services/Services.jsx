import "./Services.css";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import angel from "../../assets/img/Services/angel.svg";
import { servicesData } from "../../data/servicesData";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <div className="services-body">
        <div className="services-header text-white">
          <h2>الخدمات</h2>
          <span>الرئيسية/الخدمات</span>
        </div>
        <div className="cards-services my-5">
          <ul className="cards ">
            {servicesData.map((service, index) => (
              <Fragment key={service.id}>
                <li
                  className="card services-card w-50 p-0 text-center"
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <img src={service.image} alt={service.title} />
                  <div className="srevices-card-budy">
                    <h5 className="fw-bold my-3">{service.title}</h5>
                    <p className="mx-2 fw">{service.subject}</p>
                    <img src={angel} className="angelSvg" alt="" />
                  </div>
                </li>
                {index < servicesData.length - 1 && (
                  <div className="portfolio-border w-50"></div>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
