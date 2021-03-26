import Controller from "@ember/controller";
import { empty } from "@ember/object/computed";
import { action } from "@ember/object";

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
    },
  },

  updateRating: action(function (song, rating) {
    song.set("rating", song.rating === rating ? 0 : rating);
    song.save();
  }),
});
