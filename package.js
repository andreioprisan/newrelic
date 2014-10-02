Package.describe({
  summary: "meteor sql bindings for server-side calls",
  "name": "mycartio:newrelic",
  "version": "1.0.3",
  "author": "Andrei Oprisan (http://andrei.oprisan.com)",
  "homepage": "https://github.com/mycartio/newrelic",
  "git": "https://github.com/mycartio/newrelic.git",
});

Npm.depends({ "newrelic": "1.11.3" });

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  if (api.export) 
  	api.export('newrelic', 'server');	

  api.add_files('lib/server.js', 'server');
});

