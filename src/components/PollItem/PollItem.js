import React from 'react';
import './PollItem.scss'
import {RadioUncheckedSvg} from '../../assets/svg'
import {RadioCheckedSvg} from '../../assets/svg'

function PollItem(props) {

  /**
   * Vote
   */
  function handleChange(){
    props.addVote(props.id)
  }
  
  const itemActive = props.data.myVotes.includes(props.id);
  let checkboxIcon = itemActive ? <RadioCheckedSvg></RadioCheckedSvg>:<RadioUncheckedSvg></RadioUncheckedSvg>;
  return (
      <div className="poll-item" style={{animationDelay: `${props.isNewItem ? props.index * 50: 0}ms`, transform:`translate(0,${props.index*44}px)`}}>
        <div className="poll-item__status" style={{width: `${100*props.votesCount/props.totalVotesCount}%`}}></div>
        <label htmlFor={props.id}>
          {checkboxIcon}
          <input type="checkbox" name="poll-option" checked={itemActive} id={props.id} onChange={() => handleChange()} />
          {props.message}
        </label>
        <p className="poll-item__count">{Math.round(100*props.votesCount/props.totalVotesCount)}%</p>
      </div>
  );
}
export default PollItem