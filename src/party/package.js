Package.describe({
  summary: "A smart package for consuming JSON APIs inspired by Ruby's HTTParty"
});

Package.on_use(function(api, where) {
  where = where || ['client', 'server'];

  api.use('http', where);
  api.add_files('party.js', where);
});

Package.on_test(function(api) {
  api.add_files('tests/party.js', 'server');
});
