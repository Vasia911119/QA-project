// keep node.js syntax as this function is used both by client and node
const _ = require('lodash');

module.exports = slugHandler = (language, templateKey, slug) => {
  if (language === 'en') {
    return _.kebabCase(slug).length === 0
      ? '/en/'
      : `/en/${_.kebabCase(templateKey)}/${_.kebabCase(slug)}/`;
  } else if (language === 'ru') {
    return _.kebabCase(slug).length === 0
      ? '/ru/'
      : `/ru/${_.kebabCase(templateKey)}/${_.kebabCase(slug)}/`;
  } else {
    return _.kebabCase(slug).length === 0
      ? '/'
      : `/${_.kebabCase(templateKey)}/${_.kebabCase(slug)}/`;
  }
};
