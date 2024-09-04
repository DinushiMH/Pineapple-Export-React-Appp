// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Footer from "./components/Footer/footer.jsx";
// import Navbar from "./components/Navbar/navbar.jsx";
// import Topbar from "./components/Topbar/topbar.jsx";
// import Homepage from "./pages/Homepage/Homepage.jsx";
// import Ourservicespage from "./pages/Ourservicespage/Ourservicespage.jsx";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Topbar />
//         <Navbar />
//         <Route exact path="/" Component={Homepage} />
//         <Routes>
//           <Route path="/services">
//             <Ourservicespage />
//           </Route>
//         </Routes>
//         <Routes>
//           <Route path="/gallery">
//             <Ourservicespage />
//           </Route>
//         </Routes>
//         <Homepage />
//         <Ourservicespage />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Topbar from "./components/Topbar/topbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Ourservicespage from "./pages/Ourservicespage/Ourservicespage.jsx";
import Gallerypage from "./pages/Gallerypage/Gallerypage.jsx";
import Contactus from "./pages/Contactuspage/Contact.jsx";
import Aboutus from "./pages/Aboutuspage/Aboutus.jsx";


function App() {
return (
  <Router>
    <div>
      <Topbar />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Ourservicespage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/aboutus" element={<Aboutus />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  </Router>
);

}

export default App;
