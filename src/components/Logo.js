import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

export default function Logo({ black, className = '' }) {
  return black ? (
    <StaticImage
      src="../images/logo-black.svg"
      formats={['auto', 'webp', 'avif']}
      alt="logo"
      title="Go-IT"
      className={className}
      placeholder="blurred"
    />
  ) : (
    <StaticImage
      src="../images/logo.svg"
      formats={['auto', 'webp', 'avif']}
      alt="logo"
      title="Go-IT"
      className={className}
      placeholder="blurred"
    />
  );
}

Logo.propTypes = {
  // title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
