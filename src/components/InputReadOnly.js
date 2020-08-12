import React, { Component } from "react";
import InputReadOnlyItem from "./InputReadOnlyItem";
import css from "./salary.module.css";

export default class InputReadOnly extends Component {
  constructor() {
    super();

    this.state = {
      taxes: 0,
    };
  }

  // handleValue = () => {
  //   console.log("teste");
  //   const { id } = this.props;

  //   console.log(id);
  //   switch (id) {
  //     case "1":
  //       this.handleINSSBase;
  //       break;

  //     case "2":
  //       break;

  //     case "3":
  //       break;

  //     case "4":
  //       break;

  //     case "5":
  //       break;

  //     default:
  //       break;
  //   }
  // };

  render() {
    const { salary, taxes } = this.props;
    console.log(taxes);

    return (
      <div>
        <div className={css.containerReadOnly}>
          <InputReadOnlyItem
            description="Base INSS: "
            salary={salary}
            id="1"
            onChange={this.handleINSSBase}
            taxes={taxes}
          />
          <InputReadOnlyItem
            description="Desconto INSS: "
            salary={salary}
            id="2"
          />
          <InputReadOnlyItem description="Base IRPF: " salary={salary} id="3" />
          <InputReadOnlyItem
            description="Desconto IRPF: "
            salary={salary}
            id="4"
          />
        </div>
        <div className={css.containerReadOnly}>
          <InputReadOnlyItem
            description="Salário líquido:"
            salary={salary}
            id="5"
          />
        </div>
      </div>
    );
  }
}
