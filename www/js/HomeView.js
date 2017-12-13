var HomeView = function (service, num, localStorage) {
    var downloadView;
    var searchView;
    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '.download-btn', this.downloadFunc);
        this.$el.on('click', '.search-btn', this.searchFunc);
        downloadView = new DownloadView;
        //searchView = new SearchView;
    };
    this.render = function () {
        this.$el.html(this.template());
        return this;
    };
    this.downloadFunc = function (event) {
        //searchNameView.render();
        $('body').html(new DownloadView(service, num, localStorage).render().$el);
    };
   this.searchFunc = function (event) {
        //searchNameView.render();
        $('body').html(new SearchView(service, num, localStorage).render().$el);
    };
    this.initialize();
}