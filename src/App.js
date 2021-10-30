import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddTourPlace from "./components/AddTourPlace/AddTourPlace";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ManageAllPlans from "./components/ManageAllPlans/ManageAllPlans";
import MyPlans from "./components/MyPlans/MyPlans";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/checkout/:id">
                        <Checkout></Checkout>
                    </Route>
                    <Route exact path="/myPlans">
                        <MyPlans></MyPlans>
                    </Route>
                    <Route exact path="/allPlans">
                        <ManageAllPlans></ManageAllPlans>
                    </Route>
                    <Route exact path="/addPlace">
                        <AddTourPlace></AddTourPlace>
                    </Route>
                    <Route exact path="/login">
                        <Login></Login>
                    </Route>
                    <Route exact path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    );
}

export default App;
