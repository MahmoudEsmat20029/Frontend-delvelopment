import Container from "./Components/Container/Container";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container />
    </div>
  );
}
