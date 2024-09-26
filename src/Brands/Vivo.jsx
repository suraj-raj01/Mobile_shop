import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";


import { useDispatch } from "react-redux";
import {addCartData} from "../addToCartSlice";
import { useNavigate } from "react-router-dom";

const Vivo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mydata, setMydata] = useState([]);
  const [isVisible,setIsVisible] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsVisible(false)
    },1000)
    setIsVisible(true);
  },[])
  
  const loadData = () => {
    let api = `http://localhost:3000/products/?brand=Vivo`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const addDataToCart = (id,name,model,brand,OS,price,img,desc) =>{
    dispatch(
      addCartData({
        id:id,
        name:name,
        model:model,
        brand:brand,
        OS:OS,
        price:price,
        img:img,
        description:desc,
        qnty:1
      })
    );
  };

  const detail = (id) =>{
    navigate(`/details/${id}`)
  }
  const res = mydata.map((key) => {
    return (
      <>
        <Container>
          <div
            id="products"
            style={{
              display: "flex",
              padding: "20px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div id="box1">
              <img src={key.img} alt="" width="300px" height="300px" onClick={()=>{detail(key.id)}}/>
            </div>
            <div id="box2">
              <h3>{key.name}</h3>
              <b>{key.description}</b>
              <br />
              <br />
              <span>Model : {key.model}</span>
              <br />
              <span>Brand : {key.brand}</span>
              <br />
              <span>OS : {key.OS}</span>
              <br />
              <span>
                Price : {key.price}
                {" ₹"}
              </span>
              <br />
              <br />
              <Button variant="outline-primary"
              onClick={()=>{
                addDataToCart(
                  key.id,
                  key.name,
                  key.model,
                  key.brand,
                  key.OS,
                  key.price,
                  key.img,
                  key.description
                )
              }}
              >Add to Cart</Button>
            </div>
          </div>
          <br />
        </Container>
      </>
    );
  });

  return (
    <>
      
      <div id="content">
        <Container>
        {/* <h4>Contents</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nostrum laboriosam ratione, ipsam assumenda necessitatibus ea perspiciatis libero maxime provident corrupti excepturi, cumque error earum nulla quidem cupiditate eius voluptas ipsa itaque quia adipisci quod odit. Totam pariatur repellat sunt asperiores officia odio excepturi ea blanditiis recusandae eum iste, repudiandae dignissimos nam rem voluptatibus veritatis quia commodi quas. Est, nulla nisi? Sit aliquid alias cupiditate ea adipisci in, natus illum vitae eligendi totam impedit soluta dolorum cum voluptatum illo commodi consequuntur quae ipsum obcaecati quasi ullam? Quasi ullam praesentium ex velit necessitatibus deserunt animi repudiandae quae, harum, similique, omnis totam?</p> */}
        </Container>
      </div>
      <div id="header">
      <h1>Vivo Products</h1>
      </div>
      {isVisible?(
        <center>
           <img src="https://ima.alfatango.org/images/loader.gif" alt="" height='60px' width='60px'/>
        </center>
      ):(
      <div id="product">{res}</div>
      )}
    </>
  );
};
export default Vivo;
