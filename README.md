# Simple Strings
![Tests](https://github.com/simplyhexagonal/simple-strings/workflows/tests/badge.svg)
[![Try simple-strings on RunKit](https://badge.runkitcdn.com/@simplyhexagonal/simple-strings.svg)](https://npm.runkit.com/@simplyhexagonal/simple-strings)

Convenient functions to normalize strings with international special characters (diacritics).

Great for creating url-safe strings, i.e. normalize header titles into [url slugs](https://www.semrush.com/blog/what-is-a-url-slug/).

## Open source notice

This project is open to updates by its users, [I](https://github.com/jeanlescure) ensure that PRs are relevant to the community.
In other words, if you find a bug or want a new feature, please help us by becoming one of the
[contributors](#contributors-) ✌️ ! See the [contributing section](#contributing)

## Like this module? ❤

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) ☕
- Supporting Simply Hexagonal on [Open Collective](https://opencollective.com/simplyhexagonal) 🏆
- Starring this repo on [Github](https://github.com/simplyhexagonal/simple-strings) 🌟

## Install

```sh
pnpm i @simplyhexagonal/simple-strings

# or
yarn add @simplyhexagonal/simple-strings

# or
npm install @simplyhexagonal/simple-strings
```

## Usage

```ts
import {
  removeDiacritics,
  makeUrlSafe,
} from '@simplyhexagonal/simple-strings';

console.log(
  removeDiacritics('¿¡Árvíztűrő tükörfúrógép!?')
);

// ¿¡Arvizturo tukorfurogep!?

console.log(
  makeUrlSafe('¿¡Árvíztűrő tükörfúrógép!?')
);

// arvizturo-tukorfurogep
```

Browser

```html
<script src="https://cdn.jsdelivr.net/npm/@simplyhexagonal/simple-strings@latest/dist/simple-strings.min.js"></script>
<script>
  const {
    removeDiacritics,
    makeUrlSafe,
  } = SimpleStrings;

  alert(
    removeDiacritics('¿¡Árvíztűrő tükörfúrógép!?')
  );

  // ¿¡Arvizturo tukorfurogep!?

  alert(
    makeUrlSafe('¿¡Árvíztűrő tükörfúrógép!?')
  );

  // arvizturo-tukorfurogep
</script>
```

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the docs and tests and add your name to the `simple-strings.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeanlescure.cr"><img src="https://avatars2.githubusercontent.com/u/3330339?v=4" width="100px;" alt=""/><br /><sub><b>Jean Lescure</b></sub></a><br /><a href="#maintenance-jeanlescure" title="Maintenance">🚧</a> <a href="https://github.com/simplyhexagonal/simple-strings/commits?author=jeanlescure" title="Code">💻</a> <a href="#userTesting-jeanlescure" title="User Testing">📓</a> <a href="https://github.com/simplyhexagonal/simple-strings/commits?author=jeanlescure" title="Tests">⚠️</a> <a href="#example-jeanlescure" title="Examples">💡</a> <a href="https://github.com/simplyhexagonal/simple-strings/commits?author=jeanlescure" title="Documentation">📖</a></td>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Copyright (c) 2021-Present [Simple Strings Contributors](https://github.com/simplyhexagonal/simple-strings/#contributors-).<br/>
Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
