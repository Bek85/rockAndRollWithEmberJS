import Controller from "@ember/controller";
import { empty } from "@ember/object/computed";
import { action } from "@ember/object";

export default class SongsController extends Controller {
  isAddingSong = false;
  newSongTitle = "";

  @empty("newSongTitle") isAddButtonDisabled;

  @action
  addSong() {
    this.set("isAddingSong", true);
  }

  @action
  cancelAddSong() {
    this.set("isAddingSong", false);
  }

  @action
  async saveSong(evt) {
    evt.preventDefault();
    // let newSong = Song.create({ title: this.newSongTitle });
    // this.model.songs.pushObject(newSong);
    let newSong = this.store.createRecord("song", {
      title: this.get("newSongTitle"),
      band: this.model,
    });
    await newSong.save();
    this.set("newSongTitle", "");
    // console.log(this.model);
  }

  @action
  updateRating(song, rating) {
    song.set("rating", song.rating === rating ? 0 : rating);
    song.save();
  }
}
