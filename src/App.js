import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import ProgressBarSalary from "./components/ProgressBarSalary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: "",
      taxes: "",
    };
  }

  handleChangeInputSalary = (salary) => {
    this.setState({ fullSalary: salary });
    this.handleINSSBase(salary);
  };

  render() {
    const { fullSalary, taxes } = this.state;

    return (
      <div className="container">
        <InputFullSalary
          // value={fullSalary}
          onType={this.handleChangeInputSalary}
        />
        <InputReadOnly salary={fullSalary} taxes={taxes} />
        <ProgressBarSalary />
      </div>
    );
  }

  //Fazer um Array com as taxas e enviá-las aos componentes, acessando o valor
  //Pelo número do índice

  handleINSSBase = (fullSalary) => {
    let baseValue = fullSalary;
    let baseINSS = 0;
    let tax = 0;

    while (baseValue !== 0) {
      if (baseValue > 6101.06) {
        tax = 713.1;
        baseValue = 0;
      } else {
        if (baseValue <= 6101.06 && baseValue >= 3134.41) {
          baseINSS = baseValue - 3134.4;
          tax += baseINSS * 0.14;
          baseValue = 3134.4;
        } else {
          if (baseValue <= 3134.4 && baseValue >= 2089.61) {
            baseINSS = baseValue - 2089.6;
            tax += baseINSS * 0.12;
            baseValue = 2089.6;
          } else {
            if (baseValue <= 2089.6 && baseValue >= 1045.01) {
              baseINSS = baseValue - 1045.01;
              tax += baseINSS * 0.09;
              baseValue = 1045.0;
            } else {
              if (baseValue <= 1045.0) {
                baseINSS = baseValue;
                tax += baseINSS * 0.075;
                baseValue = 0;
                break;
              }
            }
          }
        }
      }
    }

    this.setState({
      taxes: tax,
    });
  };
}
