import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import Layout from "./nav/Layout";
import TicketList from "./pages/TicketList";
import TicketForm from "./pages/TicketForm";
import { Provider } from "react-redux";
import store from "./services/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/category/:category" element={<TicketList />} />
              <Route path="/category/:category/agregar" element={<TicketForm />} />
              <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;