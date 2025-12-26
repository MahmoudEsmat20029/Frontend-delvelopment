import "./LeftSection.css";
import like from "../../../assets/like.png";
import dislike from "../../../assets/dislike.png";
import share from "../../../assets/share.png";
import save from "../../../assets/save.png";
import myPic from "../../../assets/myPic.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../../data";
import moment from "moment";

export default function LeftSection({ videoId }) {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  // Fetch Video data
  useEffect(() => {
    const fetchVideoData = async () => {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      await fetch(videoDetails_url)
        .then((response) => response.json())
        .then((data) => setApiData(data.items[0]));
    };

    fetchVideoData();
  }, [videoId]);

  // Fetch Channel data
  useEffect(() => {
    if (!apiData) return;

    const fetchChannelData = async () => {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      await fetch(channelData_url)
        .then((response) => response.json())
        .then((data) => setChannelData(data.items[0]));
    };

    fetchChannelData();
  }, [apiData]);

  // Fetch Comments data
  useEffect(() => {
    const fetchCommentsData = async () => {
      const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=30&key=${API_KEY}`;

      await fetch(comments_url)
        .then((response) => response.json())
        .then((data) => setCommentData(data.items || []));
    };

    fetchCommentsData();
  }, [videoId]);

  return (
    <main>
      <iframe
        width="100%"
        height="439"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      />

      <section className="video-data">
        <h5>{apiData ? apiData.snippet.title : "Title of the video"}</h5>

        <div className="views">
          <p>
            {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}{" "}
            Views &bull;{" "}
            {apiData
              ? moment(apiData.snippet.publishedAt).fromNow()
              : "a day ago"}
          </p>

          <div className="reacts-container">
            <div className="reacts">
              <img src={like} />
              <p>
                {apiData
                  ? value_converter(apiData.statistics.likeCount)
                  : "160K"}
              </p>
            </div>
            <div className="reacts">
              <img src={dislike} />
            </div>
            <div className="reacts">
              <img src={share} />
              <p>Share</p>
            </div>
            <div className="reacts">
              <img src={save} />
              <p>Save</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="comments">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : myPic}
        />
        <div className="video-description">
          <div className="subscription">
            <div>
              <h6>{apiData ? apiData.snippet.channelTitle : "Channel name"}</h6>
              <p>
                {channelData
                  ? value_converter(channelData.statistics.subscriberCount)
                  : "3M"}{" "}
                Subscribers
              </p>
            </div>
            <button>Subscribe</button>
          </div>

          <p>
            {apiData
              ? apiData.snippet.description.slice(0, 250) + "..."
              : "Description"}
          </p>

          <hr />

          <h6>
            {apiData ? value_converter(apiData.statistics.commentCount) : "203"}{" "}
            Comments
          </h6>

          {/* ---------- Comments ---------- */}
          {commentData.map((item, index) => {
            const comment = item.snippet.topLevelComment.snippet;

            return (
              <div key={index} className="comment">
                <img src={comment.authorProfileImageUrl} />

                <div className="commenter">
                  <h6>
                    {comment.authorDisplayName}
                    <span>{moment(comment.publishedAt).fromNow()}</span>
                  </h6>

                  <p>{comment.textDisplay}</p>

                  <div className="commenter-reacts">
                    <div>
                      <img src={like} />
                      <p>{comment.likeCount}</p>
                    </div>
                    <img src={dislike} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
