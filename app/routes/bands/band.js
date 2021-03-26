import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class BandRoute extends Route {
  @service router;

  model(params) {
    // console.log("Model hook called for `bands.band` called with", params.slug);
    return this.store.findRecord("band", params.id);
  }

  resetController() {
    this.controllerFor("bands").setProperties({
      isAddingBand: false,
      newBandName: "",
    });
  }
}
