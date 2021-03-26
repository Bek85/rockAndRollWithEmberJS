import Controller from "@ember/controller";
import { empty } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default Controller.extend({
  isAddingBand: false,
  newBandName: "",

  isAddButtonDisabled: empty("newBandName"),

  router: service(),

  actions: {
    addBand() {
      this.set("isAddingBand", true);
    },

    cancelAddBand() {
      this.set("isAddingBand", false);
    },

    async saveBand(evt) {
      // Create a new band
      evt.preventDefault();
      // let newBand = Band.create({ name: this.newBandName });
      // this.model.pushObject(newBand);
      // this.set("newBandName", "");
      let newBand = this.store.createRecord("band", { name: this.newBandName });
      await newBand.save();
      this.setProperties({
        newBandName: "",
        isAddingBand: false,
      });
      this.router.transitionTo("bands.band.songs", newBand.id);
    },
  },
});
