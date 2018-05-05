import React from 'react';
import { Fields, Field, reduxForm } from 'redux-form';
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
  constructor(props) {
    super(props);
    this.state = { cardsNumber: 1, cardsArray: [] };
    this.addCard = this.addCard.bind(this);
  }

  componentDidMount() {
  }

  addCard() {
    this.setState({ cardsNumber: this.state.cardsNumber + 1 });
    const num = this.state.cardsNumber;
    const cardInfo = this.state.cardsArray;
    const questionName = ['cardQuestion', num].join('');
    const answerName = ['cardAnswer', num].join('');
    const hintName = ['cardHint', num].join('');
    const key = ['card', num].join('');
    cardInfo.push({
      key, num, questionName, answerName, hintName,
    });
    this.setState({ cardsArray: cardInfo });
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
            {this.state.cardsArray &&
              this.state.cardsArray.map((card, index) => (
                <Card className="col-sm" key={card.key} number={card.num}>
                  <CardText>
                    <Fields
                      number={index}
                      names={[card.questionName, card.answerName, card.hintName]}
                      hints={['Ask for what?', 'What`s the answer?', 'Some help?']}
                      labels={['Question', 'Answer', 'Hint']}
                      component={CardForm}
                    />
                  </CardText>{
                  // eslint-disable-next-line
                }</Card>
              ))
            }
          </div>
        </div>
        <FlatButton
          onClick={this.addCard}
          icon={<AddIcon color="white" />}
          fullWidth
          label="New card"
          labelStyle={{ color: 'white' }}
          labelPosition="after"
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
