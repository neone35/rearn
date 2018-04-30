import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SetForm extends React.Component {
  componentDidMount() {
  }

  render() {
    const { handleSubmit } = this.props;
    // console.log(this.props);
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field autoComplete="off" name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field autoComplete="off" name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field autoComplete="off" name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'addset' })(SetForm);
