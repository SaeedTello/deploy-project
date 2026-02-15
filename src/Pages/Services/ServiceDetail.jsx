import { Link, useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === Number(id));
  const serviceText = service?.subject || "تفاصيل الخدمة ستتوفر قريبًا.";

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="service-detail-header">
          <h1>الخدمات</h1>
          <span>الرئيسية / الخدمات</span>
        </div>
        <div className="service-detail-main">
          <div className="service-detail-container">
            <p className="service-detail-text">الخدمة غير موجودة</p>
            <div className="service-detail-actions">
              <Link to="/services" className="news-read-more-btn back-btn">
                العودة للخدمات
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <h1>{service.title}</h1>
        <span>الرئيسية / الخدمات / {service.title}</span>
      </div>

      <div className="service-detail-main">
        <div className="service-detail-container">
          <img
            src={service.image}
            alt={service.title}
            className="service-detail-image"
          />
          <div className="service-detail-content">
            <p className="service-detail-text">{serviceText}</p>
            <div className="service-detail-actions">
              <Link to="/services" className="news-read-more-btn back-btn">
                العودة للخدمات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
