function Editor(params){
    var self = this;
    var configuration = ko.unwrap(params.configuration);
    
    self.lunch = ko.observable({
        location: ko.observable()
    });
    
    self.save = function(){
        $.post(configuration.url.save, ko.toJSON(self.lunch))
            .done(function(data){
                
            })
            .fail(function(){
                
            })
            .always(function(){
                
            })    
    };
}