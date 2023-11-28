


        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("menuInicioSesion").style.display = "block";
        });

function iniciarSesion() {
            var usuario = document.getElementById("usuario").value;
            var contrasena = document.getElementById("contrasena").value;

            if (usuario === "usuario" && contrasena === "2023") {
                alert("Iniciando sesión...");
                document.getElementById("overlay").style.display = "none";
                document.getElementById("menuInicioSesion").style.display = "none";

                // Aquí puedes cargar el contenido de la página después de iniciar sesión
                $.get('lindex.html', function(data) {
                    $("#contenedor").html(data);
                });
            } else {
                alert("Error de inicio de sesión. Verifica tu usuario y contraseña.");
            }
        }

        $(document).ready(function(){
            $("#mostrarContrasena").click(function() {
                var contrasenaInput = $("#contrasena");
                contrasenaInput.prop("type", contrasenaInput.prop("type") === "password" ? "text" : "password");
            });
        });