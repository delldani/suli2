import React from "react";
import PropTypes from "prop-types";

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

Card.propTypes = {
  fileName: PropTypes.string,
  backSide: PropTypes.string,
  handleClickCard: PropTypes.func,
  index: PropTypes.number,
  show: PropTypes.bool,
};
