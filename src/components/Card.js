import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
  const { fileName, backSide, setShow } = props;
  const [isShow, setIsShow] = React.useState(false);

  const onClickCard = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="card" onClick={onClickCard}>
      {isShow ? (
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
  setShow: PropTypes.func,
};
