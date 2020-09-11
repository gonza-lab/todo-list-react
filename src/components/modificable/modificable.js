import React, { Component } from 'react';
import './modificable.css';

class Modificable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: this.props.blur,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus() {
    this.setState({
      focus: true,
    });
  }

  handleBlur() {
    this.setState({
      focus: false,
    });
  }

  render() {
    const { focus } = this.state;
    const { onChange, value } = this.props;
    return (
      <input
        onChange={onChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        readOnly={!focus}
        className={'modificable ' + (this.props.className || '')}
        type="text"
        value={value}
      />
    );
  }
}

export default Modificable;
