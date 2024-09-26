import { Button, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { qntinc, qntdec, dataDel } from "../addToCartSlice";

const MyCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.addCart.cart);

  const inc = (id) => {
    dispatch(qntinc({ id: id }));
  };
  const dec = (id) => {
    dispatch(qntdec({ id: id }));
  };
  const delData = (id) => {
    dispatch(dataDel({ id: id }));
  };
  const detail = (id) => {
    navigate(`/details/${id}`);
  };
  const checkOut = () =>{
    navigate("/checkout")
  }

  let grandTotal = 0;
  const res = Data.map((key) => {
    grandTotal += key.price * key.qnty;
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
              <img
                src={key.img}
                alt=""
                width="300px"
                height="300px"
                onClick={() => {
                  detail(key.id);
                }}
              />
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
                {".00 ₹"}
              </span>
              <br />
              <br />
              <div id="update">
                <div id="inc-dec">
                  <span>
                    Price : {key.price * key.qnty}
                    {".00 ₹"}
                  </span>{" "}
                  <span id="qnt">qnt : {key.qnty}</span>{" "}
                  <button
                    onClick={() => {
                      inc(key.id);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dec(key.id);
                    }}
                  >
                    -
                  </button>
                  
                  <img
                    src="https://th.bing.com/th/id/OIP.27oo8k0H9LFKrOL9HQ7EQQHaHa?rs=1&pid=ImgDetMain"
                    onClick={() => {
                      delData(key.id);
                    }}
                    alt=""
                    height="30px"
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                  />
                 
                </div>
              </div>
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
      <h1>My Carts</h1>
      </div>
      <div id="product">{res}</div>
      <div id="grandTotal">
        Grand Total : {grandTotal}{".00 ₹"}
        <button onClick={checkOut} >Check Out</button>
      </div>
    </>
  );
};
export default MyCart;
