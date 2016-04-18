import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
  this.route('artists');
});

export default Router;
