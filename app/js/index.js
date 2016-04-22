$(document).ready(function(){
    ko.components.register('editor-component', {
       viewModel: {
           createViewModel:  function(params, componentInfo){
               $.extend(params.configuration, {
                   url: {
                    save: '/save'           
                   }
               });
               
               return new Editor(params);
           }
       },
       template: { element: 'editor-component-template' }
    });
    
    var vm = {
        getEditorConfiguration: function(){
            return { };
        }
    };
    
    ko.applyBindings(vm, document.getElementById('main-surface'));
});