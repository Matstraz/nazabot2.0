import { Route, Routes } from "react-router";
import Homepage from "./components/pages/Homepage";
import { ProtectedArea } from "./components/pages/protectedArea/ProtectedArea";
import Mario from "./components/pages/protectedArea/Mario";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route element={<ProtectedArea />}>
        <Route path="/mario" element={<Mario />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
