import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('tasks', [
      { id: 200, subject: 'foo', priority: 1 },
      { id: 300, subject: 'bar', priority: 3 },
    ]);

    await render(hbs`{{todo-list tasks=tasks title="my list" }}`);

    assert.dom(this.element).containsText('my list');
    assert.dom('li').exists({ count: 2 });
    assert.dom('li[data-task-id="200"]').containsText('foo');
    assert.dom('li[data-task-id="300"]').hasText('bar (py: 3) - never done');
  });
});
