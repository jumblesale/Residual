require.config({
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
