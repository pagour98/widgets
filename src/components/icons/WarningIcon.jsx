import React from 'react';
import PropTypes from 'prop-types';

/**
 * Warning SVG Icon
 *
 * @param {object} props  Data passed to the component
 * @param {number} props.size  Width and height of the icon
 * @param {string} props.className  Additional className for the component
 * @param {object} props.style  Inline style object for the component
 * @returns {object} JSX of the icon
 *
 */
export default function WarningIcon({size, className, style}) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={`wxc-icon ${className}`} style={style}>
      <path d="M13.7971 10.7495L8.2991 1.24998C8.16738 1.02195 7.97797 0.832599 7.7499 0.700952C7.52182 0.569305 7.26312 0.5 6.99978 0.5C6.73644 0.5 6.47774 0.569305 6.24966 0.700952C6.02159 0.832599 5.83218 1.02195 5.70046 1.24998L5.70096 1.24948L0.200962 10.75C0.0693183 10.978 9.13466e-06 11.2366 9.02787e-10 11.4999C-9.13286e-06 11.7632 0.069282 12.0219 0.20091 12.2499C0.332538 12.4779 0.521865 12.6673 0.749865 12.7989C0.977865 12.9306 1.2365 12.9999 1.49979 13H12.4983C12.7617 13.0001 13.0205 12.9308 13.2486 12.7991C13.4767 12.6674 13.6661 12.478 13.7977 12.2499C13.9294 12.0217 13.9986 11.763 13.9985 11.4996C13.9984 11.2362 13.929 10.9775 13.7971 10.7495ZM12.9314 11.75C12.8882 11.8266 12.8253 11.8903 12.7491 11.9342C12.6729 11.9782 12.5863 12.0009 12.4983 12H1.49978C1.4121 11.9999 1.32598 11.9768 1.25006 11.9329C1.17414 11.889 1.11108 11.826 1.06721 11.7501C1.02334 11.6742 1.0002 11.588 1.00011 11.5004C1.00001 11.4127 1.02297 11.3265 1.06668 11.2505L6.56618 1.75049L6.56668 1.74999C6.61063 1.67394 6.67383 1.61079 6.74993 1.56691C6.82602 1.52303 6.91233 1.49995 7.00017 1.5C7.08801 1.50005 7.17429 1.52323 7.25034 1.5672C7.32638 1.61117 7.38951 1.67439 7.43337 1.75049L12.9314 11.25C12.9762 11.3257 12.9999 11.412 12.9999 11.5C12.9999 11.5879 12.9762 11.6743 12.9314 11.75Z" />
      <path d="M6.99984 10.9999C7.34502 10.9999 7.62484 10.7201 7.62484 10.3749C7.62484 10.0297 7.34502 9.74992 6.99984 9.74992C6.65466 9.74992 6.37484 10.0297 6.37484 10.3749C6.37484 10.7201 6.65466 10.9999 6.99984 10.9999Z" />
      <path d="M6.99978 8.99998C7.06545 9.00002 7.13049 8.98711 7.19117 8.962C7.25185 8.93689 7.30698 8.90006 7.35342 8.85362C7.39986 8.80718 7.43669 8.75205 7.4618 8.69137C7.48691 8.63069 7.49982 8.56565 7.49978 8.49998V4.99998C7.49978 4.86738 7.4471 4.7402 7.35334 4.64643C7.25957 4.55266 7.13239 4.49998 6.99978 4.49998C6.86717 4.49998 6.74 4.55266 6.64623 4.64643C6.55246 4.7402 6.49978 4.86738 6.49978 4.99998V8.49998C6.49974 8.56565 6.51265 8.63069 6.53777 8.69137C6.56288 8.75205 6.59971 8.80719 6.64614 8.85362C6.69258 8.90006 6.74772 8.93689 6.8084 8.962C6.86908 8.98711 6.93411 9.00002 6.99978 8.99998Z" />
    </svg>
  );
}

WarningIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

WarningIcon.defaultProps = {
  size: 16,
  className: '',
  style: {},
};