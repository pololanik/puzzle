import React, {PropTypes} from 'react';
import Block from './Block';
import {WIDTH, HEIGHT, BLOCK_SIZE} from '../constants/Settings';

const Panel = ({ currentBlockId, items, actions: { clickItem, move }}) =>
  <div className="panel" style={{ width: WIDTH*BLOCK_SIZE, height: HEIGHT*BLOCK_SIZE }}>
    <div className="panel-corner-left" style={{width: BLOCK_SIZE, height: BLOCK_SIZE}}/>
    <div className="panel-corner-right" style={{width: BLOCK_SIZE, height: BLOCK_SIZE}}/>
    {(items).map((b) => (
      <div key={b.id} className="block-wrap" style={{left: b.x*BLOCK_SIZE, top: b.y*BLOCK_SIZE}}>
        <Block color={b.color}
               onMove={(direction) => move(b.id, direction)}
               active={currentBlockId === b.id}
               onClick={clickItem.bind(this, b.id)}
               size={BLOCK_SIZE}
               type={b.type}
               moves={b.possibleMoves}
        />
      </div>
    ))}
  </div>

Panel.propTypes = {
  currentBlockId: PropTypes.number,
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default Panel;
