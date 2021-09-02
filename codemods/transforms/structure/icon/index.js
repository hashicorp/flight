module.exports = function ({ source /*, path*/ }, { parse, visit }) {
  const ast = parse(source);
  const mappings = require('./structure-mappings.json');

  return visit(ast, () => {
    return {
      ElementNode(node) {
        let nameAttribute;
        // Map incoming @type to a @name

        if (node.tag === 'Pds::Icon' || node.tag === 'Icon') {
          let typeAttribute = node.attributes.find(({ name }) => name === '@type');
          // if we are sure this is a PDS:Icon with @type prop
          if (typeAttribute !== undefined) {
            nameAttribute = mappings[typeAttribute.value.chars];
            // if we can find a mapping between the structure icon and the flight icon
            if (nameAttribute) {
              node.tag = 'FlightIcon';
              typeAttribute.name = '@name';
              typeAttribute.value.chars = nameAttribute;
            }
          }
        }

        return node;
      },
    };
  });
};

module.exports.type = 'hbs';
