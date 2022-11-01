import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

export default function Logo({ title, className = '' }) {
  return (
    <StaticImage
      src="../images/logo.svg"
      formats={['auto', 'webp', 'avif']}
      alt={title}
      title={title}
      className={className}
      placeholder="blurred"
    />
  );
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
