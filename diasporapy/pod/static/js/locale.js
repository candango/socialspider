steal("./jquery", "./i18next", function($, i18n) {
    $(function () {
        var option = {
            fallbackLng: false, lng: 'en',
            resGetPath: '/locales/__lng__.json'
        }
        i18n.init(option, function (t) {
            // translate nav
            $('.container').i18n();
        });
    });
});