import "./Button.css";

// Hooks
import { useFilter } from "../Contexts/FilterContext";

// Main function
export default function Buttons({ name }) {
  const { filter, setFilter } = useFilter();

  return (
    <>
      <button
        className={filter == name ? "active-btn" : ""}
        onClick={() => setFilter(name)}
      >
        {name}
      </button>
    </>
  );
}
