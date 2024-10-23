import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductPage=()=>{
  const location=useLocation();
  const { productSlug }=useParams();
  const [product, setProduct]=useState(null)
  const navigate=useNavigate()

  useEffect(()=>{
    if(location.state!==null)
      setProduct(location.state)
    else
      navigate('/store')
  },[location]);

  return (
    <div className="product-div">
      <strong>ID: {product?.id}</strong>
      <p>Name: {productSlug}</p>
      <p>Descrition: {product?.description}</p>
      <p>Price: {product?.price}</p>
      <p style={{color: product?.color, fontWeight: "bold"}}>Color: {product?.color}</p>
    </div>
  );
}

export default ProductPage;