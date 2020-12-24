import Controller from "@ember/controller";
import Song from "rarwe/models/song";
import { empty } from "@ember/object/computed";

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: "",

  isAddButtonDisabled: empty("newSongTitle"),

  actions: {
    addSong() {
      this.set("isAddingSong", true);
    },

    cancelAddSong() {
      this.set("isAddingSong", false);
    },

    saveSong(evt) {
      evt.preventDefault();
      let newSong = Song.create({ title: this.newSongTitle });
      this.model.songs.pushObject(newSong);
      this.set("newSongTitle", "");
    },
  },
});
