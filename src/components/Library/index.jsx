import Card from "react-bootstrap/Card";
//import Rectangle0 from "../../assets/img/rectangle0.png";
import Rectangle1 from "../../assets/img/rectangle1.png";
import Rectangle2 from "../../assets/img/rectangle2.png";
import Rectangle3 from "../../assets/img/rectangle3.png";
import Rectangle4 from "../../assets/img/rectangle4.png";

export default function Library() {
  return (
    <section className="container my-5"  id="library">
      <h2 className="degrade mb-5 h1">
        <strong>
          A lot is happening, <br /> We are blogging about it.
        </strong>
      </h2>

      <div className="row card-group">
        <div className="col-md-4 ">
          <Card className="bg-blue text-white mb-4">
            
            <Card.Body>
              <Card.Text>Sep 26, 2021</Card.Text>
              <Card.Title className="mb-5">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Card.Title>
              <Card.Text className="mt-5">Read Full Article</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="bg-blue text-white mb-4">
            <Card.Img variant="top" src={Rectangle1} />
            <Card.Body>
              <Card.Text>Sep 26, 2021</Card.Text>
              <Card.Title>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Card.Title>
              <Card.Text className="mt-5">Read Full Article</Card.Text>
            </Card.Body>
          </Card>

          <Card className="bg-blue text-white mb-4">
            <Card.Img variant="top" src={Rectangle2} />
            <Card.Body>
              <Card.Text>Sep 26, 2021</Card.Text>
              <Card.Title>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Card.Title>
              <Card.Text className="mt-5">Read Full Article</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="bg-blue text-white mb-4">
            <Card.Img variant="top" src={Rectangle3} />
            <Card.Body>
              <Card.Text>Sep 26, 2021</Card.Text>
              <Card.Title>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Card.Title>
              <Card.Text className="mt-5">Read Full Article</Card.Text>
            </Card.Body>
          </Card>

          <Card className="bg-blue text-white mb-1">
            <Card.Img variant="top" src={Rectangle4} />
            <Card.Body>
              <Card.Text>Sep 26, 2021</Card.Text>
              <Card.Title>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Card.Title>
              <Card.Text className="mt-5">Read Full Article</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
