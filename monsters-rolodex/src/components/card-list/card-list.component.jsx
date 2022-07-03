import { Component } from "react";
import "./card-list.styles.css";
import "./card.styles.css";
import Card from "../card/card.component";

export default class CardList extends Component {
  render() {
    console.log(this.props);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
