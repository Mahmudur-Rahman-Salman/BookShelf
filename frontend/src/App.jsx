import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 primaryFont">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

/* 
 colors: {
        'primary': '#FFCE1A',
        'secondary' : "#0D0842",
        'blackBG': '#F3F3F3',
        'Favorite': '#FF5841'
      }, 
      fontFamily: {
        'primary' : ["Montserrat", "sans-serif"],
        'secondary' : ["Nunito Sans", "sans-serif"]
      }

*/
