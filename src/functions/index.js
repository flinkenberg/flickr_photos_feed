import $ from 'jquery';
import store from '../store';
import * as action from '../actions';

export const getAll = () => {
  $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
    tags: "potato",
    tagmode: "all",
    format: "json"
  })
    .done(function( data ) {
      // Assign ID for data items.
      data.items.map(item => {
        let id = item.link.split('/');
        id = id[id.length - 2];
        item.id = id;
        return item;
      });
      store.dispatch(action.photosFetch(data.items));
    });
}

export const findPhoto = id => {
  let result = null;
  if (store.getState().photos.items.length > 0) {
    store.getState().photos.items.map(item => {
      if (item.id === id) {
        result = item;
      }
      return item;
    });
  }
  return result;
}
