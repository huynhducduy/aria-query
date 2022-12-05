import expect from 'expect';
import rolesMap from '../../src/rolesMap';
import ariaPropsMap from '../../src/ariaPropsMap';

const entriesList = [
  ["alert", expect.any(Object)],
  ["alertdialog", expect.any(Object)],
  ["application", expect.any(Object)],
  ["article", expect.any(Object)],
  ["banner", expect.any(Object)],
  ["blockquote", expect.any(Object)],
  ["button", expect.any(Object)],
  ["caption", expect.any(Object)],
  ["cell", expect.any(Object)],
  ["checkbox", expect.any(Object)],
  ["code", expect.any(Object)],
  ["columnheader", expect.any(Object)],
  ["combobox", expect.any(Object)],
  ["command", expect.any(Object)],
  ["complementary", expect.any(Object)],
  ["composite", expect.any(Object)],
  ["contentinfo", expect.any(Object)],
  ["definition", expect.any(Object)],
  ["deletion", expect.any(Object)],
  ["dialog", expect.any(Object)],
  ["directory", expect.any(Object)],
  ["document", expect.any(Object)],
  ["emphasis", expect.any(Object)],
  ["feed", expect.any(Object)],
  ["figure", expect.any(Object)],
  ["form", expect.any(Object)],
  ["generic", expect.any(Object)],
  ["grid", expect.any(Object)],
  ["gridcell", expect.any(Object)],
  ["group", expect.any(Object)],
  ["heading", expect.any(Object)],
  ["img", expect.any(Object)],
  ["input", expect.any(Object)],
  ["insertion", expect.any(Object)],
  ["landmark", expect.any(Object)],
  ["link", expect.any(Object)],
  ["list", expect.any(Object)],
  ["listbox", expect.any(Object)],
  ["listitem", expect.any(Object)],
  ["log", expect.any(Object)],
  ["main", expect.any(Object)],
  ["marquee", expect.any(Object)],
  ["mark", expect.any(Object)],
  ["math", expect.any(Object)],
  ["menu", expect.any(Object)],
  ["menubar", expect.any(Object)],
  ["menuitem", expect.any(Object)],
  ["menuitemcheckbox", expect.any(Object)],
  ["menuitemradio", expect.any(Object)],
  ["meter", expect.any(Object)],
  ["navigation", expect.any(Object)],
  ["none", expect.any(Object)],
  ["note", expect.any(Object)],
  ["option", expect.any(Object)],
  ["paragraph", expect.any(Object)],
  ["presentation", expect.any(Object)],
  ["progressbar", expect.any(Object)],
  ["radio", expect.any(Object)],
  ["radiogroup", expect.any(Object)],
  ["range", expect.any(Object)],
  ["region", expect.any(Object)],
  ["roletype", expect.any(Object)],
  ["row", expect.any(Object)],
  ["rowgroup", expect.any(Object)],
  ["rowheader", expect.any(Object)],
  ["scrollbar", expect.any(Object)],
  ["search", expect.any(Object)],
  ["searchbox", expect.any(Object)],
  ["section", expect.any(Object)],
  ["sectionhead", expect.any(Object)],
  ["select", expect.any(Object)],
  ["separator", expect.any(Object)],
  ["slider", expect.any(Object)],
  ["spinbutton", expect.any(Object)],
  ["status", expect.any(Object)],
  ["strong", expect.any(Object)],
  ["structure", expect.any(Object)],
  ["subscript", expect.any(Object)],
  ["superscript", expect.any(Object)],
  ["switch", expect.any(Object)],
  ["tab", expect.any(Object)],
  ["table", expect.any(Object)],
  ["tablist", expect.any(Object)],
  ["tabpanel", expect.any(Object)],
  ["term", expect.any(Object)],
  ["textbox", expect.any(Object)],
  ["time", expect.any(Object)],
  ["timer", expect.any(Object)],
  ["toolbar", expect.any(Object)],
  ["tooltip", expect.any(Object)],
  ["tree", expect.any(Object)],
  ["treegrid", expect.any(Object)],
  ["treeitem", expect.any(Object)],
  ["widget", expect.any(Object)],
  ["window", expect.any(Object)],
  ["doc-abstract", expect.any(Object)],
  ["doc-acknowledgments", expect.any(Object)],
  ["doc-afterword", expect.any(Object)],
  ["doc-appendix", expect.any(Object)],
  ["doc-backlink", expect.any(Object)],
  ["doc-biblioentry", expect.any(Object)],
  ["doc-bibliography", expect.any(Object)],
  ["doc-biblioref", expect.any(Object)],
  ["doc-chapter", expect.any(Object)],
  ["doc-colophon", expect.any(Object)],
  ["doc-conclusion", expect.any(Object)],
  ["doc-cover", expect.any(Object)],
  ["doc-credit", expect.any(Object)],
  ["doc-credits", expect.any(Object)],
  ["doc-dedication", expect.any(Object)],
  ["doc-endnote", expect.any(Object)],
  ["doc-endnotes", expect.any(Object)],
  ["doc-epigraph", expect.any(Object)],
  ["doc-epilogue", expect.any(Object)],
  ["doc-errata", expect.any(Object)],
  ["doc-example", expect.any(Object)],
  ["doc-footnote", expect.any(Object)],
  ["doc-foreword", expect.any(Object)],
  ["doc-glossary", expect.any(Object)],
  ["doc-glossref", expect.any(Object)],
  ["doc-index", expect.any(Object)],
  ["doc-introduction", expect.any(Object)],
  ["doc-noteref", expect.any(Object)],
  ["doc-notice", expect.any(Object)],
  ["doc-pagebreak", expect.any(Object)],
  ["doc-pagelist", expect.any(Object)],
  ["doc-part", expect.any(Object)],
  ["doc-preface", expect.any(Object)],
  ["doc-prologue", expect.any(Object)],
  ["doc-pullquote", expect.any(Object)],
  ["doc-qna", expect.any(Object)],
  ["doc-subtitle", expect.any(Object)],
  ["doc-tip", expect.any(Object)],
  ["doc-toc", expect.any(Object)],
  ["graphics-document", expect.any(Object)],
  ["graphics-object", expect.any(Object)],
  ["graphics-symbol", expect.any(Object)],
];

