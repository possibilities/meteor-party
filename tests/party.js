// TODO Obviously it's dumb to hit a real API in a test

Twitter = function() {
  this.baseUri = 'twitter.com';
};
_.extend(Twitter.prototype, Party.prototype);

Twitter.prototype.publicTimeline = function() {
  return this.get('statuses/public_timeline.json');
};

Tinytest.add("party", function (test) {
  var twitter = new Twitter();
  var timeline = twitter.publicTimeline();
  var tweet = _.first(timeline);
  var tweetKeys = _.keys(tweet);
  
  // Make sure there's a bunch of tweets
  test.isTrue(_.isArray(timeline));
  test.isTrue(timeline.length > 15);

  // Make sure there's some expected keys
  test.isTrue(_.isObject(tweet));
  test.isTrue(_.contains(tweetKeys, 'user'));
  test.isTrue(_.contains(tweetKeys, 'text'));
});
