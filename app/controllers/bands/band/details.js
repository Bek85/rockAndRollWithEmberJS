import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class DetailsController extends Controller {
  isEditing = false;

  @action
  toggleIsEditing() {
    this.toggleProperty("isEditing");
  }
}
