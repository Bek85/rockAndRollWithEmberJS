import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class DetailsController extends Controller {
  isEditing = false;

  @action
  edit() {
    this.set("isEditing", true);
  }

  @action
  async save() {
    let band = this.model;
    await band.save();
    this.set("isEditing", false);
  }
}
