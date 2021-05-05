import React from 'react';

class FormCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form__camp-checkbox">
        <input
          name={this.props.name}
          type="checkbox"
          id={this.props.id}
          className={this.props.className}
          onChange={this.props.change}
        />
        <label htmlFor={this.props.name} className="form__terms-label">
          {this.props.renderTxt}
        </label>
      </div>
    );
  }
}

export default FormCheckbox;
