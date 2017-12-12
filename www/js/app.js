// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
    
    /* ---------------------------------- Local Variables ---------------------------------- */
   
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    DownloadView.prototype.template = Handlebars.compile($("#download-tpl").html());
    //SearchTitleView.prototype.template = Handlebars.compile($("#search-title-tpl").html());
   // EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    //EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    var service = new Services();
    var num = 0;
    var localStorage = window.localStorage;
    
   service.initialize().done(function () {
        router.addRoute('', function () {
            $('body').html(new HomeView(service, num, localStorage).render().$el);
            
        });
       router.addRoute('', function () {
            $('body').html(new DownloadView(service, num, localStorage).render().$el);
       });
       /*router.addRoute('', function () {
           $('body').html(new SearchView(service, num, localStorage).render().$el);
       });
        router.addRoute('employees/:id', function (id) {
            service.findById(parseInt(id)).done(function (picture) {
                $('body').html(new ImageView(picture).render().$el);
              
            });
        });*/
        router.start();
    });


    /* --------------------------------- Event Registration -------------------------------- */
   

   document.addEventListener('deviceready',
function () {
    // Override default HTML alert
    // with native dialog
    if (device.platform != "browser") {
        window.alert = function (message) {
            navigator.notification.alert(
            message, // message
            null, // callback
            "Workshop on Android", // title
            'OK' // buttonName
            );
        };
    }
}, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
   
}());