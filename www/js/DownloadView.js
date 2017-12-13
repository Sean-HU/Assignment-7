var DownloadView = function (service, num, localStorage) {
    this.initialize = function () {
        this.$el = $('<div/>');
        this.$el.on('click', '.back-btn', this.backFunc);
        this.$el.on('click', '.download-pic-btn', downloadFile);
       /* this.$el.on('keyup', '.input-tags', findByName);
        this.$el.on('keyup', '.input-url', findByName);*/
        
    };
    this.render = function () {
        this.$el.html(this.template());
        return this;
    };
    this.backFunc = function (event) {
        //searchNameView.render();
        $('body').html(new HomeView(service, num, localStorage).render().$el);
    };
    this.initialize();
    function downloadFile() {
        var fileTransfer = new FileTransfer();
        var uri = encodeURI($('.input-url').val().trim());
        var fileURL = cordova.file.cacheDirectory + ($('.input-tag').val().trim()); // where to save
        fileTransfer.download(uri, fileURL, function (entry) {
            console.log("download complete: " + entry.toURL());
            alert("Download Complete");
            num = num + 1;
            //pictures.push({ id: num, tags: $('.input-tag').val().trim(), file: fileURL });
            service.append(num, $('.input-tag').val().trim(), fileURL);
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
        localStorage.setItem($('.input-tags').val().trim() + ";" + fileURL, fileURL);
        //localStorage.setItem("file", fileURL);
        
    }
}