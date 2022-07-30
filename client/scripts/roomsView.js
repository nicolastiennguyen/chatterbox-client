// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $chats: $('#chats'),

  // add room button:
  $button: $('#rooms button'),
  //
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // console.log(Rooms._data);
    // RoomsView.$chats.html('');
    var html = '';
    for (var i = 0; i < Rooms._data.length; i++) {
      if (Rooms._data[i].roomname === 'Lobby') {
        // html += Rooms._data[i].username;
        html += RoomsView.$chats.append(Rooms._data[i].username);
      }
      // RoomsView.$chats.append();
    }

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // var $room =
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // RoomsView.$select.val() is what we click on
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
