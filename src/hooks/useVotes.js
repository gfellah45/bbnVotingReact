import { useState } from "react";

const useVoting = (staticHouseMates, maximumVotes) => {
  const [vote, setVote] = useState(maximumVotes);
  const [housemates, updateHousemates] = useState(staticHouseMates);
  const [errorState, setErrorState] = useState(false);

  const voteHM = (housemate) => {
    setErrorState(false);
    if (vote <= 0) {
      return;
    }
    const housematesCopy = [];
    housemate.votes = housemate.votes + 1;

    setVote((vote) => vote - 1);

    housemates.forEach((hmates) => {
      if (hmates.name === housemate.name) {
        hmates = housemate;
      }
      housematesCopy.push(hmates);
    });
    updateHousemates(housematesCopy);
  };

  const downVote = (housemate) => {
    setErrorState(false);
    if (housemate.votes <= 0) {
      return;
    }
    const housematesCopy = [];
    housemate.votes = housemate.votes - 1;
    setVote((vote) => vote + 1);

    housemates.forEach((hmates) => {
      if (hmates.name === housemate.name) {
        hmates = housemate;
      }
      housematesCopy.push(hmates);
    });
    updateHousemates(housematesCopy);
  };

  const castVote = (vote, housemate) => {
    setErrorState(false);

    const isVotingPossible = checkIfVotingIsPossible(vote, housemate);

    if (isVotingPossible) {
      housemate.votes = vote;
    }
    const housematesCopy = [];

    housemates.forEach((hmates) => {
      if (hmates.name === housemate.name) {
        hmates = housemate;
      }
      housematesCopy.push(hmates);
    });
    updateHousemates(housematesCopy);
    console.log(housemates);

    setNumberOfRemainingVotes();
  };

  const setNumberOfRemainingVotes = () => {
    let totalVotesNow = 0;
    housemates.forEach((hmates) => {
      totalVotesNow = totalVotesNow + hmates.votes;
    });

    setVote(maximumVotes - totalVotesNow);
  };

  const checkIfVotingIsPossible = (vote, housemate) => {
    const housematesCopy = [];
    housemate.votes = vote;
    housemates.forEach((hmates) => {
      if (hmates.name === housemate.name) {
        hmates = housemate;
      }
      housematesCopy.push(hmates);
    });

    let totalVotesNow = 0;
    housemates.forEach((hmates) => {
      totalVotesNow = maximumVotes + hmates.votes;
    });

    if (maximumVotes > totalVotesNow) {
      return false;
    }
    return true;
  };
  const percentageOfVoteRemaining = () => {
    const percentage = (vote / maximumVotes) * 100;

    return Math.floor(percentage);
  };

  return {
    vote,
    housemates,
    errorState,
    castVote,
    downVote,
    voteHM,
    setVote,
    setErrorState,
    checkIfVotingIsPossible,
    setNumberOfRemainingVotes,
    percentageOfVoteRemaining,
  };
};

export default useVoting;
