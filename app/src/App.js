import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/index";
import "./App.css";

import Stories from "./components/Stories";

const store = createStore(reducer, applyMiddleware(thunk));
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Joke App</h1>
				<Stories />
			</div>
		</Provider>
	);
}

export default App;
