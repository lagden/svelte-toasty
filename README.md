# svelte-toasty

[![NPM version][npm-img]][npm]
<!-- [![Build Status][ci-img]][ci] -->
<!-- [![Coverage Status][coveralls-img]][coveralls] -->

[npm-img]: https://img.shields.io/npm/v/@tadashi/svelte-toasty.svg
[npm]: https://www.npmjs.com/package/@tadashi/svelte-toasty
<!-- [ci-img]: https://github.com/lagden/svelte-toasty/actions/workflows/nodejs.yml/badge.svg -->
<!-- [ci]: https://github.com/lagden/svelte-toasty/actions/workflows/nodejs.yml -->
<!-- [coveralls-img]: https://coveralls.io/repos/github/lagden/svelte-toasty/badge.svg?branch=main -->
<!-- [coveralls]: https://coveralls.io/github/lagden/svelte-toasty?branch=main -->

---

Simple toast notifications using the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

## Install

```
$ npm i -S @tadashi/svelte-toasty
```

## API

### acts.add(notification: Object): void

#### notification

| property | type            | required | default | description                                            |
| -------- | --------------- | -------- | ------- | ------------------------------------------------------ |
| custom   | SvelteComponent | no       | normal  | The custom component to be displayed as the toast.     |
| lifetime | Number          | no       | 0       | The duration (in seconds) the toast should be visible. |
| message  | String          | no       | ''      | The message to be displayed in the toast.              |
| mode\*   | Enums           | no       | normal  | The mode of the toast.                                 |

The `mode` can be:

```
- normal || base
- primary
- secondary
- accent
- info
- success || ok
- warning || warn
- error   || danger
```

### CSS Vars - Original.svelte

| vars                    | default                            |
| ----------------------- | ---------------------------------- |
| --tto-margin            | 0 0 0.8em                          |
| --tto-border-radius     | 3px                                |
| --tto-box-shadow        | 0 4px 10px oklch(0deg 0% 0% / 10%) |
| --tto-content-padding   | 0.9em                              |
| --tto-bg                | 100% 0 0 / 90%                     |
| --tto-c                 | 0% 0 0                             |
| --tto-btn-font-size     | 1.5em                              |
| --tto-btn-font-family   | monospace                          |
| --tto-btn-after-content | ✗                                  |

> [!IMPORTANT]  
> The color of `Original` component is compatible with [DaisyUI](https://daisyui.com/theme-generator/).

## Usage

Example via [REPL](https://svelte.dev/repl/d2bf5424289841b2bd773b592b7ddca6?version=4.2.16).

```svelte
<svelte:head>
    <link
        href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css"
        rel="stylesheet"
        type="text/css"
    />
    <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<script>
import {Toasts, acts} from '$lib/index.js'

let triggers = [
    {mode: 'normal', message: 'Nothing to say...', lifetime: 5},
    {mode: 'primary', message: 'First place'},
    {mode: 'secondary', message: 'The second is the first loser'},
    {mode: 'accent', message: '♪♫'},
    {mode: 'success', message: 'Nice!'},
    {mode: 'info', message: 'Leve a japona'},
    {mode: 'warning', message: 'Já chegou o disco voador!'},
    {mode: 'error', message: 'Alta tensão'},
]
</script>

<div class="flex flex-col gap-4 items-start">
    {#each triggers as toasty}
        <button
            type="button"
            class="btn btn-{toasty.mode}"
            on:click={() => {
                acts.add(toasty)
            }}
        >Toasty!!! - {toasty.mode}</button>
    {/each}
</div>

<Toasts />
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

MIT © [Thiago Lagden](https://github.com/lagden)
