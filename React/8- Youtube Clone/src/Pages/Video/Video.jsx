import { useParams } from "react-router-dom";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

export default function Video() {
  const { videoId, categoryId } = useParams();

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <LeftSection videoId={videoId} />
      <RightSection categoryId={categoryId} />
    </div>
  );
}
