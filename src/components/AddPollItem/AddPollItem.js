import React, { useState } from 'react';
import './AddPollItem.scss'
import {AddSvg} from '../../assets/svg'

function PollItem(props) {
  const [inputValue, setText] = useState('');
  const showBtn = inputValue !=='' ? true : false;

  function handleChange(e){
    setText(e.target.value);
  }

  function handleSubmit(e){
    setText('');
    props.submitOption(inputValue)
  }

  return (
    <div className="add-poll-item">
      <AddSvg></AddSvg>
      <input placeholder="Add option" type="text" value={inputValue} onChange={(e)=> handleChange(e)} />
      { showBtn &&
        <button className="button" onClick={()=>{handleSubmit()}}>Add</button>
      }
    </div>
  );
}
export default PollItem
