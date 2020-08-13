import React, { Component } from "react";
import css from "./salary.module.css";
import M from "materialize-css";

export default class InputFullSalary extends Component {
  handleChange = (event) => {
    const { onType } = this.props;
    const salary = event.target.value;

    onType(salary);
  };

  render() {
    const { salary } = this.props;

    return (
      <div className={M.inputField}>
        <label className={css.label} for="salario">
          Salário
        </label>
        <input
          id="salario"
          type="number"
          step="10"
          className={(css.inputSalary, M.materializeTextarea)}
          onChange={this.handleChange}
          placeholder={salary}
        />
      </div>
    );
  }
}
