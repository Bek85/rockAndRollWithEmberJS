import Controller from "@ember/controller";
import { action } from "@ember/object";
import { empty } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default class BandsController extends Controller {
  isAddingBand = false;
  newBandName = "";

  @empty("newBandName") isAddButtonDisabled;

  @service router;

  @action
  addBand() {
    this.set("isAddingBand", true);
  }

  @action
  cancelAddBand() {
    this.set("isAddingBand", false);
  }

  @action
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
  }
}
