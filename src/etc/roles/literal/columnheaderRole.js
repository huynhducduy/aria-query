/**
 * @flow
 */
const columnheaderRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-sort': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'th',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'scope',
            value: 'col',
          },
        ],
        name: 'th',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'scope',
            value: 'colgroup',
          },
        ],
        name: 'th',
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
      'structure',
      'section',
      'cell',
      'gridcell',
    ],
    [
      'roletype',
      'widget',
      'gridcell',
    ],
    [
      'roletype',
      'structure',
      'sectionhead',
    ],
  ],
};

export default columnheaderRole;