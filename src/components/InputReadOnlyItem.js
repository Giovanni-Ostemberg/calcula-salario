import React, { Component } from "react";
import css from "./salary.module.css";

export default class InputReadOnlyItem extends Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       taxes: 0,
  //     };
  //   }

  /*handleValue = () => {
    console.log("teste");
    const { id } = this.props;

    console.log(id);
    switch (id) {
      case "1":
        this.handleINSSBase;
        break;

      case "2":
        break;

      case "3":
        break;

      case "4":
        break;

      case "5":
        break;

      default:
        break;
    }
  };*/

  //   handleINSSBase = (event) => {
  //     let baseValue = event.target.value;
  //     console.log("teste" + baseValue);
  //     let baseINSS = 0;
  //     let tax = 0;

  //     while (baseValue !== 0) {
  //       if (baseValue > 6101.06) {
  //         tax = 713.1;
  //         baseValue = 0;
  //       } else {
  //         if (baseValue <= 6101.06 && baseValue >= 3134.41) {
  //           baseINSS = baseValue - 3134.4;
  //           tax += baseINSS * 0.14;
  //           baseValue = 3134.4;
  //         } else {
  //           if (baseValue <= 3134.4 && baseValue >= 2089.61) {
  //             baseINSS = baseValue - 2089.6;
  //             tax += baseINSS * 0.12;
  //             baseValue = 2089.6;
  //           } else {
  //             if (baseValue <= 2089.6 && baseValue >= 1045.01) {
  //               baseINSS = baseValue - 1045.01;
  //               tax += baseINSS * 0.09;
  //               baseValue = 1045.0;
  //             } else {
  //               if (baseValue <= 1045.0) {
  //                 baseINSS = baseValue;
  //                 tax += baseINSS * 0.075;
  //                 baseValue = 0;
  //                 break;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }

  //     this.setState({
  //       taxes: tax,
  //     });
  //   };

  //   componentDidUpdate() {
  //     return this.handleValue;
  //   }
  handleCalc = (event) => {
    console.log("TESTE");
    const { onChange, salary } = this.props;

    onChange(salary);
  };

  render() {
    const { description, salary, id, taxes } = this.props;
    // const { taxes } = this.state;

    return (
      <div className={css.inputReadOnlyItem}>
        <label>{description}</label>
        <input
          type="hidden"
          id={id + "_hidden"}
          value={salary}
          onChange={this.handleCalc}
        />
        <input disabled id={id} value={taxes} />
      </div>
    );
  }
}
