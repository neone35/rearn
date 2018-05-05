import React from 'react';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import { green800, green600 } from 'material-ui/styles/colors';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import _ from 'lodash';

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

  renderCardContents(card) {
    const cardContents = (
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
            }
      </CardText>
    );
    return cardContents;
  }

  render() {
    const { fields } = this.props;
    const cardsMapped = fields.map((card, index) => (
      <div className="col-sm-4" key={['card', index].join('')}>
        <Card>
          <CardHeader
            title={`Card ${index + 1}`}
            showExpandableButton
            closeIcon={// eslint-disable-next-line
                <span onClick={() => fields.remove(index)}>
                  <CancelIcon />
                </span>}
            openIcon={// eslint-disable-next-line
                <span onClick={() => fields.remove(index)}>
                  <CancelIcon />
                </span>}
          />
          {this.renderCardContents(card)}
        </Card>
      </div>));
    const cardsRows = _.chunk(cardsMapped, 3); // 3 rows
    return (
      <div>
        {cardsRows.map((row, index) => (
          <div className="row no-gutters" key={['row', index].join('')}>
            {row}
          </div>))
        }
        <FlatButton
          onClick={() => fields.push({})}
          icon={<AddIcon color="white" />}
          label="New card"
          fullWidth
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
