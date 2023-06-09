import Group from "../../assets/img/Group81.svg";
import Ia from "../../assets/img/Illustration.svg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import BtnStarted from "../buttons/btn-started";

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

          <InputGroup className="my-3" >
            <Form.Control className="bg-blue border border-0"
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              aria-describedby="basic-addon2"
            />
            <BtnStarted />
          </InputGroup>

          <div className="row mt-2">
            <div className="col-md-4 text-center ">
              <img
                className="img-fluid "
                src={Group}
                style={{ height: 40, width: 160 }}
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
            className="img-fluid scale-up-bottom"
            src={Ia}
            style={{ width: 560 }}
            alt="foto do rosto de um android Ia"
          />
        </div>
      </div>
    </section>
  );
}
