import { useEffect, useMemo, useState,useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Product from "../components/product/Product";
import { useAuth } from "../components/auth";

const products = [
  {
    id: 1,
    name: "product1",
    description: "product description",
    price: "10",
    color: 'red'
  },
  {
    id: 2,
    name: "product2",
    description: "product description",
    price: "20",
    color: 'blue'
  },
  {
    id: 3,
    name: "product3",
    description: "product description",
    price: "30",
    color: 'blue'
  },
];

const StorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedColor = useRef();
  const auth=useAuth()

  // useEffect(() => {
  //   // if (!location.state) 
  //   //   navigate('/login');
  //   setUser(location.state);
  //   console.log(location)
  // }, [location]); 

  useEffect(() => {
    if (auth.user) {
      setUser(auth.user); 
    }
  }, [auth.user]); 

  const filteredProducts = useMemo(() => {
    const sortOrder = searchParams.get('sort');
    const colorFilter = searchParams.get('color');

    let sortedProducts = [...products];

    if (colorFilter) {
      selectedColor.current=colorFilter
 
      sortedProducts = sortedProducts.filter(product => product.color === colorFilter);
    }else{
      selectedColor.current="";
    }

    if (sortOrder === 'descending') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'ascending') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    return sortedProducts; 
  }, [searchParams]); 

  const handleSort = (order) => {
    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('sort', order); 
      return newParams; 
    });
  };

  const handleLogout =()=>{
    auth.logout()
    navigate('/')
  }

  return (
    <>
      <h2 style={{marginLeft:'2rem'}}>Hello, {user?user.name:'Guest'}</h2>
      <div className="store-buttons">
        <button onClick={handleLogout} style={{ marginLeft: '2rem' }}>Logout</button>

        <button className="query-btn" onClick={() => handleSort('descending')}>Sort Descending</button>
        <button className="query-btn" onClick={() => handleSort('ascending')}>Sort Ascending</button>
        <button className="query-btn" id="reset-btn" onClick={() => {setSearchParams({}); selectedColor.current=""}}>Reset</button>

        <select
          onChange={(e) => {
            const color = e.target.value;
            setSearchParams(prevParams => {
              const newParams = new URLSearchParams(prevParams);
              if (color) {
                newParams.set('color', color); 
              } else {
                newParams.delete('color'); 
              }
              return newParams; 
            });
          }}
          value={selectedColor.current}
        >
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            color={product.color}
          />
        ))}
      </div>
      {console.log(location)}
    </>
  );
};

export default StorePage;
