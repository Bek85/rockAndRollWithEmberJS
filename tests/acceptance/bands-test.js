import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { createBand } from 'rarwe/tests/helpers/custom-helpers';

module('Acceptance | Bands', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List bands', async function (assert) {
    this.server.create('band', { name: 'Radiohead' });
    this.server.create('band', { name: 'Long Distance Calling' });
    await visit('/');

    // let bandLinks = document.querySelectorAll("[data-test-rr=band-link]");
    // assert.equal(bandLinks.length, 2, "All band links are rendered");
    // assert.ok(
    //   bandLinks[0].textContent.includes("Radiohead"),
    //   "First band link contains the band name"
    // );
    // assert.ok(
    //   bandLinks[1].textContent.includes("Long Distance Calling"),
    //   "The other band link contains the band name"
    // );
    assert
      .dom('[data-test-rr=band-link]')
      .exists({ count: 2 }, 'All band links are rendered');
    assert
      .dom('[data-test-rr=band-list-item]')
      .hasText('Radiohead', 'The first band link contains the band name');
    assert
      .dom('[data-test-rr=band-list-item]:last-child')
      .hasText(
        'Long Distance Calling',
        'The other band link contains the band name'
      );
  });

  test('Create a band', async function (assert) {
    this.server.create('band', { name: 'Royal Blood' });

    await visit('/');

    // await click('[data-test-rr=new-band-label]');
    // await fillIn('[data-test-rr=new-band-input]', 'Caspian');
    // await click('[data-test-rr=new-band-button]');

    await createBand('Caspian');

    // let bandLinks = document.querySelectorAll('[data-test-rr=band-link]');
    // assert.equal(
    //   bandLinks.length,
    //   2,
    //   'All band links are rendered',
    //   'A new band link is rendered'
    // );
    // assert.ok(
    //   bandLinks[1].textContent.includes('Caspian'),
    //   'The new band link is rendered as the last item'
    // );
    // assert.ok(
    //   document
    //     .querySelector('[data-test-rr=songs-nav-item]')
    //     .textContent.includes('Songs'),
    //   'The Songs tab is active'
    // );

    assert
      .dom('[data-test-rr=band-list-item]')
      .exists({ count: 2 }, 'A new band link is rendered');

    assert
      .dom('[data-test-rr=band-list-item]:last-child')
      .hasText('Caspian', 'The new band link is rendered as the last item');

    assert
      .dom('[data-test-rr=songs-nav-item] > .active')
      .exists('The Songs tab is active');
  });
});
