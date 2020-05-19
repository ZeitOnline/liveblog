/**
 * @author ps / @___paul
 */

'use strict';

const handlers = require('./handlers'),
  viewmodel = require('./viewmodel'),
  view = require('./view'),
  pageview = require('./pageview'),
  localAnalytics = require('./local-analytics'),
  settings = window.LB.settings,
  videoObserver = require('./video-observer'),
  adsManager = require('./ads-manager'),
  gdpr = require('./gdpr');

require('iframe-resizer/js/iframeResizer.contentWindow.min.js');
module.exports = {
  /**
   * On document loaded, do the following:
   */
  init: function() {
    gdpr.init();
    handlers.buttons.attach(); // Register Buttons Handlers
    handlers.events.attach(); // Register Event, Message Handlers
    viewmodel.init();
    localAnalytics.hit();
    pageview.init();

    adsManager.init();
    videoObserver.init();

    view.updateTimestamps();
    if (!settings.datetimeFormat || settings.datetimeFormat === 'ago') {
      setInterval(() => {
        view.updateTimestamps(); // Convert ISO dates to timeago
      }, 1000);
    }
  }
};
