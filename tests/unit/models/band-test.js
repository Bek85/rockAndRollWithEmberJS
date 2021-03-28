import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | Band', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('#isGreatBand', function (assert) {
    let store = this.owner.lookup('service:store');
    let pearlJam = store.createRecord('band', {
      songs: [
        store.createRecord('song', { title: 'Daughter', rating: 5 }),
        store.createRecord('song', { title: 'Rearviewmirror', rating: 4 }),
        store.createRecord('song', { title: 'Who You Are', rating: 2 }),
      ],
    });
    assert.ok(
      pearlJam.isGreatBand,
      'A band with 2 or more good songs is a great band'
    );

    let stiltskin = store.createRecord('band', {
      songs: [store.createRecord('song', { title: 'Inside', rating: 5 })],
    });
    assert.notOk(
      stiltskin.isGreatBand,
      'A band with less than good songs is not a great band'
    );
  });
});
