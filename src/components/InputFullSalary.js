import React, { Component } from "react";
import css from "./salary.module.css";

export default class InputFullSalary extends Component {
  handleChange = (event) => {
    const { onType } = this.props;
    const salary = event.target.value;

    onType(salary);
  };

  render() {
    // const { fullSalary } = this.props.value;

    return (
      <div className={css.inputItem}>
        <label>Salário:</label>
        <input
          type="text"
          className={css.inputSalary}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
