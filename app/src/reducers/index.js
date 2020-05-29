import { GET_DATA, DATA_SUCCESS, DATA_FAILURE } from "../actions/index";

const initialState = {
	stories: [],
	isLoading: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				isLoading: true,
			};
		case DATA_SUCCESS:
			return {
        ...state,
        stories: action.payload,
        isLoading: false,
        
      };
      case DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: 'There was an issue fetching data!!'
        }
		default:
			return state;
	}
};
