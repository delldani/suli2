import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
  const { fileName, backSide } = props;
  const [isShow, setShow] = React.useState(true);

  const onClickCard = () => {
    setShow(!isShow);
  };

  return (
    <div className="card" onClick={onClickCard}>
      {isShow ? <img src={fileName} /> : <img src={backSide} />}
    </div>
  );
};

Card.propTypes = {
  fileName: PropTypes.string,
  backSide: PropTypes.string,
};
