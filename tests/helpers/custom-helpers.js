import { click, fillIn } from '@ember/test-helpers';

export async function createBand(name) {
  await click('[data-test-rr=new-band-label]');
  await fillIn('[data-test-rr=new-band-input]', name);
  return click('[data-test-rr=new-band-button]');
}
