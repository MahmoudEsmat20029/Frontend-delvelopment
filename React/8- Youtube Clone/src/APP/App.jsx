import Navbar from "../Components/Navbar/Navbar";
import AppRouter from "../Router/AppRouter";
import { SidebarProvider } from "../Contexts/SidebarContext";
import { CategoryProvider } from "../Contexts/CategoryContext";
import { DataProvider } from "../Contexts/DataContext";

function App() {
  return (
    <SidebarProvider>
      <Navbar />
      <DataProvider>
        <CategoryProvider>
          <AppRouter /> {/* Main Content */}
        </CategoryProvider>
      </DataProvider>
    </SidebarProvider>
  );
}

export default App;
