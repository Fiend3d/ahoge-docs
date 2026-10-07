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
    { include: '#constants' },
    { include: '#functions' },
    { include: '#commands' },
    { include: '#operators' }
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
      name: 'meta.command-substitution.mel',
      beginCaptures: { '0': { name: 'keyword.operator.command-substitution.mel' } },
      endCaptures: { '0': { name: 'keyword.operator.command-substitution.mel' } },
      patterns: [
        { include: '#comments' },
        { include: '#strings' },
        { include: '#flags' },
        { include: '#numbers' },
        { include: '#variables' },
        { include: '#constants' },
        { include: '#functions' },
        { include: '#commands' },
        { include: '#operators' }
      ]
    },
    flags: {
      match: '(?<=\\s|\\[)-[A-Za-z][A-Za-z0-9_]*',
      name: 'constant.other.flag.mel'
    },
    numbers: {
      match: '(?<![\\w$])(?:0[xX][0-9a-fA-F]+|(?:[0-9]+(?:\\.[0-9]*)?|\\.[0-9]+)(?:[eE][+-]?[0-9]+)?)(?!\\w)',
      name: 'constant.numeric.mel'
    },
    variables: {
      match: '\\$[A-Za-z_][A-Za-z0-9_]*',
      name: 'variable.other.mel'
    },
    declarations: {
      match:
        '\\b(global|proc|int|float|string|vector|matrix)\\b',
      name: 'storage.type.mel'
    },
    keywords: {
      match: '\\b(if|else|for|in|while|do|return|break|continue|switch|case|default)\\b',
      name: 'keyword.control.mel'
    },
    constants: {
      match: '\\b(true|false|on|off)\\b',
      name: 'constant.language.boolean.mel'
    },
    functions: {
      match: '\\b[A-Za-z_][A-Za-z0-9_]*(?=\\s*\\()',
      name: 'entity.name.function.mel'
    },
    commands: {
      // MEL commands can omit parentheses, including inside backtick expressions.
      match: '(?:^\\s*|(?<=[;{}\\x60])\\s*)(?!(?:global|proc|int|float|string|vector|matrix|if|else|for|in|while|do|return|break|continue|switch|case|default|true|false|on|off)\\b)([A-Za-z_][A-Za-z0-9_]*)',
      captures: { '1': { name: 'entity.name.function.mel' } }
    },
    operators: {
      match: '[+*/%=!<>|&^~?:-]+',
      name: 'keyword.operator.mel'
    }
  }
}
