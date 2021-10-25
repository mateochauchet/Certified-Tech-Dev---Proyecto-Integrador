import ContenedorBuscador from "../buscador/ContenedorBuscador";
import ContenedorCard from "../cards/ContenedorCard";
import Card from "../Card_listado/Card";
import CardsContainer from "../Card_listado/CardsContainer";

import Footer from "../Footer/Footer"
import Header from "../Header/Header"

function Home() {
  return (
    <>
      <Header />  
      <ContenedorBuscador />
      <ContenedorCard />
      <CardsContainer />
      <Footer />
    </>
  );
}

export default Home;
