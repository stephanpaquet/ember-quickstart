import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    fetchData() {
      var store = this.store;
      var artists = ['Rush', 'Saga', 'Pink Floyd'];
      var newArtist;

      store.unloadAll('artist');
      window.localStorage.removeItem("my-app");
      for (var i = 0; i < artists.length; i +=1 ) {
        newArtist = store.createRecord('artist', {
          name: artists[i]
        });
        newArtist.save().then(function () {
          console.log('Artist saved !');
        });
      }

      console.log('fetch datas');
    }
  }
});
