import ContenedorBuscador from "../buscador/ContenedorBuscador";
import ContenedorCard from "../cards/ContenedorCard";

import CardsContainer from "../cards_list1/CardsContainer";

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
