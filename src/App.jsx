import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import SignIn from "./components/SignIn";
import NavLayout from "./layouts/NavLayout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<SignIn/>} />
          <Route path="home/*" element={<NavLayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
