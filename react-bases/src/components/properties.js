import React from "react";
//°PropTypes npm - https://www.npmjs.com/package/prop-types
import PropTypes from "prop-types";

export default function Properties(props) {
  return (
    <div>
      <h2>{props.byDefault}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "True" : "False"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{`${props.object.name} - ${props.object.email}`}</li>
        <li>{props.array.map(props.function).join(", ")}</li>
        <li>{props.reactElement}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
}

Properties.defaultProps = {
  byDefault: "Properties",
};

Properties.propTypes = {
  number: PropTypes.number.isRequired,
};
