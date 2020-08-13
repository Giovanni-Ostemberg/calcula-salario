import React, { Component } from "react";
import css from "./salary.module.css";

export default class ProgressBarSalary extends Component {
  render() {
    const { INSS, IRPF, salary } = this.props;

    let pctInss = (INSS * 100) / salary;
    let pctIrpf = (IRPF * 100) / salary;

    return (
      <div className={css.progressBar}>
        <div
          style={{ width: pctInss + "%" }}
          className={css.inssBar + " z-depth-2"}
          title={pctInss + "%"}
        >
          {" "}
          <p></p>
        </div>
        <div
          style={{ width: pctIrpf + "%" }}
          className={css.irpfBar + " z-depth-2"}
          title={pctIrpf + "%"}
        >
          {" "}
          <p></p>
        </div>
        <div
          style={{ width: 100 - pctInss - pctIrpf + "%" }}
          className={css.restBar + " z-depth-2"}
          title={100 - pctInss - pctIrpf + "%"}
        >
          {" "}
          <p></p>
        </div>
      </div>
    );
  }
}
