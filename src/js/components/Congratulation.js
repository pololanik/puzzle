import React, { PropTypes } from "react";

const Congratulation = ({show, onNext, isLast}) =>
  <div className={"congratulation "+(show ? 'show' : '')}>
    <div className="label">Congratulation</div>
    <div>
      {!isLast && <button className="btn btn-success" onClick={onNext}>Next level</button>}
    </div>
  </div>

Congratulation.propTypes = {
  show: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired
};

export default Congratulation;
