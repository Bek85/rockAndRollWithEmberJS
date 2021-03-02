import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class BandRoute extends Route {
  @service router;

  model(params) {
    // console.log(params);
    let bands = this.modelFor("bands");
    return bands.find((band) => band.slug === params.slug);
  }

  redirect(band) {
    if (band.description) {
      this.router.transitionTo("bands.band.details");
    } else {
      this.router.transitionTo("bands.band.songs");
    }
  }
}
