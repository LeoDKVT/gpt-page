import FeatureImage from "../../assets/img/Feature-Image.svg";
import Button1 from "../buttons/btn-case";

export default function CaseStudies() {
  return (
    <section className="container text-white" id="case-studies">
      <div className="row">
        <div className="col-md-6 mb-3">
          <img
            className="img-fluid"
            src={FeatureImage}
            style={{ height: 500, width: 500 }}
            alt=""
          />
        </div>

        <div className="col-md-6 align-self-end">
          <p className="text-blue">
            <strong>Request Early Access to Get Started</strong>
          </p>
          <h2 className="degrade h1 mb-4">
            The possibilities are beyond your imagination
          </h2>
          <p className="text-blue">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="text-orange mb-3">
            Request Early Access to Get Started
          </p>
        </div>

        <div>
          <div className="row rounded bg-degrade my-4 py-4 mx-1">
            <div className="col-md-9">
              <p className="text-black">
                <strong>Request Early Access to Get Started</strong>
              </p>
              <h3 className="text-black mb-4">
                <strong>
                  Register today & start exploring the endless possiblities.
                </strong>
              </h3>
            </div>
            <div className="col-md-3 align-self-center text-center">
              <Button1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
