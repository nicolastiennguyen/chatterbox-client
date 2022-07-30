// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done when this view loads.

    // need an initial rendering
    // can not append in initialize because we don't have the data yet

    // Append messages to the chat variable
    // Messages._data.appendTo(".chats");
    // Messages.getData();
  },

  render: function() {
    // TODO: Render _all_ the messages
    // put chat to the dom and clear the body
    MessagesView.$chats.html('');
    // var html = '';
    for (const i of Messages['_data']) {
      MessagesView.renderMessage(i);
    }
  },

  renderMessage: function(message) {
    // Takes in a message
    // Calls render and parse specific data we want
    // Appends to $chats
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);

    // TODO: Render a single message.
    // Filter out a single message from render
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};