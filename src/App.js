import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
    // <div>
    //   <Header></Header>
    //   <AboutMe></AboutMe>
    //   <Portfolio></Portfolio>
    //   <Contact></Contact>
    //   <Resume></Resume>
    //   <Footer></Footer>
    // </div>
  );
}

export default App;
