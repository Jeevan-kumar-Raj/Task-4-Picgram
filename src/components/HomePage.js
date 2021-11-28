import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPics } from "../actions/picGramActions";
import AddCom from "./AddCom";

function HomePage() {
  const [count, setCount] = useState(0);
  const [comment, setcomment] = useState("");
  const [addcomm, setaddcomm] = useState(false);
  const getAllPicstate = useSelector((state) => state.getAllPicsReducer);

  const { loading, pics, error } = getAllPicstate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPics());
  }, []);

  function addComm() {
    // return (
    //   <div>
    //     <input
    //       type="text"
    //       className="form-control mb-2 mr-sm-2"
    //       placeholder="name"
    //       required
    //       value={comment}
    //       onChange={(e) => {
    //         setcomment(e.target.value);
    //       }}
    //     />
    //     ;
    //   </div>
    // );
    // alert("Enter your comment");
    prompt("Please enter your comment", "nice pic");
  }

  return (
    <div className="">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error.......</h1>
      ) : (
        pics.map((pic) => {
          return (
            <div className="col-md-10" style={{ margin: "110px" }}>
              <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h1 className="">
                  Post By : <i class="fa fa-user-plus"></i>
                  {pic.author}
                </h1>

                <img src={pic.download_url} className="img-fluid" alt="" />
              </div>
              <div className="shadow-lg p-3 mb-5 bg">
                <div className="d-flex justify-content-evenly">
                  <button className="btn" onClick={() => setCount(count + 1)}>
                    {count}
                    <i class="fa fa-thumbs-up"></i>
                  </button>
                  <button className="btn" onClick={() => setaddcomm(true)}>
                    <i onClick={addComm} class="fa fa-comment"></i>
                  </button>
                  <button className="btn">
                    <i class="fa fa-share-square"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default HomePage;
