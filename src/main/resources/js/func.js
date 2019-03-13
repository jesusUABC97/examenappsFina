
<script src="https://apis.google.com/js/api.js"></script>


/*<![CDATA[*/

var nombre = /*[[${cita.nombre}]]*/ 'Name';
var asunto = /*[[${cita.asunto}]]*/ 'Sympthom';
var anio =  /*[[${cita.anio}]]*/ "Date"  ;
var mes =   /*[[${cita.mes}]]*/"Mes";
var dia = /*[[${cita.dia}]]*/"Day";
var fecha = anio+ '-' + mes + '-' + dia + "T09:00:00-07:00"



/*]]>*/

/**
 * Sample JavaScript code for calendar.events.insert
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
        .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.

function execute() {

    return gapi.client.calendar.events.insert({

        "calendarId": "uabc.edu.mx_4j1g44q92o639fn2q9rgrmalc0@group.calendar.google.com",
        "resource": {

            "summary": nombre,
            "location": "Unidad de enfermeria, Ingenieria",
            "description": asunto,

            'start':{
                "dateTime": fecha,
                "timeZone": "America/Los_Angeles"
            },
            'end':{
                "dateTime": fecha,
                "timeZone": "America/Los_Angeles"
            }
        }

    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Se agrego la cita", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "113331073243-ap6ed5g51c2gt0qr2m2fa4bodf5hhnk8.apps.googleusercontent.com"});
});


function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'AIzaSyBr0VVqSNb7CGs9bb5oJyWHorkK_8TnDfY',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        // clientId and scope are optional if auth is not required.
        'clientId': '113331073243-ap6ed5g51c2gt0qr2m2fa4bodf5hhnk8.apps.googleusercontent.com',
        'scope': 'profile',
    }).then(function() {
        // 3. Initialize and make the API request.
        return gapi.client.people.people.get({
            'resourceName': 'people/me',
            'requestMask.includeField': 'person.names'
        });
    }).then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);


