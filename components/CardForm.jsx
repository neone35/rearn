import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hintExpanded: false };
    this.handleHintExpand = this.handleHintExpand.bind(this);
  }

  handleHintExpand() { this.setState({ hintExpanded: true }); }

  render() {
    const { ...fields } = this.props;
    return (
      <div>
        <div className="input-row">
          <TextField
            id="card-question"
            {...fields.names[0].input}
            hintText={fields.hints[0]}
            floatingLabelText={fields.labels[0]}
            multiLine
            fullWidth
            rows={1}
            rowsMax={4}
          />
        </div>
        <div className="input-row">
          <TextField
            id="card-answer"
            {...fields.names[1].input}
            hintText={fields.hints[1]}
            floatingLabelText={fields.labels[1]}
            multiLine
            fullWidth
            rows={1}
            rowsMax={4}
          />
        </div>
        {this.state.hintExpanded ?
          <div className="input-row">
            <TextField
              id="card-hint"
              {...fields.names[2].input}
              hintText={fields.hints[2]}
              floatingLabelText={fields.labels[2]}
              multiLine
              fullWidth
              rows={1}
              rowsMax={4}
            />
          </div>
        :
          <FlatButton
            label="Add hint"
            fullWidth
            onClick={this.handleHintExpand}
          />
        }
      </div>
    );
  }
}

export default CardForm;
