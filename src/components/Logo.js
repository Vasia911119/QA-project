import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

export default function Logo({ title, className, rotate = false }) {
  return rotate ? (
    <StaticImage
      src="../images/logo.svg"
      formats={['auto', 'webp', 'avif']}
      alt={title}
      title={title}
      className={'block'}
      placeholder="blurred"
      width={50}
      height={16}
    />
  ) : (
    <StaticImage
      src="../images/logo.svg"
      formats={['auto', 'webp', 'avif']}
      alt={title}
      title={title}
      className={'mb-5'}
      placeholder="blurred"
      width={100}
      height={32}
    />
  );
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
