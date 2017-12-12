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
        deferred.resolve(employee);
        return deferred.promise();
    }
    /*
    this.findByName = function(searchFirst, searchLast) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var first = element.firstName;
            var last = element.lastName;
            return (first.toLowerCase().indexOf(searchFirst.toLowerCase()) > -1) && (last.toLowerCase().indexOf(searchLast.toLowerCase()) > -1);
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    this.findByTitle = function (searchDepartment, searchTitle) {
        var deferred = $.Deferred();
        var results = employees.filter(function (element) {
            var first = element.department;
            var last = element.title;
            return (first.toLowerCase().indexOf(searchDepartment.toLowerCase()) > -1) && (last.toLowerCase().indexOf(searchTitle.toLowerCase()) > -1);
        });
        deferred.resolve(results);
        return deferred.promise();
    }
    */
    var pictures = [];

}