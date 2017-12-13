var SearchView = function (service, num, localStorage) {
    var imageListView;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('click', '.back-btn', this.backFunc);
        this.$el.on('keyup', '.search-image', findByTag);
        imageListView = new ImageListView();
    };
    this.initialize();
    this.render = function () {
        this.$el.html(this.template());
        $('.content', this.$el).html(imageListView.$el);
        return this;
    };
    this.backFunc = function (event) {
        //searchNameView.render();
        $('body').html(new HomeView(service, num, localStorage).render().$el);
    };
    function findByTag() {
        var trimmed_tag = $('.search-image').val().trim();
        
            if (trimmed_tag.length >= 1) {
                service.findByTag(trimmed_tag).done(function (pictures) {
                    imageListView.setPictures(pictures);
                });
            }
            else {
                imageListView.setPictures(null);
            }
        
    }
}