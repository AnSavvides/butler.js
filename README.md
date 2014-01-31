butler.js
===========

A lean JS library that makes waiting on a collection of async calls less painful.

Example:

```javascript
var butler = new Butler();

$.ajax({
    type: "GET",
    url: "/api/notifications"
}).done(function(response) {
    butler.add('notifications');
});

$.ajax({
    type: "GET",
    url: "/api/messages"
}).done(function(response) {
    butler.add('messages');
});


butler.when(['notifications', 'messages'], function(responses) {
    console.log('All async calls are done');
    console.log(responses['notifications']);
    console.log(responses['messages']);
});
```