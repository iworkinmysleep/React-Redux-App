import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import StoriesList from "./components/StoriesList";

function App() {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		axios
			.get("https://binaryjazz.us/wp-json/genrenator/v1/story/25/")
			.then((res) => {
        console.log("data", res);
        setStories(res.data)
			})
			.catch((err) => console.log(err));
	},[]);

	return <div className="App">
    <h1>Music Genre Stories</h1>
    <StoriesList stories={stories}/>
  </div>;
}

export default App;
