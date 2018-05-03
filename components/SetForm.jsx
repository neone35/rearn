import React from 'react';
import { Fields, Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

const renderCard = fields => (
  <div>
    <div className="input-row">
      <TextField
        id="card-question"
        {...fields.cardQuestion.input}
        hintText={fields.hints[0]}
        floatingLabelText={fields.labels[0]}
        multiLine
        fullWidth
        rows={1}
        rowsMax={4}
      />
      {fields.cardQuestion.meta.touched && fields.cardQuestion.meta.error &&
      <span className="error">{fields.cardQuestion.meta.error}</span>}
    </div>
    <div className="input-row">
      <TextField
        id="card-answer"
        {...fields.cardAnswer.input}
        hintText={fields.hints[1]}
        floatingLabelText={fields.labels[1]}
        multiLine
        fullWidth
        rows={1}
        rowsMax={4}
      />
      {fields.cardAnswer.meta.touched && fields.cardAnswer.meta.error &&
      <span className="error">{fields.cardAnswer.meta.error}</span>}
    </div>
    <div className="input-row">
      <TextField
        id="card-hint"
        {...fields.cardHint.input}
        hintText={fields.hints[2]}
        floatingLabelText={fields.labels[2]}
        multiLine
        fullWidth
        rows={1}
        rowsMax={4}
      />
      {fields.cardHint.meta.touched && fields.cardHint.meta.error &&
        <span className="error">{fields.cardHint.meta.error}</span>}
    </div>
  </div>
);

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
                  component={renderCard}
                />
              </CardText>
            </Card>
            <Card className="col-sm">
              <CardText>
                <Fields
                  names={['cardQuestion', 'cardAnswer', 'cardHint']}
                  hints={['Ask for what?', 'What`s the answer?', 'Some help?']}
                  labels={['Question', 'Answer', 'Hint']}
                  component={renderCard}
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
