import { useNavigate } from "react-router-dom";

const Product=({id, name, description, price, color})=>{
  const navigate=useNavigate();
  return (
    <div className="product">
    <div >
      <strong>ID: {id}</strong>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p style={{color: color, fontWeight: "bold"}}>Color: {color}</p>
    </div>
    <button onClick={()=>navigate(`/store/${name}`, {
      state: {id, description, price, color}
    })}>
      Show More</button>
    </div>
  );
}

export default Product;