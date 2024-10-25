import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from 'react-bootstrap/Nav';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div style={{display:'flex',gap:'15px'}}>
            <Nav.Link as={Link} to="https://www.facebook.com/profile.php?id=100043314000200" target="_blank"><MDBIcon color="primary" fab icon="facebook-f" /></Nav.Link>
            <Nav.Link as={Link} to="https://x.com/im_suraj03" target="_blank"><MDBIcon color="primary" fab icon="twitter" /></Nav.Link>
            <Nav.Link as={Link} to="https://github.com/suraj-raj01" target="_blank"><MDBIcon color="primary" fab icon="google" /></Nav.Link>
            <Nav.Link as={Link} to="https://www.instagram.com/its_suraj_kr__01/" target="_blank"><MDBIcon color="primary" fab icon="instagram" /></Nav.Link>
            <Nav.Link as={Link} to="https://www.linkedin.com/in/suraj-kumar-1965b0296/" target="_blank"><MDBIcon color="primary" fab icon="linkedin" /></Nav.Link>
            <Nav.Link as={Link} to="https://github.com/suraj-raj01" target="_blank"><MDBIcon color="primary" fab icon="github" /></Nav.Link>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="warning" icon="gem" className="me-3" />
                  mobile shop
                </h6>
                <p>
                "Welcome To Mobileshop.com" Buy Mobiles, Laptops, TV and Mores . . . Online | Best Prices, Top Brands Premium Mobiles, Laptops, TV and many more | Gaming, Business, & More Discover Your Perfect Products.
                </p>
              </MDBCol>

              <MDBCol
                md="2"
                lg="2"
                xl="2"
                className="mx-auto mb-4"
                id="f-product"
              >
                <h6 className="text-uppercase fw-bold mb-4">Mobiles</h6>
                <p>
                <Nav.Link as={Link} to="iphone">IPhone</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="oppo">Oppo</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="realme">Realme</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="nothing">Nothing</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="motorola">Motorola</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="vivo">Vivo</Nav.Link>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Laptops</h6>
                <p>
                <Nav.Link as={Link} to="Acer"> Acer</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="Asus">ASUS</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="dell">Dell</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="Lenovo">Lenovo</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="zebronics">Zebronics</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="mac">Apple</Nav.Link>
                </p>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Smart's TV</h6>
                <p>
                <Nav.Link as={Link} to="Acertv"> Acer TV</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="mitv">Xiaomi TV</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="samsungtv">Samsung TV</Nav.Link>
                </p>
                <p>
                <Nav.Link as={Link} to="lgtv">LG TV</Nav.Link>
                </p>
               
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Bharti Niketan, Bhopal (MP)
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@mobileshop.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  91 620 654 460 29
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  91 620 654 460 29
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
         Everything is reserved by © 2024 Copyright :{" "}
          <a
            className="text-reset fw-bold"
            as={Link}
            to="https://mobileshop.com/"
          >
            {" "}
            mobileshop.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};
export default Footer;
