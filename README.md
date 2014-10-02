Meteor NewRelic Bindings
==========================

This smart package exposes Meteor NewRelic bindings.

This Meteor package is licensed under the MIT license.

This uses version 1.11.3 of the NewRelic package.

#### To Install

    meteor add mycartio:newrelic

#### To Configure

Since meteor package APIs do not allow for changing internal configs for packages, you must use external config variables.
Set the following environment variables:

    NEW_RELIC_NO_CONFIG_FILE    TRUE
    NEW_RELIC_LICENSE_KEY       YOURKEYID
    NEW_RELIC_APP_NAME          YOURAPPNAME
    NEW_RELIC_LOG_LEVEL         ONE OF error, warn, info, debug, or trace

You can see the full list of node-newrelic options at https://github.com/newrelic/node-newrelic/blob/master/README.md
