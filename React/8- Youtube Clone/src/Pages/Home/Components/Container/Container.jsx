import "./Container.css";
import { Link } from "react-router-dom";
import { useCategory } from "../../../../Contexts/CategoryContext";
import { API_KEY, value_converter } from "../../../../data";
import { useData } from "../../../../Contexts/DataContext";
import { useEffect } from "react";
import moment from "moment";

export default function Container() {
  const { data, setData } = useData();
  const { category } = useCategory();

  // Fetch videos from youtube api
  useEffect(() => {
    const fetchData = async () => {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=EG&videoCategoryId=${category}&key=${API_KEY}`;
      await fetch(videoList_url)
        .then((response) => response.json())
        .then((data) => setData(data.items));
    };

    fetchData();
  }, [category, setData]);

  return (
    <div className="container-fluid" style={{ padding: "20px" }}>
      <div className="row gy-1">
        {/* map => Array of data  */}
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              className="col-12 col-sm-6 col-md-4 col-xl-3"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <img
                  src={item.snippet.thumbnails.medium.url}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h6 className="card-title">{item.snippet.title}</h6>
                  <p className="card-text">{item.snippet.channelTitle}</p>
                  <p id="views">
                    {value_converter(item.statistics.viewCount)} Views &bull;{" "}
                    {moment(item.snippet.publishedAt).fromNow()}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
