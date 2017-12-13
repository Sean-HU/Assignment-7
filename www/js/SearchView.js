var SearchView = function (service, num, localStorage) {
    var imageListView;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('click', '.back-bttn', this.backFunct);
        this.$el.on('keyup', '.search-image', findByTag);
        imageListView = new ImageListView();
    };
   
    this.render = function () {
        this.$el.html(this.template());
        $('.content', this.$el).html(imageListView.$el);
        return this;
    };
    this.backFunct = function (event) {
        $('body').html(new HomeView(service, num, localStorage).render().$el);
    };
    this.initialize();
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