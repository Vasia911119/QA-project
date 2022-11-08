import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ bcDropClose }) => {
  React.useEffect(() => {
    const handleEscape = evt => {
      if (evt.code !== 'Escape') return;
      window.removeEventListener('keydown', handleEscape);
      bcDropClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [bcDropClose]);

  return (
    <div
      className="fixed top-0 left-0 z-10 h-full w-full"
      onClick={bcDropClose}
    />
  );
};

export default Backdrop;

Backdrop.propTypes = {
  bcDropClose: PropTypes.func.isRequired,
};
