// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // TODO: Define how you want to store your messages.
  _data: {},


  // data we retrieved from FETCH is an array of objects
  // if we iterate through the data
  // each object contains messages, usernames, etc.
  // so to retrieve a message it might look something like:

  getData: function(data) {
    console.log(data);
    for ( i = 0; i < data.length; i++) {
      console.log(data);
      if (Messages._data[data[i].message_id] === undefined) {
        Messages._data[data[i].message_id] = data[i].message_id;
      }
    }
  }




  // reference below using message_id:
  //Username
  //Message Text
  //Created At

  // let username = data[i]['username'];
  // let message = data[i]['text'];
  // Messages._data[data[i].message_id]

};

// append messages in chatterbox.html line 38