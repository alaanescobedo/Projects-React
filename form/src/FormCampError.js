class FormMessageError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p className="form__camp--msg-error">{this.props.message}</p>;
  }
}
