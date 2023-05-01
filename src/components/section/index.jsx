import Button from "react-bootstrap/Button";
import Group from "../../assets/img/Group81.png";
import Ia from "../../assets/img/Illustration.svg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Conteudo() {
  return (
    <section className="container text-white" id="home">
      <div className="row align-items-center flex-wrap-reverse">
        <div className="col-md-7">
          <h1 className="degrade">
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="text-blue my-2">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Get Started
            </Button>
          </InputGroup>

          <div className="row mt-2">
            <div className="col-xl-4">
              <img
                src={Group}
                style={{ height: 40, width: 200 }}
                alt="grupo de pessoas"
              />
            </div>

            <div className="col-xl-8 mt-2">
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <img
            className="img-fluid"
            src={Ia}
            style={{ height: 400, width: 560 }}
            alt="foto do rosto de um android Ia"
          />
        </div>
      </div>
    </section>
  );
}
