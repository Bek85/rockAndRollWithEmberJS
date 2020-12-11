import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    console.log(params);
    let bands = this.modelFor("bands");
    return bands.findBy("slug", params.slug);
  },
});
