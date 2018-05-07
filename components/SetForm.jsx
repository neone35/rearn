import React from 'react';
import { FieldArray, Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { CardTitle } from 'material-ui/Card';
import CardForm from '../components/CardForm';

const setName = field => (
  <div className="input-row">
    <TextField
      {...field.input}
      id="set-name"
      hintText={field.hint}
    />
    {field.meta.touched && field.meta.error &&
      <span className="error">{field.meta.error}</span>}
  </div>
);

class SetForm extends React.Component {
  componentDidMount() {
  }

  render() {
    // console.log(this.props);
    return (
      <form>
        <div className="container-fluid">
          <CardTitle>
            <Field
              name="setName"
              component={setName}
              hint="Set name"
            />
          </CardTitle>
          <FieldArray name="cards" component={CardForm} />
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'addset' })(SetForm);
