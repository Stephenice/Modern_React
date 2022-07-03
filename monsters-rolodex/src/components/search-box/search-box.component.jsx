import { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  render() {
    const { onChangeHandle, className, placeholder } = this.props;
    return (
      <>
        <input
          type="search"
          className={className}
          placeholder={placeholder}
          onChange={onChangeHandle}
        />
      </>
    );
  }
}
