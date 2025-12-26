import "./Sidebar.css";
import Home from "../../../../assets/home.png";
import Gaming from "../../../../assets/game_icon.png";
import Automobilies from "../../../../assets/automobiles.png";
import Sports from "../../../../assets/sports.png";
import Entertainment from "../../../../assets/entertainment.png";
import Technology from "../../../../assets/tech.png";
import Music from "../../../../assets/music.png";
import Blogs from "../../../../assets/blogs.png";
import News from "../../../../assets/news.png";
import myPic from "../../../../assets/myPic.png";
import { useSidebar } from "../../../../Contexts/SidebarContext";
import { useCategory } from "../../../../Contexts/CategoryContext";

const data = [
  [0, "Home", Home],
  [20, "Gaming", Gaming],
  [2, "Automobilies", Automobilies],
  [17, "Sports", Sports],
  [24, "Entertainment", Entertainment],
  [28, "Technology", Technology],
  [10, "Music", Music],
  [22, "Blogs", Blogs],
  [25, "News", News],
];

export default function Sidebar() {
  const { openSidebar } = useSidebar();
  const { category, setCategory } = useCategory();

  return (
    <div className={`sidebar ${openSidebar ? "activated" : ""}`}>
      {/* Map => Array of Object */}
      {data.map(([id, name, pic]) => (
        <div
          key={id}
          onClick={() => setCategory(id)}
          className={`sidebar-section ${category === id ? "active" : ""}`}
        >
          <img src={pic} alt={name} />
          <p>{name}</p>
        </div>
      ))}

      <hr />

      <h6>Subscribed</h6>
      {[1, 2, 3, 4].map((num) => {
        return (
          <div key={num} className="sidebar-section">
            <img src={myPic} />
            <p>Mahmoud Esmat</p>
          </div>
        );
      })}
    </div>
  );
}
