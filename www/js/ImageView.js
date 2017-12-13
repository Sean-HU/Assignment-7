var ImageView = function (picture) {
    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '.add-location-btn', this.addLocation);
    };
    this.render = function () {
        this.$el.html(this.template(picture));
        return this;
    };
    this.initialize();
}