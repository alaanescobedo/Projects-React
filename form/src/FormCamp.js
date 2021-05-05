import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class FormCamp extends React.Component {
  render() {
    const { name, label, id, validated, change, type, errorMsg } = this.props;
    return (
      <div className="form__camp">
        <label htmlFor={name} className="form__camp--label">
          {label}
        </label>
        <div className="form__camp-input">
          <input
            name={name}
            id={id}
            className={`form__input ${
              (validated === true && 'input--success') ||
              (validated === false && 'input--error')
            }`}
            type={type}
            onChange={change}
          />
          {validated === false && (
            <p className="form__camp--msg-error">{errorMsg}</p>
          )}
          <FontAwesomeIcon
            className={`form__camp--input-icon ${
              this.props.validated ? 'input-icon--success' : ''
            }`}
            icon={faCheckCircle}
          />
        </div>
      </div>
    );
  }
}

export default FormCamp;
