import Google from "../../assets/img/google.svg";
import Slack from "../../assets/img/slack.svg";
import Atlassian from "../../assets/img/atlassian.svg";
import Dropbox from "../../assets/img/dropbox.svg";
import Shopify from "../../assets/img/shopify.svg";

export default function Patrocinio() {
  return (
    <section className="container my-4">
      <div className="row justify-content-center">
        <img
          className="col-md-2 img-fluid"
          src={Slack}
          style={{ width: 140, height: 60 }}
          alt=""
        />
        <img
          className="col-md-2 img-fluid"
          src={Google}
          style={{ width: 140, height: 60 }}
          alt=""
        />
        <img
          className="col-md-2 img-fluid"
          src={Atlassian}
          style={{ width: 140, height: 60 }}
          alt=""
        />
        <img
          className="col-md-2 img-fluid"
          src={Dropbox}
          style={{ width: 140, height: 60 }}
          alt=""
        />
        <img
          className="col-md-2 img-fluid"
          src={Shopify}
          style={{ width: 140, height: 60 }}
          alt=""
        />
      </div>
    </section>
  );
}
