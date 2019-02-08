/*Conectarse con el API EmailJS*/
(function() {
    emailjs.init("user_DNshJmh0bD3CjUnbB86tY");
})();
/*-----------------*/

/* Funcion que se ejecuta al mandar el form*/
function send() {

    var form = document.getElementById("contact_form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("msg").value;

        emailjs.send("default_service", "template_iaAFlRmw", { "name": nombre, "mail": email, "msg": mensaje })
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                msg();
            }, function(err) {
                console.log("FAILED. error=", err);
                msg("Error... ¡Intenta más tarde!", "error");
            });

        var l = document.getElementById("mail-feedback");
        var loader = document.getElementById("loader");
        l.innerHTML = "Enviando...";
        l.className = "loading";
        loader.className = "loader";

        function msg(msg, cls) {
            /* PARA PROBAR
            msj= "No se ha podido enviar...<br>¡Intenta más tarde!";
            cls="error"
            */
            var l = document.getElementById("mail-feedback");
            var loader = document.getElementById("loader");
            loader.className += " fade-opacity";
            l.className = cls || "success";
            l.innerHTML = msg || "¡Éxito!";
            if (!msg) {
                window.setTimeout(fadeText, 1500);

            }
        }

        function fadeText() {
            var l = document.getElementById("mail-feedback");
            var loader = document.getElementById("loader");
            var nombre = document.getElementById("nombre");
            var email = document.getElementById("email");
            var mensaje = document.getElementById("msg");
            nombre.className += " input-white pl-fade";
            email.className += " input-white pl-fade";
            mensaje.className += " input-white pl-fade";
            l.className += " fade-opacity";
            loader.className = "";
            window.setTimeout(function() {
                nombre.value = "";
                email.value = "";
                mensaje.value = "";
                window.setTimeout(function() {
                    nombre.classList.remove("input-white");
                    email.classList.remove("input-white");
                    mensaje.classList.remove("input-white");
                    nombre.classList.remove("pl-fade");
                    email.classList.remove("pl-fade");
                    mensaje.classList.remove("pl-fade");
                    var l = document.getElementById("mail-feedback");
                    l.innerHTML = "";
                    l.className = "fade-opacity";
                }, 500);
            }, 500)

        }
    });
}
