const initialState = {
  movies: [],
  pageInfo: {},
  isError: false,
  isLoading: false,
  isShow: false,
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
        message: "",
        pageInfo: {}
      };
    }
    case "GETALLMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        movies: action.payload.data.data,
        message: action.payload.data.message,
        pageInfo: action.payload.data.pagination
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
    case "UPDATEMOVIE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: ""
      };
    }
    case "UPDATEMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message
      };
    }
    case "UPDATEMOVIE_PENDING": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        message: action.payload.data.message
      };
    }
    case "DELETEMOVIE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: ""
      };
    }
    case "DELETEMOVIE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message
      };
    }
    case "DELETEMOVIE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        message: action.payload.data.message
      };
    }
    case "SEARCHMOVIE_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "SEARCHMOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        movies: action.payload.data.data,
        message: action.payload.data.message
      };
    }
    case "SEARCHMOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message
      };
    }
    case "SORTMOVIE_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "SORTMOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        movies: action.payload.data.data,
        message: action.payload.data.message
      };
    }
    case "SORTMOVIE_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
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
