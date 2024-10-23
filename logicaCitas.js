const botonSiguienteCita = document.getElementById("boton-siguiente-cita");

botonSiguienteCita.addEventListener("click", function() {
    
    const cita = generarCitasMotivacionalesEstudio();
    
    mostrarCitasAleatorias(cita)
});

function generarCitasMotivacionalesEstudio() {
    const citasMotivacionalEstudio = [
        "El aprendizaje nunca agota la mente. — Leonardo da Vinci",
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito. — Albert Schweitzer",
        "Estudia mientras otros duermen; trabaja mientras otros descansan; prepárate mientras otros juegan; y sueña mientras otros desean. — William Arthur Ward",
        "La educación es el arma más poderosa que puedes usar para cambiar el mundo. — Nelson Mandela",
        "El estudio, más allá de todos los demás dispositivos humanos, es el gran igualador de las condiciones de los hombres. — Horace Mann",
        "No hay elevación de pensamiento sin la educación del intelecto. — Cicerón",
        "La clave del éxito es el conocimiento acompañado de la acción. — Thomas Henry Huxley",
        "Cuanto más leas, más cosas sabrás. Cuanto más aprendas, a más lugares irás. — Dr. Seuss",
        "No importa lo lento que vayas, siempre y cuando no te detengas. — Confucio",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. — Vidal Sassoon",
        "Los retos son lo que hacen la vida interesante; superarlos es lo que la hace significativa. — Joshua J. Marine",
        "El conocimiento es poder. — Francis Bacon",
        "El secreto para salir adelante es comenzar. — Mark Twain",
        "El estudio constante y la perseverancia son el camino hacia el éxito. — Desconocido",
        "Cada día es una nueva oportunidad para aprender algo nuevo. — Desconocido",
        "Si las cosas no estan bien... estan mal. — Abel Lastra"
    ];
    
    const citasAleatoriasEstudio = Math.floor(Math.random() * citasMotivacionalEstudio.length);
    
    return citasMotivacionalEstudio[citasAleatoriasEstudio];

}

function mostrarCitasAleatorias(cita) {
    const cajaDeCitas = document.getElementById("caja-de-citas");

    cajaDeCitas.textContent = cita;

}

