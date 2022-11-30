import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/myNotes/MyNotes";
import MainScreen from "./component/MainScreen";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import CreateNote from "./screens/CreateNote/CreateNote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainScreen />
        <Routes>
          {/* <main> */}
          <Route exact path="/login" element={<Login />} />
          <Route  path="/" element={<LandingPage />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/mynotes" element={<MyNotes />} /> 
          <Route  path="/createnote" element={<CreateNote />} />


          {/* <main style={{minheight:"90vh"}} ></main> */}

          {/* </main> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
export default App;
