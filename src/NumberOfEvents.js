import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    ErrorText:""
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 ) {
      return this.setState({
        ErrorText: 'Please choose a number between 1 and 32',
        numberOfEvents: ''
      });
    } else if (value > 32) {
      return this.setState({
        ErrorText: 'Please choose a number between 1 and 32',
        numberOfEvents: ''
      });
    } else {
    this.setState({
      numberOfEvents: value,
      ErrorText: '',
    });
    this.props.updateEventCount(value);
  }
  };


  render() {
    return (
      <div className="NumberOfEvents"> 
        <p>Number of Events</p>
        <input
          type="number"
          className="eventNum"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.ErrorText} />
      </div>
    );
  }
}
export default NumberOfEvents;