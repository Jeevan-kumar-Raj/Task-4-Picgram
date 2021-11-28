export const getAllPicsReducer = (state = { pics: [] }, action) => {
  switch (action.type) {
    case "GET_PICS_REQUEST":
      return {
        loading: true,
      };
    case "GET_PICS_SUCCESS":
      return {
        pics: action.payload,
        loading: false,
      };
    case "GET_PICS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
