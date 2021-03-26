import Route from "@ember/routing/route";

export default class BandsRoute extends Route {
  model() {
    return this.store.findAll("band");
  }
}
