import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/home.css";
import Button from "../component/Button";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        Home
        <Button y={0} x="giorgi">
          click
        </Button>
        <Button y={1} x="nino">
          submit
        </Button>
        <Button y={2} x="ilia">
          search
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
