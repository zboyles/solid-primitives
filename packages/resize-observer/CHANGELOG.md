# @solid-primitives/resize-observer

## 2.0.7

### Patch Changes

- 608a7a7e: Don't access createElementSize's target argument immediately is it's a function.

## 2.0.6

### Patch Changes

- Updated dependencies [9ed32b38]
  - @solid-primitives/utils@4.0.0
  - @solid-primitives/event-listener@2.2.4
  - @solid-primitives/rootless@1.2.1

## 2.0.5

### Patch Changes

- b662fe9f: Improve package export contidions for SSR (node, workers, deno)
- Updated dependencies [e36ed229]
- Updated dependencies [a372d0e7]
- Updated dependencies [b662fe9f]
- Updated dependencies [abb8063c]
- Updated dependencies [abb8063c]
  - @solid-primitives/rootless@1.2.0
  - @solid-primitives/utils@3.1.0
  - @solid-primitives/event-listener@2.2.3

## 2.0.4

### Patch Changes

- 7ac41ed: Update to solid-js version 1.5
- Updated dependencies [7ac41ed]
  - @solid-primitives/event-listener@2.2.2
  - @solid-primitives/rootless@1.1.3
  - @solid-primitives/utils@3.0.2

## 2.0.3

### Patch Changes

- Updated dependencies [73b6a34]
  - @solid-primitives/utils@3.0.0
  - @solid-primitives/event-listener@2.2.1
  - @solid-primitives/rootless@1.1.2

## Changelog up to version 2.0.2

0.0.100

Initial commit of the resize observer.

1.0.3

Release initial version for CJS and SSR support.

1.0.4

Patched HTMLElement to Element to resolve type error on build. Updated to Solid 1.3.

2.0.0

Refactored `createResizeObserver` API.

Added `makeResizeObserver`, `createWindowSize`, `useWindowSize` and `createElementSize`