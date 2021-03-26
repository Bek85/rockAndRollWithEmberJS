import Model, { attr, hasMany } from "@ember-data/model";
export default class BandModel extends Model {
  @attr() name;
  @attr() description;
  @hasMany() songs;
}
