var DownloadView = function (service) {
    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '.download-pic-btn', downloadFile);
       /* this.$el.on('keyup', '.input-tags', findByName);
        this.$el.on('keyup', '.input-url', findByName);*/
        
    };
    this.render = function () {
        this.$el.html(this.template());
        return this;
    };
    this.initialize();
    function downloadFile() {
        var fileTransfer = new FileTransfer();
        var uri = encodeURI($('.input-url').val().trim());
        var fileURL = cordova.file.cacheDirectory + "myFile"; // where to save
        fileTransfer.download(uri, fileURL, function (entry) {
            console.log("download complete: " + entry.toURL());
            alert("Download Complete");
            num = num + 1;
            pictures.push({ id: num, tags: $('.input-url').val().trim(), file: fileURL });
            setLocalStorage(fileURL);
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
    function setLocalStorage(fileURL) { // adding data to local storage.
        localStorage.setItem("tags", $('.input-url').val().trim());
        localStorage.setItem("file", fileURL);
        
    }
}