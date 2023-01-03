import "./App.css";
import FirstPage from "./components/firstPage/FirstPage";
import SecPage from "./components/secPage/SecPage";
import NavBar from "./components/navBar/NavBar";
import Services from "./components/services/Services";
import CheckPage from "./components/checkPage/CheckPage";
import Mark from "./components/mark/Mark";
import Marta from "./components/marta/Marta";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstPage />
      <SecPage />
      <Services />
      <CheckPage />
      <Mark />
      <Marta />
      <ContactForm />
      <Contact />
    </div>
  );
}

export default App;
