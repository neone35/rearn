import React from 'react';
import { Fields, Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';
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
  // constructor(props) {
  //   super(props);
  //   this.state = { showHintInput: false };
  //   this.handleHint = this.handleHint.bind(this);
  // }

  componentDidMount() {
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(values => console.log(values))}>
        <div className="container-fluid">
          <CardTitle>
            <Field
              name="setName"
              component={setName}
              hint="Set name"
            />
          </CardTitle>
          <div className="row">
            <Card className="col-sm">
              <CardText>
                <Fields
                  names={['cardQuestion', 'cardAnswer', 'cardHint']}
                  hints={['Ask for what?', 'What`s the answer?', 'Some help?']}
                  labels={['Question', 'Answer', 'Hint']}
                  component={CardForm}
                />
              </CardText>
            </Card>
            <Card className="col-sm">
              <CardText>
                <Fields
                  names={['cardQuestion', 'cardAnswer', 'cardHint']}
                  hints={['Ask for what?', 'What`s the answer?', 'Some help?']}
                  labels={['Question', 'Answer', 'Hint']}
                  component={CardForm}
                />
              </CardText>
            </Card>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'addset' })(SetForm);
