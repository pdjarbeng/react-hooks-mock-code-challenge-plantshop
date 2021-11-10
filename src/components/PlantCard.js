import React, {useState} from "react";

fetch='http://localhost:6001/plants'
.then(json => json())
.then

function PlantCard() {
  const [image, setImage] = useState("all");
  const plantImages = props.image.map((image) => {}
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
