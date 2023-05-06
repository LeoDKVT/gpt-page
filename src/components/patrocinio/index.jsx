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
          className="col-md-2 img-fluid mb-2"
          src={Google}
          style={{ width: 130, height: 40 }}
          alt="Logo do Google"
        />
        <img
          className="col-md-2 img-fluid mb-2"
          src={Slack}
          style={{ width: 130, height: 40 }}
          alt="Logo do Slack"
        />
        <img
          className="col-md-2 img-fluid mb-2"
          src={Atlassian}
          style={{ width: 150, height: 38 }}
          alt="Logo do Atlassian"
        />
        <img
          className="col-md-2 img-fluid mb-2"
          src={Dropbox}
          style={{ width: 150, height: 40 }}
          alt="Logo do Dropbox"
        />
        <img
          className="col-md-2 img-fluid mb-2"
          src={Shopify}
          style={{ width: 140, height: 40 }}
          alt="Logo do Shopify"
        />
      </div>
    </section>
  );
}
