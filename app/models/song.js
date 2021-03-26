import Model, { attr, belongsTo } from "@ember-data/model";

export default class SongModel extends Model {
  @attr() title;
  @attr("number") rating;
  @belongsTo() band;
}
