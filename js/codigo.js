ocultarSecciones();
eventBtn()

function innerSimple(id,txt){
    document.querySelector(id).innerHTML=txt;
}
function ocultarSecciones() {
    let secciones = document.querySelectorAll(".secciones ");
    for (let i = 0; i < secciones.length; i++) {
        const seccion = secciones[i];
        seccion.style.display = "none";  
    }

}
function cambiarSeccion(nuevaSeccion) {
    let bienvenida = document.querySelector(".bienvenida");
    bienvenida.style.display = "none";
    ocultarSecciones();
    document.querySelector("#" + nuevaSeccion).style.display = "block";
}
function mostrarSeccion(){
    let idBoton = this.getAttribute("id");
    let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.slice(4);
    console.log(idSeccion)
    cambiarSeccion(idSeccion);
    switch (idBoton) {
        case "btnSeccionProyectos":
            innerSimple("#seccionProyectos",`<h2>Proyectos</h2><hr><p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>`)
            break;
        case "btnSeccionEstudios":
            innerSimple("#seccionEstudios",`<h2>Estudios</h2><hr>
            <p>¿De dónde viene?
            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32
            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham."</p>`)
            break;
        case "btnSeccionContacto":
            innerSimple("#seccionContacto",`<h2>Formas de contacto</h2><hr><p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
            <div id="contacto">
            <label for="txtNombre">Ingrese su Nombre:</label>
            <input type="text" id="txtNombre">
            <label for="txtEmail">Ingrese su email:</label>
            <input type="email" id="txtEmail">
            <textarea placeholder="Ingresa tu mensaje aquí." ></textarea>
            <input type="button" value="Enviar" id="btnMensaje">
        </div>
            <p>Email:rodriguez-leandro hotmail.com</p>`)
            break;
        case "btnSeccionExperienciaLaboral":
            innerSimple("#seccionExperienciaLaboral",`<h2>Experiencias laborales</h2><hr><p>Hay muchas variaciones 
            de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya 
            sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a 
            utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido 
            en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a 
            repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) 
            en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras 
            muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado 
            siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.</p>`)
            break;
        case "btnSeccionSobreMi":
            innerSimple("#seccionSobreMi",`<h2>Un poco sobre mi</h2><hr><p>"Sed ut perspiciatis unde omnis iste natus 
            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
            spernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
            voluptas nulla pariatur?"</p>`)
            break;
    }
}
function eventBtn() {
    let botones = document.querySelectorAll(".btn");
    for (let i = 0; i < botones.length; i++) {
        const boton = botones[i];
        boton.addEventListener("click", mostrarSeccion);

    }
}
