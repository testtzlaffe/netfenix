import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
  const [priority, setPriority] = useState([
    { type: "bronze", category: 0, quantity: 0 },
    { type: "ouro", category: 1, quantity: 0 },
    { type: "prata", category: 2, quantity: 0 },
  ]);

  const [clicks, setClicks] = useState(0);
  const [corPrincipal, setCorPrincipal] = useState("bronze");

  useEffect(() => {
    readLocalStorage();
  }, []);

  useEffect(() => {
    readLocalStorage();
  }, [clicks]);

  const readLocalStorage = () => {
    const bronzeLocalStorage = localStorage.getItem("bronze") || 0;
    const ouroLocalStorage = localStorage.getItem("ouro") || 0;
    const prataLocalStorage = localStorage.getItem("prata") || 0;

    const newPriority = [
      { type: "bronze", category: 0, quantity: Number(bronzeLocalStorage) },
      { type: "ouro", category: 1, quantity: Number(ouroLocalStorage) },
      { type: "prata", category: 2, quantity: Number(prataLocalStorage) },
    ];

    const orderedPriority = newPriority.sort((a, b) => {
      return b.quantity - a.quantity;
    });

    setPriority(orderedPriority);
    setCorPrincipal(orderedPriority[0].type);
  };

  const handleVideoClick = (type) => {
    const currentLocalStorage = Number(localStorage.getItem(type));
    localStorage.setItem(type, currentLocalStorage + 1);
    setClicks(clicks + 1);
  };

  return (
    <div style={{ background: "#141414" }}>
      <Menu cor={corPrincipal} />

      <BannerMain
        videoTitle={
          dadosIniciais.categorias[priority[0].category].videos[0].titulo
        }
        url={dadosIniciais.categorias[priority[0].category].videos[0].url}
        videoDescription={""}
      />

      {priority.map((item, indice) => (
        <Carousel
          handleClick={() => handleVideoClick(priority[indice].type)}
          ignoreFirstVideo
          category={dadosIniciais.categorias[priority[indice].category]}
        />
      ))}

      <Footer cor={corPrincipal} />
    </div>
  );
}

export default Home;
