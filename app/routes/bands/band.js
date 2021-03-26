import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class BandRoute extends Route {
  @service router;

  model(params) {
    return this.store.findRecord("band", params.id);
  }

  resetController() {
    this.controllerFor("bands").setProperties({
      isAddingBand: false,
      newBandName: "",
    });
  }
}
