require.config({

    shim: {
        'backbone': {
            deps:    ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },

    urlArgs: "bust=" + (new Date()).getTime(),

    paths: {
        jquery:     'vendor/jquery',
        underscore: 'vendor/underscore',
        backbone:   'vendor/backbone',

        residual:   'lib/Residual',
        average:    'lib/Average'
    }
});

require(['app'], function(App) {
    App.init();
});
