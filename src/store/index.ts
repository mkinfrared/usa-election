import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducers, composeWithDevTools(middleware));

sagaMiddleware.run(rootSaga);

export default store;
