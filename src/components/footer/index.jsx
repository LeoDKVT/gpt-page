import "./footer.css"
import BtnFooter from "../buttons/btn-footer";

export default function Footer() {
  return (
    <footer className="container-fluid text-center text-white bg-blue py-2">
      <h2 className="h1 degrade my-2"><strong>Do you want to step in to the <br /> future before others</strong></h2>
      <BtnFooter />

      <div className="container row m-auto">

        <div className="col-md-3 text-start mb-4">
            <h3>GPT-3</h3>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="col-md-3 text-start mb-4">
            <h4><strong>Links</strong></h4>
            <p><a href="#">Overons</a></p>
            <p><a href="#">Social Media</a></p>
            <p><a href="#">Counters</a></p>
            <p><a href="#">Contact</a></p>
        </div>

        <div className="col-md-3 text-start mb-4">
            <h4><strong>Company</strong></h4>
            <p><a href="#">Terms & Conditions</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Contact</a></p>
        </div>

        <div className="col-md-3 text-start">
            <h4><strong>Get in touch</strong></h4>
            <p><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></p>
            <p><a href="#">085-132567</a></p>
            <p><a href="#">info@payme.net</a></p>
        </div>

      </div>
      <p className="mt-4">© 2021 GPT-3. All rights reserved.</p>
    </footer>
  );
}
