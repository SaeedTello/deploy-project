import './HomeTitle.css'
import { Link } from "react-router-dom";

export default function HomeTitle() {
  return (
    <>
      <div className='home-title-container text-center text-white'>
        <div>
        <p className='m-autoo home-title-kicker'>WE WILL TAKE YOUR BUSNISEE</p>
        <h1 className='m-autoo home-title-main'>TO THE NEXT LEVEL</h1>
        <p className='m-autoo home-title-sub'>We combine experience, talent and fast thinking</p>
        </div>
        <div className=' d-flex getInTouchBtn'>
            <button className='btn btn-1 py-3 me-1'>GET IN TOUCH</button>
            <Link to="/about" className='btn btn-2 ms-1 py-3'>MORE INFO</Link>
        </div>
      </div>
    </>
  )
}
