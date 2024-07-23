import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';

const Settings = () => {
  return (
    <div className='settings'>
       <div className="settingsWrapper">
         <div className="settingsTitle">
           <span className="settingsUpdateTitle">Update your Account</span>
           <span className="settingsDeleteTitle">Delete Account</span>
         </div>
         <form action="" className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://th.bing.com/th/id/OIP.QsTutY1xuuPz2zEUge8wKAHaEK?rs=1&pid=ImgDetMain" alt="" />
              <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-regular fa-user"></i>
              </label>
              <input type="text" id='fileInput' style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='Safak' />
            <label>Email</label>
            <input type="email" placeholder='safak@gmail.com' />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>

         </form>
       </div>
       <Sidebar/>
    </div>
  )
}

export default Settings;