import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const Stories = (props) => {
	console.log("stories", props.stories);
	if (props.isLoading) {
		return <h2>Loading joke...</h2>;
	}
	// const data = Array.from(props.stories);
	// const jokes = data.map((joke) => (
	// 	<div key={joke.id}>
	// 		<h2>{joke.setup}</h2>
	// 		<h4>{joke.punchline}</h4>
	// 	</div>
	// ));

	return (
		<div>
			<button onClick={props.getData}>Random Joke...</button>
			<h3>{props.stories}</h3>
		</div>
	);
};

const mapStateToProps = (state) => ({
	stories: state.stories,
	isLoading: state.isLoading,
	error: state.error,
});

export default connect(mapStateToProps, { getData })(Stories);
