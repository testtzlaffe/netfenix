import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
  const [priority, setPriority] = useState([
    { type: "frontend", category: 0, quantity: 0 },
    { type: "backend", category: 1, quantity: 0 },
    { type: "devops", category: 2, quantity: 0 },
  ]);

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    readLocalStorage();
  }, []);

  useEffect(() => {
    readLocalStorage();
  }, [clicks]);

  const readLocalStorage = () => {
    const frontendLocalStorage = localStorage.getItem("frontend") || 0;
    const backendLocalStorage = localStorage.getItem("backend") || 0;
    const devopsLocalStorage = localStorage.getItem("devops") || 0;

    const newPriority = [
      { type: "frontend", category: 0, quantity: Number(frontendLocalStorage) },
      { type: "backend", category: 1, quantity: Number(backendLocalStorage) },
      { type: "devops", category: 2, quantity: Number(devopsLocalStorage) },
    ];

    const orderedPriority = newPriority.sort((a, b) => {
      return b.quantity - a.quantity;
    });

    setPriority(orderedPriority);
  };

  const handleVideoClick = (type) => {
    const currentLocalStorage = Number(localStorage.getItem(type));
    localStorage.setItem(type, currentLocalStorage + 1);
    setClicks(clicks + 1);
  };

  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={
          dadosIniciais.categorias[priority[0].category].videos[0].titulo
        }
        url={dadosIniciais.categorias[priority[0].category].videos[0].url}
        videoDescription={""}
      />

      <Carousel
        handleClick={() => handleVideoClick(priority[0].type)}
        ignoreFirstVideo
        category={dadosIniciais.categorias[priority[0].category]}
      />

      <Carousel
        handleClick={() => handleVideoClick(priority[1].type)}
        ignoreFirstVideo
        category={dadosIniciais.categorias[priority[1].category]}
      />

      <Carousel
        handleClick={() => handleVideoClick(priority[2].type)}
        ignoreFirstVideo
        category={dadosIniciais.categorias[priority[2].category]}
      />

      <Footer />
    </div>
  );
}

export default Home;
