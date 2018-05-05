import React from 'react';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import { green800, green600 } from 'material-ui/styles/colors';
import { Card, CardText, CardHeader } from 'material-ui/Card';

const renderField = props => (
  <div className="input-row">
    <TextField
      id={props.name}
      {...props.input}
      hintText={props.hint}
      floatingLabelText={props.label}
      multiLine
      fullWidth
      rows={1}
      rowsMax={4}
    />
  </div>
);

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hintExpanded: false };
    this.handleHintExpand = this.handleHintExpand.bind(this);
  }

  handleHintExpand() { this.setState({ hintExpanded: true }); }

  render() {
    const { fields } = this.props;
    return (
      <div>
        {fields.map((card, index) =>
                (<Card key={['card', index].join('')}>
                  <CardHeader
                    title={`Card ${index + 1}`}
                    showExpandableButton
                    closeIcon={// eslint-disable-next-line
                      <span onClick={() => fields.remove(index)}>
                        <CancelIcon />
                      </span>
                    }
                  />
                  <CardText>
                    <Field
                      name={`${card}.question`}
                      label="Question"
                      type="text"
                      component={renderField}
                      hint="Ask for what?"
                    />
                    <Field
                      name={`${card}.answer`}
                      label="Answer"
                      type="text"
                      component={renderField}
                      hint="What`s the answer?"
                    />
                    {this.state.hintExpanded ?
                      <Field
                        name={`${card}.hint`}
                        label="Hint"
                        type="text"
                        component={renderField}
                        hint="Some help?"
                      />
                        :
                      <FlatButton
                        label="Add hint"
                        fullWidth
                        onClick={this.handleHintExpand}
                      />
                    }{
                    // eslint-disable-next-line
                    }</CardText></Card>))
        }
        <FlatButton
          onClick={() => fields.push({})}
          icon={<AddIcon color="white" />}
          fullWidth
          label="New card"
          labelStyle={{ color: 'white' }}
          labelPosition="after"
          backgroundColor={green800}
          hoverColor={green600}
        />
      </div>
    );
  }
}

export default CardForm;
