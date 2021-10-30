const initialState = {
  premiere: [],
  pageInfo: {},
  isError: false,
  isLoading: false,
  message: ""
};

export default function getAllPremiere(state = initialState, action) {
  switch (action.type) {
    case "GETALLPREMIERE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: "",
        pageInfo: {}
      };
    }
    case "GETALLPREMIERE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        premiere: action.payload.data.data,
        message: action.payload.data.message,
        pageInfo: action.payload.data.pageInfo
      };
    }
    case "GETALLPREMIERE_FULFILLED": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        premiere: [],
        message: action.payload.data.message,
        pageInfo: {}
      };
    }
    case "POSTPREMIERE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message
      };
    }
    case "POSTPREMIERE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message
      };
    }
    case "POSTPREMIERE_REJECTED": {
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
