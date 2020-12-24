import Controller from "@ember/controller";
import Band from "../models/band";
import { empty } from "@ember/object/computed";

export default Controller.extend({
  isAddingBand: false,
  newBandName: "",

  isAddButtonDisabled: empty("newBandName"),

  actions: {
    addBand() {
      this.set("isAddingBand", true);
    },

    cancelAddBand() {
      this.set("isAddingBand", false);
    },

    saveBand(evt) {
      // Create a new band
      evt.preventDefault();
      let newBand = Band.create({ name: this.newBandName });
      this.model.pushObject(newBand);
      this.set("newBandName", "");
    },
  },
});
