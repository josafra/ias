document.addEventListener('deviceready', function() {
    console.log('Cordova listo - Herramientas IA funcionando');
    
    // Configurar todos los botones
    var buttons = document.querySelectorAll('.button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            
            if(url && window.cordova) {
                // Abrir en navegador interno de la app
                var options = 'location=yes,clearcache=no,clearsessioncache=no,toolbar=yes';
                cordova.InAppBrowser.open(url, '_blank', options);
            } else {
                alert('Error: No se puede abrir el enlace');
            }
        });
    });
    
}, false);