/* eslint-disable ember/avoid-leaking-state-in-ember-objects, ember/no-actions-hash, ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components */
import { sort } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',

  sortField: ['id'],

  sortedTasks: sort('tasks', 'sortField'),

  actions: {
    sortingChanged(value) {
      this.set('sortField', [value]);
    },
  },
});
