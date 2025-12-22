import MainComponenets from "../Components/MainComponenets";
import TableDataProvider from "../Contexts/TableDataContext";

function App() {
  return (
    <TableDataProvider>
      <MainComponenets />
    </TableDataProvider>
  );
}

export default App;
