import "./LebanonClients.css";
import image1 from "../../assets/img/Lebanon_Clients/2.webp";
import image2 from "../../assets/img/Lebanon_Clients/3.webp";
import image3 from "../../assets/img/Lebanon_Clients/4.webp";
import image4 from "../../assets/img/Lebanon_Clients/5.webp";
export default function LebanonClients() {
  return (
    <>
      <div className="clients-container">
        <div className="clients-header">
          <h2 className=" fw-bold">عملاء لبنان</h2>
          <span>الرئيسية / العملاء / عملاء لبنان</span>
        </div>
        <div className="clients-body my-4 text-center fw-bold">
          <ul className="clients-cards container w-75">
            <li className="card my-5">
              <img src={image1} alt="" />
              <p className=" my-1">Shawrma Akkar</p>
            </li>
            <li className="card my-5">
              <img src={image2} alt="" />
              <p className="my-1">Lebanon Coffee House</p>
            </li>
            <li className="card my-5">
              <img src={image3} alt="" />
              <p className="my-1">Camella</p>
            </li>
            <li className="card my-5">
              <img src={image4} alt="" />
              <p className="my-1">Sandwich & Half</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
