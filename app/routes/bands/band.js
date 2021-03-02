import Route from "@ember/routing/route";

export default class BandRoute extends Route {
  model(params) {
    console.log(params);
    let bands = this.modelFor("bands");
    return bands.findBy("slug", params.slug);
  }
}
