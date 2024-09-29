import Form from "react-bootstrap/Form";
import Accordion from 'react-bootstrap/Accordion';
const CustomerReview = () =>{
    return(
        <>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>See Reviews </Accordion.Header>
        <Accordion.Body>
        <p>Customer Reviews </p>
          <div id="search">
            <Form.Check type="radio" name="nm" aria-label="radio 1" />
            <span>See all Reviews </span>{" "}
          </div>
          <div id="search">
            <Form.Check type="radio" name="nm" aria-label="radio 1" />
            <span>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>{" "}
             {" "}
              and up
            </span>{" "}
          </div>
          <div id="search">
            <Form.Check type="radio" name="nm" aria-label="radio 1" />
            <span>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>{" "}
             {" "}
              and up
            </span>{" "}
          </div>
          <div id="search">
            <Form.Check type="radio" name="nm" aria-label="radio 1" />
            <span>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>{" "}
             {" "}
              and up
            </span>{" "}
          </div>
          <div id="search">
            <Form.Check type="radio" name="nm" aria-label="radio 1" />
            <span>
            <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>{" "}
             {" "}
              and up
            </span>{" "}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
        </>
    )
}
export default CustomerReview;