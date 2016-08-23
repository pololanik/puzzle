import React, { PropTypes } from "react";
import Arrows from './Arrows';
import BlockTypes from '../constants/BlockTypes';
import classNames from 'classnames'

const getPoints = (type, size) =>
  BlockTypes[type].canvas.map((i) => `${i.x*size},${i.y*size}`).join(' ')


const Block = ({ type, size, onClick, active, moves, onMove }) =>
  <div className={classNames('block', {active, 'is-main': type === 0})} style={{ width: BlockTypes[type].width*size, height: BlockTypes[type].height*size }}>
    <svg  style={{width: BlockTypes[type].width*size, height: BlockTypes[type].height*size }}>
      <polygon onClick={onClick} points={getPoints(type, size)}/>
    </svg>
    {active && <Arrows onMove={onMove} moves={moves}/>}
  </div>

Block.propTypes = {
  type: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  active: PropTypes.bool,
  moves: PropTypes.shape({
    top: React.PropTypes.bool.isRequired,
    bottom: React.PropTypes.bool.isRequired,
    left: React.PropTypes.bool.isRequired,
    right: React.PropTypes.bool.isRequired
  })
};

export default Block;
