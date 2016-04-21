function Editor(params){
    var self = this;
    var configuration = ko.unwrap(params.configuration);
    
    self.test = ko.observable('I am here!');
}