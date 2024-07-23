import './TopBar.css';
import {Link} from "react-router-dom";

const TopBar = () => {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
          <ul className="topList">
            <li className="topListItem">
              <Link className='link' to="/">Home</Link>
            </li>
            <li className="topListItem">
            <Link className='link' to="/about">ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link className='link' to="/contact">CONTACT</Link>
            </li>
            <li className="topListItem">
            <Link className='link' to="/write">WRITE</Link>
            </li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className='topRight'>
          {user ? (
             <img className='topImg' src="https://th.bing.com/th/id/OIP.9k_GOA2TNHH70WjDdav4owAAAA?rs=1&pid=ImgDetMain" alt="" />
          ):(
            <ul className='topList'>
              <li className='topListItem'>
            <Link className='link' to="/login">LOGIN</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/register">REGISTER</Link>
            </li>
            </ul>
          )}
         
          <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar;
