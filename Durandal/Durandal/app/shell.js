define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: ['', 'home'], moduleId: 'home', title: 'Hello World', nav: true },
                { route: ['', 'test'], moduleId: 'test', title: 'Test', nav: true }])
              .buildNavigationModel()
            return router.activate();
        }
    };
});