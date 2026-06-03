# ember-migration

This is a small test app that can serve as a pairing tool on migrating older apps.

The setup is:
* Node 22
* pnpm
* Ember 3.28
* ember-auto-import 2 + webpack 5
* LttF

## App structure

* Data
  * Two models: `Task -1--n-> Duration` with a sync `hasMany`
  * uses `ActiveModelAdapter` as the application adapter (rails-style REST)
  * `/public/tasks` is a JSON file to mock an API response
* A single index route fetches tasks and passes them to `<TaskList>`
* `TaskList` renders `<TaskItem>` in a loop, and allows changing order

## Potential pairing topics

* Migration to GJS (fixing lint violations, using codemods, native classes...)
* Mocking data in tests (ember-cli-mirage vs msw for example)
