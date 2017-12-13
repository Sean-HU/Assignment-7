var DownloadView = function (service, num, localStorage) {
    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '.back-btn', this.backFunc);
        this.$el.on('click', '.download-pic-btn', downloadFile);
    };
    this.render = function () {
        this.$el.html(this.template());
        return this;
    };
    this.backFunc = function (event) {
        $('body').html(new HomeView(service, num, localStorage).render().$el);
    };
    this.initialize();
    function downloadFile() {
        var file_name;
        var fileTransfer = new FileTransfer();
        var uri = encodeURI($('.input-url').val().trim());
        file_name = uri.substring(uri.lastIndexOf('/') + 1);
        var fileURL = cordova.file.cacheDirectory + file_name; // where to save
        fileTransfer.download(uri, fileURL, function (entry) {
            console.log("download complete: " + entry.toURL());
            alert("Download Complete");
            num = num + 1;
            service.append(num, $('.input-tag').val().trim(), file_name, fileURL);
            setLocalStorage($('.input-tag').val().trim(), fileURL);
        },
        function (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
            alert("Download Failed");
        },
        false, {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
        );
    }
    function setLocalStorage(tags, fileURL) { // adding data to local storage.
        localStorage.setItem(tags, fileURL);
    }
}