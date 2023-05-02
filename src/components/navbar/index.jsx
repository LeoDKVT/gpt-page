import "../navbar/styles.css";
import BtnHeader from "../buttons/btn-header";

export default function NavHome() {
  return (
    <header>
      <nav className="navbar  navbar-dark navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand text-white " href="#home">
            <strong>GPT-3</strong>
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link me-2 " href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2" href="#whats-is-gpt">
                  What is GPT?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2" href="#open-ai">
                  Open AI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2" href="#case-studies">
                  Case Studies
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link me-2" href="#library">
                  Library
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link me-2 " href="#home">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <BtnHeader />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
