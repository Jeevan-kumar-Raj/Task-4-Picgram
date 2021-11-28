import axios from "axios";
export const getAllPics = () => (dispatch) => {
  dispatch({ type: "GET_PICS_REQUEST" });

  axios
    .get("https://picsum.photos/v2/list?page=2&limit=100")
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_PICS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PICS_FAILED", payload: err });
    });
};
