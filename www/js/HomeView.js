var HomeView = function (service) {
    var downloadView;
    var searchView;
    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '.download-btn', this.downloadFunc);
        this.$el.on('click', '.search-btn', this.searchFunc);
        downloadView = new DownloadView;
        searchView = new SearchView;
    };
    this.render = function () {
        this.$el.html(this.template());
        return this;
    };
    this.searchName = function (event) {
        //searchNameView.render();
        $('body').html(new DownloadView().render().$el);
    };
    this.searchTitle = function (event) {
        //searchNameView.render();
        $('body').html(new SearchView(service).render().$el);
    };
    this.initialize();
}