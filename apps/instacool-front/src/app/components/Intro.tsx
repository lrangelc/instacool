import React from 'react';

interface IIntroProps {
  text?: string;
  dato?: number;
}

interface IIntroState {
  text: string;
  dato: number;
}

export default class Intro extends React.Component<IIntroProps, IIntroState> {
  public state = {
    text: 'Soy un texto del estado',
    dato: this.props.dato ?? 10,
  };

  public render() {
    const { text } = this.props;
    const t = text ? text : this.state.text;

    return (
      <>
        <p className="App-intro" onClick={this.handleClick}>
          <span>{t}</span>
        </p>
        <p>{this.state.dato}</p>
        <button onClick={this.buttonClick}>Click me :)</button>
      </>
    );
  }

  private buttonClick = () => {
    this.setState({
      dato: this.state.dato + 1,
    });
  };

  private handleClick = () => {
    this.setState({
      text: 'Me actualice!',
    });
  };
}
