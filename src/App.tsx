import "./App.css";
import { FiltersSection } from "./components/FiltersSection";
import { Header } from "./components/Header";
import Products from "./components/ProductsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <FiltersSection />
      <Products />
    </div>
  );
}

export default App;
