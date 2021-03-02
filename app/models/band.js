import EmberObject, { computed } from "@ember/object";
import { dasherize } from "@ember/string";

export default EmberObject.extend({
  name: "",
  description: "",

  init() {
    this._super(...arguments);
    if (!this.songs) {
      this.set("songs", []);
    }
  },

  slug: computed("name", function () {
    return dasherize(this.name);
  }),
});
