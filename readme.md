This is the source code for https://keen.foo/ .
The main project is [keen](https://github.com/andy-hanson/keen).
Issues with the language should go there; issues with the site should go here.

This repository is expected to be next to the `keen` repository, which it imports from.

`make build-site` builds the `site` directory. 
The site is purely static content, so it can be served by any simple file server.

`make serve` builds and serves it, as well as rebuilding when the source code changes.
