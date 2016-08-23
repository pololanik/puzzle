import React, { PropTypes } from "react";
import Levels from '../constants/Levels';
import classNames from 'classnames';

const LevelsList = ({activeLevel, onChangeLevel}) =>
  <div className="levels-list">
    {Levels.map((l,i) =>
      <a key={i} className={classNames('btn', 'btn-link',{disabled: activeLevel === i})} onClick={onChangeLevel.bind(this, i)}>
      level #{i+1}
      </a>
    )}
  </div>

LevelsList.propTypes = {
  activeLevel: PropTypes.number.isRequired,
  onChangeLevel: PropTypes.func.isRequired
};

export default LevelsList;
