import logo from "./logo.svg";
import "materialize-css";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import Aboutpage from "./components/aboutpage/aboutpage.component";
import Productspage from "./components/productspage/productspage.component";
import Gallerypage from "./components/gallerypage/gallerypage.component";
import Contactpage from "./components/contactpage/contactpage.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Aboutpage} />
          <Route path="/products" component={Productspage} />
          <Route path="/gallery" component={Gallerypage} />
          <Route path="/contact" component={Contactpage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
