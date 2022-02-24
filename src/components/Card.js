import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
  const { fileName } = props;
  return (
    <div className="card">
      <img src={fileName} />
    </div>
  );
};

Card.propTypes = {
  fileName: PropTypes.string,
};
