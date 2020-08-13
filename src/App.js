import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import ProgressBarSalary from "./components/ProgressBarSalary";
import css from "./components/salary.module.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
      taxes: [0, 0, 0, 0, 0],
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
        <div className={css.title + " z-depth-3"}>
          <h2>React Salário</h2>
        </div>

        <InputFullSalary
          salary={fullSalary}
          onType={this.handleChangeInputSalary}
        />
        <InputReadOnly salary={fullSalary} taxes={taxes} />
        <ProgressBarSalary
          salary={fullSalary}
          IRPF={taxes[3]}
          INSS={taxes[1]}
        />
      </div>
    );
  }

  handleINSSBase = (fullSalary) => {
    let baseValue = fullSalary;
    let taxArray = this.state.taxes;
    let baseINSS = 0;
    let tax = 0;
    let taxIRPF = 0;

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

    let liquidSalary = fullSalary - tax;

    if (liquidSalary >= 4664.69) {
      taxIRPF = liquidSalary * 0.275 - 869.36;
    } else {
      if (liquidSalary <= 4664.68 && liquidSalary >= 3751.06) {
        taxIRPF = liquidSalary * 0.225 - 636.13;
      } else {
        if (liquidSalary <= 3751.05 && liquidSalary >= 2826.66) {
          taxIRPF = liquidSalary * 0.15 - 354.8;
        } else {
          if (liquidSalary <= 2826.65 && liquidSalary >= 1903.99) {
            taxIRPF = liquidSalary * 0.075 - 142.8;
          }
        }
      }
    }

    liquidSalary = liquidSalary - taxIRPF;

    console.log((taxIRPF * 100) / (fullSalary - tax));

    taxArray = [fullSalary, tax, fullSalary - tax, taxIRPF, liquidSalary];

    this.setState({
      taxes: taxArray,
    });
  };
}
