module.exports = function ({ source /*, path*/ }, { parse, visit }) {
  const ast = parse(source);
  const fs = require('fs');
  const path = require('path');

  return visit(ast, (env) => {
    let { builders: b } = env.syntax;

    return {
      ElementNode(node) {
        let nameAttribute;
        // Map incoming @type to a @name
        let jsonPath = path.join('..', 'structure-mappings.json');
        let rawdata = fs.readFileSync(jsonPath);
        let mappings = JSON.parse(rawdata);

        if (node.tag === 'Pds::Icon') {
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
