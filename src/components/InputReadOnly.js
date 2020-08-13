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

  render() {
    const { salary, taxes, liquidSalary } = this.props;

    return (
      <div>
        <div className={css.containerReadOnly}>
          <InputReadOnlyItem
            description="Base INSS: "
            salary={salary}
            id={1}
            onChange={this.handleINSSBase}
            taxes={taxes[0]}
          />
          <InputReadOnlyItem
            description="Desconto INSS: "
            salary={salary}
            id={2}
            taxes={taxes[1]}
          />
          <InputReadOnlyItem
            description="Base IRPF: "
            salary={salary}
            id={3}
            taxes={taxes[2]}
          />
          <InputReadOnlyItem
            description="Desconto IRPF: "
            salary={salary}
            id={4}
            taxes={taxes[3]}
          />
        </div>
        <div className={css.containerReadOnly}>
          <InputReadOnlyItem
            description="Salário líquido:"
            salary={salary}
            id={5}
            taxes={taxes[4]}
          />
        </div>
      </div>
    );
  }
}
