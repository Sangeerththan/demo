import React    from "react";
import template from "./SecondComponent.jsx";

class SecondComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default SecondComponent;
