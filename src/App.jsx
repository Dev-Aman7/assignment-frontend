import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/signup" component={Signup} exact />

                        <ProtectedRoute path="/home" component={Home} exact />
                        <Route path="/" component={Signin} />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
