// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},
  selected: 'lobby',
  isSelected: function(roomname) {
    return roomname === room.selected || !roomname && Room.selected === 'lobby';
  }

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  getData: function(data) {
    Rooms._data = data;
  }


};