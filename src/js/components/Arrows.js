import React, { PropTypes } from "react";
import * as moveTypes from '../constants/MoveTypes';

const arrow = <polyline points="45.63,75.8 0.375,38.087 45.63,0.375"/>

const Arrows = ({ moves: { top, bottom, left, right }, onMove }) =>
    <div>
      {left && <svg className="arrow arrow-left" onClick={onMove.bind(this, moveTypes.LEFT)}>
        {arrow}
      </svg>}
      {right && <svg className="arrow arrow-right" onClick={onMove.bind(this, moveTypes.RIGHT)}>
        {arrow}
      </svg>}
      {top && <svg className="arrow arrow-top" onClick={onMove.bind(this, moveTypes.TOP)}>
        {arrow}
      </svg>}
      {bottom && <svg className="arrow arrow-bottom" onClick={onMove.bind(this, moveTypes.BOTTOM)}>
        {arrow}
      </svg>}
  </div>

Arrows.propTypes = {
  onMove: PropTypes.func.isRequired,
  moves: PropTypes.shape({
    top: React.PropTypes.bool.isRequired,
    bottom: React.PropTypes.bool.isRequired,
    left: React.PropTypes.bool.isRequired,
    right: React.PropTypes.bool.isRequired
  }).isRequired
};

export default Arrows;
