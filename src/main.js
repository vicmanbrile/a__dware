import './style.css'

// Redireccion al intentar cerrar la pagina
window.addEventListener('beforeunload', function (e) {
var urls = [
    'https://www.youtube.com/pagina1',
    'https://www.facebook.com/pagina2',
    'https://www.instagram.com/pagina3',
    'https://tupaginaweb.com/pagina4',
    'https://tupaginaweb.com/pagina5',
    'https://tupaginaweb.com/pagina6',
    'https://tupaginaweb.com/pagina7',
    'https://tupaginaweb.com/pagina8',
    'https://tupaginaweb.com/pagina9',
    'https://tupaginaweb.com/pagina10',
    'https://tupaginaweb.com/pagina11',
    'https://tupaginaweb.com/pagina12',
    'https://tupaginaweb.com/pagina13',
    'https://tupaginaweb.com/pagina14',
    'https://tupaginaweb.com/pagina15',
    'https://tupaginaweb.com/pagina16',
];

// Abre cada URL en una nueva ventana
urls.forEach(function(url) {
    window.open(url, '_blank');
});

var confirmationMessage = 'Estás a punto de salir, se abrirán varios sitios.';
(e || window.event).returnValue = confirmationMessage; 
return confirmationMessage; 
});

// Funcion para abrir una nueva ventana
function openNewWindow(url) {
    window.open(url, '_blank', 'width=600,height=400');
}

// Abrir ventanas nuevas al cargar la pagina
window.onload = function() {
    var adUrls = [
        'https://www.youtube.com/pagina1',
        'https://www.facebook.com/pagina2',
        'https://www.instagram.com/pagina3',
        'https://www.twitch.com/pagina4',
        'https://www.pinterest.com/pagina5',
        'https://www.netflix.com/pagina6',
        'https://www.wikipedia.com/pagina7',
        'https://www.canva.com/pagina8',
        'https://chatgpt.com/?oai-dm=1.com/pagina9',
        'https://auth.netacad.com/pagina10',
        'https://tupaginaweb.com/pagina11',
        'https://tupaginaweb.com/pagina12',
        'https://tupaginaweb.com/pagina13',
        'https://tupaginaweb.com/pagina14',
        'https://tupaginaweb.com/pagina15',
        'https://tupaginaweb.com/pagina16',
    ];
    adUrls.forEach(function(url) {
        openNewWindow(url);
    });
};