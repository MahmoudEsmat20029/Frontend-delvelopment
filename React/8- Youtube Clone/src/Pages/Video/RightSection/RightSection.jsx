import "./RightSection.css";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../../data";
import { Link } from "react-router-dom";

export default function RightSection({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  // fetch related video data
  useEffect(() => {
    const fetchData = async () => {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResult=25&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      await fetch(relatedVideo_url)
        .then((response) => response.json())
        .then((data) => setApiData(data.items));
    };

    fetchData();
  }, [categoryId]);

  return (
    <div
      style={{
        height: "20px",
        width: "34%",
      }}
    >
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="next-video"
            style={{ textDecoration: "none" }}
          >
            <img src={item.snippet.thumbnails.medium.url} width={"220rem"} />
            <div>
              <h6>{item.snippet.title}</h6>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
