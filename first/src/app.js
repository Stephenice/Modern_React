import logo from "./logo192.png";
import Style from "./index.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="reactimg" width={"40px"} />
          <ul className="nav-ul">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <p>React Course - Project 1</p>
      </header>
    </>
  );
}

function MainContent() {
  return (
    <>
      <h1> Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer>© 2022 Stephen development. All rights reserved.</footer>
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
