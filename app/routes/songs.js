import Route from "@ember/routing/route";

export default class SongsRoute extends Route {
  model() {
    return this.modelFor("bands.band");
  }
}
