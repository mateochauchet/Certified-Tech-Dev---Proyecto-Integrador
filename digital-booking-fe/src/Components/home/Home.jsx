import ContenedorBuscador from "../buscador/ContenedorBuscador";
import ContenedorCard from "../cards/ContenedorCard";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

function Home() {
  return (
    <>
      <Header />  
      <ContenedorBuscador />
      <ContenedorCard />
      <Footer />
    </>
  );
}

export default Home;
