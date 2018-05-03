import React from 'react';
import { Fields, Field, reduxForm, submit } from 'redux-form';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import { green800, green600 } from 'material-ui/styles/colors';
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
        <FlatButton
          icon={<AddIcon color="white" />}
          fullWidth
          backgroundColor={green800}
          hoverColor={green600}
        />
      </form>
    );
  }
}

const customSubmit = (values) => {
  console.log(values);
};

export default reduxForm({
  form: 'addset',
  onSubmit: customSubmit,
})(SetForm);
