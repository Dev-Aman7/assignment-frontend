import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

// import logger from "redux-logger";
import thunk from "redux-thunk";
import user from "./reducer/user";
import movies from "./reducer/movies";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["user"],
};

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({ user, movies })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
