import EmberRouter from "@ember/routing/router";
import config from "./config/environment";
import { capitalize } from "@ember/string";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  init() {
    this._super();
    this.setDocumentTitle();
  }

  setDocumentTitle() {
    this.on("routeDidChange", (transition) => {
      console.log("transition object: ", transition);
      if (!transition.to) {
        return;
      }

      let toRouteName = transition.to.name;
      let pageTitles = {
        "bands.index": () => {
          return "Bands";
        },
        "bands.band.songs": () => {
          let bandRouteInfo = transition.to.find((info) =>
            info.name.includes("bands.band")
          );
          console.log("bandRouteInfo object: ", bandRouteInfo);
          let bandSlug = bandRouteInfo.params.slug;
          let bandName = bandSlug
            .split("-")
            .map((s) => capitalize(s))
            .join("");
          return `${bandName} songs`;
        },
      };
      let titleSegments = [];
      let titleSetter = pageTitles[toRouteName];
      console.log("titleSetter: ", titleSetter);
      if (titleSetter) {
        titleSegments.push(titleSetter());
      }
      titleSegments.push("Rock and Roll with Ember.js");
      document.title = titleSegments.join(" - ");
    });
  }
}

Router.map(function () {
  this.route("bands", function () {
    this.route(
      "band",
      {
        path: ":slug",
      },
      function () {
        this.route("songs");
        this.route("details");
      }
    );
  });
});
