/**
 * @flow
 */
const gridcellRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-selected': null,
  },
  relatedConcepts: [
    {
      concept: {
        constraints: [
          'ancestor table element has grid role',
        ],
        name: 'td',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'row',
  ],
  requiredContextRole: [
    'row',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'cell',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default gridcellRole;