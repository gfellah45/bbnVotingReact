import React from "react";

function Leadersboard({ housemates, votingBoard }) {
  const sortedHouseMates = housemates.sort((a, b) => b.votes - a.votes);

  const leadersBoard = () => {
    return sortedHouseMates.map((housemate) => (
      <div className="housemate">
        <div className="row   ">
          <div className=" col-3 mt-6">
            <img src={housemate.picture} alt={housemate.name} />
          </div>
          <div className="col-9 row d-flex align-self-center ">
            <h5 className="housemate__name col-6 text-right">
              {housemate.name}
            </h5>
            <div className="col-6 text-center ">
              <p
                style={{
                  backgroundColor: "#1E2A5A",
                  color: "white",
                  padding: "5px",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                }}
              >
                {housemate.votes}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="voting">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "10px",
        }}
      >
        {leadersBoard()}
      </div>
      <div className="text-center">
        <button className="m-auto" onClick={() => votingBoard()}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Leadersboard;
