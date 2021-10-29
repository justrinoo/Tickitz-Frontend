const initialState = {
  movies: [],
  isError: false,
  isLoading: false,
  message: ""
};

export default function movie(state = initialState, action) {
  switch (action.type) {
    case "POSTMOVIE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: ""
      };
    }
    case "POSTMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message
      };
    }
    case "POSTMOVIE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        message: action.payload.data.message
      };
    }
    case "GETALLMOVIE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: ""
      };
    }
    case "GETALLMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        movies: action.payload.data.data,
        message: action.payload.data.message
      };
    }
    case "GETALLMOVIE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        message: action.payload.data.message
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
