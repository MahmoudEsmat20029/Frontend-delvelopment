import "./Navbar.css";
import { NavLink } from "react-router-dom";
import menu from "../../assets/menu.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import myPic from "../../assets/myPic.png";
import { useSidebar } from "../../Contexts/SidebarContext";

export default function Navbar() {
  const { setOpenSidebar } = useSidebar();

  function handleListOpen() {
    setOpenSidebar((prev) => !prev);
  }

  return (
    <nav>
      <div className="left-nav">
        <img src={menu} onClick={handleListOpen} />
        <NavLink to="/">
          <i className="fa-brands fa-youtube"></i>
        </NavLink>
        <h3>Youtube</h3>
      </div>

      <div className="middle-nav">
        <input type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="right-nav">
        <img src={upload} />
        <img src={more} />
        <img src={notification} />
        <img src={myPic} />
      </div>
    </nav>
  );
}
