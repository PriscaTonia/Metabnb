import { Navbar, Home, Footer, PlaceToStay, Modal } from "./Components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
    console.log("Hey modal");
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <Router>
      <div className="App">
        <Navbar showModal={() => showModal()} />
        <Modal show={show} handleClose={() => hideModal()}>
          <p>Modal</p>
        </Modal>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/placetostay">
            <PlaceToStay />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
