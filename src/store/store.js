import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user", "auth", "movie", "premiere"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware, logger));
const persistor = persistStore(store);

export { store, persistor };
