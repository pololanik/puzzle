//import './FriendListApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';
import { Panel, Congratulation, LevelsList } from '../components';
import Levels from '../constants/Levels';


class App extends Component {

  static propTypes = {
    currentBlockId: PropTypes.number,
    actions: PropTypes.object.isRequired,
    panelItems: PropTypes.array.isRequired,
    isFinish: PropTypes.bool.isRequired,
    levelId: PropTypes.number.isRequired
  };

  render () {
    const { actions, currentBlockId, panelItems, isFinish, levelId } = this.props;

    return (
        <div className="panel-wrap">
          <h1>level #{levelId+1}</h1>
          <Panel key={levelId} currentBlockId={currentBlockId} items={panelItems} actions={actions}/>
          <Congratulation show={isFinish} isLast={levelId === Levels.length - 1} onNext={actions.nextLevel}/>
          <LevelsList activeLevel={levelId} onChangeLevel={actions.changeLevel}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentBlockId: state.currentBlockId,
    panelItems: state.panelItems,
    isFinish: state.isFinish,
    levelId: state.levelId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
