import logo from "./logo192.png";
import "./index.css";

function Header() {
  return (
    <>
      <nav>
        <img src={logo} alt="reactimg" width={"40px"} />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </>
  );
}

function MainContent() {
  return (
    <main>
      <h1 className="main--title"> Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <>
      <footer style={{ color: "white", backgroundColor: "gray" }}>
        © 2022 Stephen development. All rights reserved.
      </footer>
    </>
  );
}

const App = function () {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
