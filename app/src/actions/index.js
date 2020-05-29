import axios from "axios";

export const GET_DATA = "GET_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const getData = () => (dispatch) => {
	dispatch({ type: GET_DATA });
	axios
		.get("https://official-joke-api.appspot.com/random_joke")
		.then((res) => {
			console.log("data", res);
			dispatch({ type: DATA_SUCCESS, payload: res.data.setup });
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: DATA_FAILURE, payload: err.res });
		});
};

