import React, { useState, useEffect } from "react";
import "./Poll.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PollItem from "../../components/PollItem/PollItem";
import AddPollItem from "../../components/AddPollItem/AddPollItem";
import {
  useGetPollApi,
  createPollOptionApi,
  pollVoteApi,
} from "../../api/poll";

import { BgSvg } from "../../assets/svg";

function Poll() {
  let [pollIndex, setPollsIndex] = useState(0);
  const [myVotes, updateMyVotes] = useState([]);
  let [data, setData] = useState(useGetPollApi().data.toJS());

  useEffect(() => {
    updateMyVotes(data.myVotes);
  }, [data.myVotes]);

  /**
   * Creates a new voting option in the db
   * @param {string} inputValue
   */
  const submitOption = (inputValue) => {
    setPollsIndex((pollIndex = data.pollOptions.length));
    let nextData = { ...data };
    nextData.pollOptions.push(
      createPollOptionApi({ message: inputValue }).toJS()
    );
    setData(nextData);
  };

  /**
   * Add or remove vote from/to state
   */
  const addVote = (id) => {
    let nextData = { ...data };
    if (nextData.myVotes.includes(id)) {
      let item = nextData.myVotes;
      nextData.myVotes = item.filter((item) => item !== id);
    } else {
      nextData.myVotes.push(id);
    }
    setData(nextData);
  };

  /**
   * Update votes i db
   */
  const submitVotes = () => {
    setData(pollVoteApi({ optionIds: myVotes }).toJS());
  };

  //Count votes
  let totalVotesCount = data.pollOptions.reduce((a, b) => a + b.votesCount, 0);

  //Sort array to make list look nice
  data.pollOptions.sort((a, b) => a.message - b.message).reverse();
  data.pollOptions.sort((a, b) => a.votesCount - b.votesCount).reverse();

  return (
    <div className="poll">
      <div className="BgSvg">
        <BgSvg></BgSvg>
      </div>
      <Header title={data.message}></Header>
      <div className="poll__items">
        {data &&
          data.pollOptions.map((item, i) => {
            return (
              <PollItem
                key={i}
                index={i}
                data={data}
                totalVotesCount={totalVotesCount}
                isNewItem={item.order !== pollIndex}
                {...item}
                addVote={addVote}
              ></PollItem>
            );
          })}
      </div>
      <AddPollItem submitOption={submitOption}></AddPollItem>
      <div className="add-poll-item__btn">
        <button className="button" onClick={submitVotes}>
          Submit
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Poll;
