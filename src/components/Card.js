import React from "react";

export const Card = (props) => {
  const { fileName, backSide, handleClickCard, index, show } = props;

  const onClickCard = () => {
    handleClickCard(index, fileName);
  };
  return (
    <div className="card" onClick={onClickCard}>
      {show ? (
        <img src={fileName} alt="card" />
      ) : (
        <img src={backSide} alt="card" />
      )}
    </div>
  );
};
