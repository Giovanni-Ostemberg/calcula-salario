import React, { Component } from "react";
import css from "./salary.module.css";
import M from "materialize-css";

export default class InputReadOnlyItem extends Component {
  handleCalc = (event) => {
    const { onChange, salary } = this.props;

    onChange(salary);
  };

  render() {
    const { description, salary, id, taxes } = this.props;
    // const { taxes } = this.state;

    const numberFormat = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const numberFormat2 = new Intl.NumberFormat("pt-BR", {
      style: "decimal",
      maximumSignificantDigits: 4,
    });

    let formatedSalary = numberFormat.format(salary);
    let formatedTaxes = numberFormat.format(taxes);

    console.log(id === 1);

    return (
      <div className={css.inputReadOnlyItem}>
        <label className={css.label}>{description}</label>
        {/* <input
          type="hidden"
          id={id + "_hidden"}
          value={
            "R$ " + salary === taxes
              ? salary + "(" + (taxes / salary) * 100 + "%)"
              : taxes
          }
          onChange={this.handleCalc}
        /> */}
        <input
          className={M.materializeTextarea}
          disabled
          id={"input" + id}
          value={
            id !== 1 && id !== 3 && salary !== 0
              ? formatedTaxes +
                "(" +
                numberFormat2.format((taxes / salary) * 100) +
                " %)"
              : formatedTaxes
          }
        />
      </div>
    );
  }
}
