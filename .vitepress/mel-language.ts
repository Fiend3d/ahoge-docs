// A small TextMate grammar for Maya MEL.
//
// Shiki ships no MEL grammar. Labelling MEL blocks as `bash` was the workaround,
// and it reads wrong: `//` comments are not shell comments, `$var` is not a shell
// variable, and backticks in MEL evaluate a command rather than run a subshell.
//
// Scopes are the standard TextMate ones so the site's themes colour them without
// any extra CSS.

export const melLanguage = {
  name: 'mel',
  scopeName: 'source.mel',
  displayName: 'MEL',
  patterns: [
    { include: '#comments' },
    { include: '#strings' },
    { include: '#command-substitution' },
    { include: '#flags' },
    { include: '#numbers' },
    { include: '#variables' },
    { include: '#declarations' },
    { include: '#keywords' },
    { include: '#functions' }
  ],
  repository: {
    comments: {
      patterns: [
        { begin: '//', end: '(?=$)', name: 'comment.line.double-slash.mel' },
        { begin: '/\\*', end: '\\*/', name: 'comment.block.mel' }
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.mel',
      beginCaptures: { '0': { name: 'punctuation.definition.string.begin.mel' } },
      endCaptures: { '0': { name: 'punctuation.definition.string.end.mel' } },
      patterns: [{ match: '\\\\.', name: 'constant.character.escape.mel' }]
    },
    'command-substitution': {
      begin: '`',
      end: '`',
      name: 'string.interpolated.mel',
      beginCaptures: { '0': { name: 'punctuation.definition.string.begin.mel' } },
      endCaptures: { '0': { name: 'punctuation.definition.string.end.mel' } },
      patterns: [
        { include: '#flags' },
        { include: '#numbers' },
        { include: '#variables' },
        { include: '#strings' },
        { include: '#functions' }
      ]
    },
    flags: {
      match: '(?<=\\s)-[A-Za-z][A-Za-z0-9_]*',
      name: 'variable.parameter.flag.mel'
    },
    numbers: {
      match: '\\b[0-9]+(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b',
      name: 'constant.numeric.mel'
    },
    variables: {
      match: '\\$[A-Za-z_][A-Za-z0-9_]*',
      name: 'variable.other.mel'
    },
    declarations: {
      match:
        '\\b(global|proc|local|static|int|float|string|vector|matrix|boolean|void|array|stringArray|intArray|floatArray|vectorArray)\\b',
      name: 'storage.type.mel'
    },
    keywords: {
      match: '\\b(if|else|for|in|while|do|return|break|continue|switch|case|default|and|or|not|else)\\b',
      name: 'keyword.control.mel'
    },
    functions: {
      match: '\\b[A-Za-z_][A-Za-z0-9_]*(?=\\s*\\()',
      name: 'entity.name.function.mel'
    }
  }
}
