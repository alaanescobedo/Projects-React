import React from 'react';
import './Form.css';
import FormCamp from './FormCamp';
import FormCheckbox from './FormCheckbox';
import Validation from './utils/validationRegex';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phone: '',
      validated: {
        user: null,
        name: null,
        password: null,
        passwordConfirm: null,
        email: null,
        phone: null,
        terms: false,
      },
      formIsCorrect: true,
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const stateValidatedValues = Object.values(this.state.validated);
    const formIsCorrect = stateValidatedValues.every((value) => value === true);

    this.setState({
      formIsCorrect,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;

    const isValid = this.validateCamp(e.target);

    this.setState({
      [name]: value,
      validated: {
        ...this.state.validated,
        [name]: isValid ? true : false,
      },
    });
  }

  handleRemove(e) {
    console.log(e.target);
    setTimeout(() => {
      e.target.remove();
    }, 3000);
  }

  showPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  validateCamp(camp) {
    const { name, value } = camp;

    if (name === 'terms') {
      return !this.state.validated.terms;
    }

    const [, expression] = Object.entries(Validation)
      .filter((expression) => {
        if (name === 'passwordConfirm') {
          return expression[0] === 'password';
        }
        return expression[0] === name;
      })
      .flat();

    return expression.test(value);
  }

  render() {
    const {
      password,
      passwordConfirm,
      validated,
      formIsCorrect,
      showPassword,
    } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormCamp
          label="User"
          name="user"
          id="user"
          type="text"
          validated={validated.user}
          change={this.handleChange}
          errorMsg="Username must be 4 to 16 characters long and can only contain
            numbers, letters, and underscore."
        />
        <FormCamp
          label="Name"
          name="name"
          id="name"
          type="text"
          validated={validated.name}
          change={this.handleChange}
          errorMsg="Name can only contain numbers, letters, and underscore."
        />
        <FormCamp
          label="Password"
          name="password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          validated={validated.password}
          change={this.handleChange}
          errorMsg="Password must be 4 to 12 characters long."
        />
        <FormCamp
          label="Password Confirmed"
          name="passwordConfirm"
          id="passwordConfirm"
          type={showPassword ? 'text' : 'password'}
          validated={validated.passwordConfirm && password === passwordConfirm}
          change={this.handleChange}
          errorMsg="Both passwords must be the same."
        />
        <FormCamp
          label="Email"
          name="email"
          id="email"
          type="email"
          validated={validated.email}
          change={this.handleChange}
          errorMsg="Mail can only contain letters, numbers and underscore."
        />
        <FormCamp
          label="Phone"
          name="phone"
          id="phone"
          type="tel"
          validated={validated.phone}
          change={this.handleChange}
          errorMsg="Please provide a phone number."
        />
        <FormCheckbox
          name="terms"
          id="terms"
          className="form__terms"
          change={this.handleChange}
          renderTxt="I accept the terms and conditions"
        />
        <FormCheckbox
          name="showPassword"
          id="showPassword"
          className="form__terms"
          change={this.showPassword}
          renderTxt="Show Password"
        />

        {formIsCorrect && (
          <p className={`form__send-form send-success`}>
            {'Message sent successfully'}
          </p>
        )}
        <input className="form__submit" type="submit" />
      </form>
    );
  }
}

export default Form;
