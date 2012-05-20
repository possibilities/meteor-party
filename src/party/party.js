Party = function() {
};

Party.prototype.get = function(urlPath, options) {
  var protocol = this.ssl ? 'https' : 'http';
  var url = protocol + '://' + this.baseUri + '/' + urlPath;
  var response = Meteor.http.get(url);
  return this._getContent(response);
};

Party.prototype._getContent = function(response) {
  response = JSON.parse(response.content)
  if (response.error) throw new Error(response.error);
  
  return response;
};
