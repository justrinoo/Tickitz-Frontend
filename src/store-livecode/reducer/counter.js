// data yang akan di tambahkan setelah mendapatkan data
const initialState = {
  count: 0,
  disabled: false
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREASE": {
      return {
        ...state,
        count: state.count + 1,
        disabed: state.count === 5 ? true : false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
