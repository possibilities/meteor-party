# party

A Meteor library for consuming JSON APIs inspired by Ruby's HTTParty

Use the class methods to get down to business quickly

    var http = new Party;
    var response = http.get('http://twitter.com/statuses/public_timeline.json');
    console.log(response.content, response.statusCode, response.headers);

Or wrap things up in your own class

    // Set it up
    Twitter = function() {
      this.baseUri = 'twitter.com';
    };
    _.extend(Twitter.prototype, Party.prototype);

    Twitter.prototype.publicTimeline = function() {
      return this.get('/statuses/public_timeline.json');
    };

    // Use it
    var twitter = new Twitter();

    var timeline = twitter.publicTimeline();
    console.log(timeline);
