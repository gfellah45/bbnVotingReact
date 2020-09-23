import React, { useState, useEffect } from "react";

export default function Housemate({
  housemate,
  onVote,
  downVote,
  castVote,
  housemates,
  maximumVotes,
}) {
  const [votes, setVotes] = useState(housemate.votes);

  useEffect(() => {
    if (votes.length > 0) {
      const nn = parseInt(votes);
      castVote(nn);
    }
  }, [votes, castVote]);

  useEffect(() => {
    let mxVotes = maximumVotes();
    if (votes > mxVotes) return;
    setVotes(housemate.votes);
  }, [housemates, housemate.votes, maximumVotes, votes]);

  return (
    <div className="housemate">
      <div className="row">
        <div className="col-3">
          <img src={housemate.picture} alt={housemate.name} />
        </div>
        <div className="col-9">
          <h5 className="housemate__name">{housemate.name}</h5>
          <div className="housemate__vote">
            <button
              className="housemate__vote__control"
              onClick={() => downVote()}
            >
              -
            </button>
            <div className="housemate__vote__divider" />
            <input
              type="text"
              className="housemate__vote__count"
              onChange={(e) => setVotes(e.target.value)}
              value={votes}
            />
            <div className="housemate__vote__divider" />
            <button
              className="housemate__vote__control"
              onClick={() => onVote()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
