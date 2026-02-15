import "./About.css";
import imag from "../../assets/img/Home/AboutUS/About_Us.webp";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className=" container py-5">
        <div className=" d-flex row">
          <div className="mainAbout col-lg-6 col-md-6 col-sm-6">
            <h1 className="titleAbout fw-bold">
              <span className="About"> من</span> نحن            </h1>
            <p className="p-1">
              تعمل شركة  Line Inعلى تقديم حلول ذكية وعملية لمعالجة مشكلة نقص مواقف السيارات والازدحام المروري. نركّز على تطوير أنظمة وخدمات تساهم في تحسين الحركة وتنظيم استخدام الأماكن العامة، بما ينعكس إيجابًا على المجتمع والأعمال.
            </p>
            <Link
              to="/about"
              className="btn-About border-0 rounded-1 px-2 py-1 text-white"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              عرض المزيد
            </Link>
          </div>
          <div className="About-img col-lg-6 col-md-6 col-sm-6">
            <img src={imag} className="rounded-2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
