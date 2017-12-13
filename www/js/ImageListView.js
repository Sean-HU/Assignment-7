var ImageListView = function () {
    var pictures;
    this.render = function () {
        this.$el.html(this.template(pictures));
        return this;
    };
    this.setPictures = function (list) {
        pictures = list;
        this.render();
    }
    this.initialize = function () {
        this.$el = $('<div/>');
        this.render();
    };
    this.initialize();
}