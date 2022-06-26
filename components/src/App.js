import { faker } from "@faker-js/faker";

export default function App() {
  return (
    <>
      <div className="ui comments container">
        <h3 className="ui dividing header">Comments</h3>
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a href="/" className="author">
              Matt
            </a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">How artistic!</div>
          </div>
        </div>
      </div>
    </>
  );
}