describe('rolesMap API', function () {
  describe('entries()', function () {
    test.each(rolesMap.entries())(`Testing role: '%s' with definition %o`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
    test.each([...rolesMap.entries()])(`Testing role: '%s'`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
  });
  describe('forEach()', function () {
    const output = [];
    let context;
    rolesMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });
    test.each(output)(`Testing role: '%s'`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
    test.each(context)(`Testing role: '%s'`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
  });
  it('get()', function () {
    expect(rolesMap.get('roletype')).toBeDefined();
    expect(rolesMap.get('fake role')).toBeUndefined();
  });
  it('has()', function () {
    expect(rolesMap.has('roletype')).toEqual(true);
    expect(rolesMap.has('fake role')).toEqual(false);
  });
  describe('keys()', function () {
    const entriesKeys = entriesList.map(entry => entry[0]);
    test.each(rolesMap.keys())('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
    test.each([...rolesMap.keys()])('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
  });
  describe('values()', function () {
    const entriesValues = entriesList.map(entry => entry[1]);
    test.each(rolesMap.values().map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
    test.each([...rolesMap.values()].map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
  });
});

describe('rolesMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(rolesMap[Symbol.iterator]).not.toBeUndefined();
    });
    describe('spread operator', function () {
      it('should have a specific length', function () {
        expect([...rolesMap].length).toEqual(137);
      });
      test.each([...rolesMap])('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
    describe('for..of pattern', function () {
      const output = [];
      for (const [key, value] of rolesMap) {
        output.push([key, value]);
      }
      test.each(output)('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
  });
  describe('content', function () {
    describe('props and ariaPropsMap', function () {
      const roles = rolesMap.entries();
      test.each(roles)(
        'The definition for role %s has only props defined in ariaPropsMap',
        (role, definition) => {
          const unknownProps = Object.keys(definition.props).filter(
            prop => !ariaPropsMap.has(prop)
          );
          expect(unknownProps.length).toEqual(0);
        }
      );
    });
  });
  // dpub-aria
  describe('doc-abstract role', function () {
    const abstract = rolesMap.get('doc-abstract');
    const { props } = abstract;

    it('should not have aria-describedat property', function () {
      expect(props).not.toHaveProperty('aria-describedat');
    });

    it('should have aria-details property', function () {
      expect(props).toEqual(expect.objectContaining({ 'aria-details': null }));
    });
  });
});
