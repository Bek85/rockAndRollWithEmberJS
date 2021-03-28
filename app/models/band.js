import Model, { attr, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';
export default class BandModel extends Model {
  @attr() name;
  @attr() description;
  @hasMany() songs;

  @computed('songs.@each.rating')
  get isGreatBand() {
    let goodSongs = this.get('songs').filter((song) => song.rating >= 4);
    return goodSongs.length >= 2;
  }
}
