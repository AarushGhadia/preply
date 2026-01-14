import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center gap-8'>
        <Card name="Air Jordan 4 Retro Reimagined Bred" />
        <Card name="manish" />
        <Card name="Arush" />
      </div>

      <Footer />
    </>
  );
};

export default App;
