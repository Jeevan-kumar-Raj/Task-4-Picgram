import React, { useState } from "react";

function AddCom() {
  const [comment, setcomment] = useState("");
  return (
    <div>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="name"
        required
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      />
    </div>
  );
}

export default AddCom;
