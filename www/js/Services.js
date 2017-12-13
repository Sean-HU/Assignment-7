var Services = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var picture = null;
        var l = pictures.length;
        for (var i=0; i < l; i++) {
            if (pictures[i].id === id) {
                picture = pictures[i];
                break;
            }
        }
        deferred.resolve(picture);
        return deferred.promise();
    }
    
    this.findByTag = function (searchImage) {
        var deferred = $.Deferred();
        var results = pictures.filter(function (element) {
            var tag = element.tags;
            return (tag.toLowerCase().indexOf(searchImage.toLowerCase()) > -1);
        });
        deferred.resolve(results);
        return deferred.promise();
    }
    
    var pictures = [];

    this.append = function(num, tag, fileName, url){
        var deferred = $.Deferred();
        pictures.push({id: num, tags: tag, file: fileName, pic: url});
        deferred.resolve(pictures);
        return deferred.promise();
    }



}