# rollup-ts-bug

Demonstrates a bug with [`@wessberg/rollup-plugin-ts`](https://github.com/wessberg/rollup-plugin-ts) where empty declarations are generated when using rollup cache

## To reproduce

1. Clone this repo
1. Run `npm install`
1. Run `npm run build`, which will do the following:
    1. Load rollup config, which checks for presence of cache file, which is absent this first run
    1. Bundles the index file with rollup
    1. Writes the bundle cache to disk
    1. Writes the bundle to disk
1. Verify declarations in the `dist` directory are generated correctly; drink an :beers:
1. Run `npm run build` (cache is now present)
1. Verify declarations in the `dist` directory are empty; cry some :sob:
