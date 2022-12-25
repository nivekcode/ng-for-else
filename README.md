# ng-for-else

> Enhanced `ngFor`. Display a template while the expression passed to `ngFor` returns null or an empty list

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting started](#getting-started)
- [Usage](#usage)
- [Contributors ✨](#contributors-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

This module extends `ngFor` capabilities and allows you to display a template while the expression passed to `ngFor` is empty or `null`. By installing this module you can still use the native `ngFor` just with extended features.

## Getting started

To use `ng-for-else` you can install it from npm.

```bash
npm i ng-for-else
```

## Usage

Use `ngFor` the way you normally do. For example to display a list.

```html
<div
  class="bg-white rounded-lg shadow-lg p-5 mt-3 border border-slate-100"
  *ngFor="let dwarfClass of dwarfClasses"
>
  {{ dwarfClass }}
</div>
```

To use this directive you have to create a template with a templateReference which you want to display while the expression passed to `ngFor` is `null` or empty.

```html
<ng-template #emptyListTemplate>
  <div
    class="bg-red-400 rounded-lg shadow-lg p-5 mt-3 border border-red-500 text-white"
  >
    Empty list
  </div>
</ng-template>
```

Once you have this you can use `else` in the `ngFor` expression to display your template.

```html
<div
  class="bg-white rounded-lg shadow-lg p-5 mt-3 border border-slate-100"
  *ngFor="let dwarfClass of dwarfClasses; else: emptyListTemplate"
>
  {{ dwarfClass }}
</div>
```

## Demo

Feel free to checkout and play with `ng-if-else` on our running [demo application](https://kreuzerk.github.io/ng-for-else/).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@kevinkreuzer"><img src="https://avatars.githubusercontent.com/u/5468954?v=4?s=100" width="100px;" alt="Kevin Kreuzer"/><br /><sub><b>Kevin Kreuzer</b></sub></a><br /><a href="https://github.com/kreuzerk/ngIfResponsive/commits?author=kreuzerk" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
