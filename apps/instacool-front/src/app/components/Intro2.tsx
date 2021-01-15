import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setear, incrementar, decrementar } from '../../reducers';

interface IActionCreator {
  (): { type: string; payload?: number };
}

interface IActionCreatorPayload {
  (payload?: number): { type: string; payload?: number };
}

interface IIntro2 {
  valor: number;
  incrementar: IActionCreator;
  decrementar: IActionCreator;
  setear: IActionCreatorPayload;
}

interface IIntro2State {
  valor?: number;
}

class Intro2 extends Component<IIntro2, IIntro2State> {
  handleSetear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { setear } = this.props;
    if (this.state) {
      const { valor } = this.state;
      setear(Number(valor));
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  public render() {
    const { incrementar, decrementar, valor } = this.props;
    return (
      <div className="App-intro2">
        <p>Valor actual: {valor}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <input name="valor" onChange={this.handleChange} />
        <button onClick={this.handleSetear}>Setear</button>
      </div>
    );
  }
}

const mapStateToProps = (state: number) => {
  //   console.log({ state });
  return { valor: state };
};

const mapDispatchToProps = (dispatch: any) => ({
  setear: (payload: number) => dispatch(setear(payload)),
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro2);
