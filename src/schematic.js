
export const schematic = `
    <h2> Diagrama esquemático </h2>
    <p>
        El objetivo de esta sección es desarrollar el esquemático del sistema eléctrico de nuestro entenador. Usaremos un snippet incluido en los recursos de Proteus para representar el Arduino.
        Seguidamente traeremos otros componentes que hacen parte del circuito y posteriormente dibujaremos las conexiones entre ellos.
    </p> 
    <ol>
        <li>
            <h3>Importar macro de Arduino UNO</h3>
            <ul>
                <li>
                    <p>Haga click en el menú "File". A continuación haga click en la opción "Import Project Clip"</p>
                    <img src="./img/import-project-clip.png" alt="Import Project Clip" width="600px" class="joint">
                </li>
                <li>
                    <p>Se abre la ventana del explorador posicionada en la carpeta "Snnipets" donde podemos ubicar dentro de la carpeta <i>"Arduino"</i> el archivo <i>"Arduino Uno 328.pdsclip"</i> y clickeamos en el botón "Abrir".</p>
                    <img src="./img/seleccion-macro-arduino.png" alt="seleccion de Arduino UNO 328" width="600px" class="joint">
                </li>
                <li>
                    <p> Vamos a ver una macro asociada al cursor del mouse. De esta forma podemos ubicar la macro y finalmente hacemos click en el lugar del espacio de trabajo donde queremos ubicar el arduino. 
                    </p><img src="./img/snippet-proteus.gif" alt="seleccion de Arduino UNO 328">                    
                </li>
            </ul>
        </li>
        <li>
            <h3>Selección de componentes </h3>
            <ul>
                <li>
                    <p>Para seleccionar los componentes necesarios para el proyecto, es abrir la libreria de componentes. Esto se hece mediante el botón 'P' o accionando la tecla 'P' en el teclado.</p>

                    <img class="joint" src="./img/abre-libreria.png" alt="pantalla de inicio" width="600px" />
                </li>
                <li>
                    <p>Al abrirse la ventana de la libreria de componentes podemos selecccionar todos los elementos que hacen parte de nuestro circuito digitando en el campo de texto "Keywords" los nombres de los componentes. <br> Para seleccionar todos los componentes, puede ayudarse del recuadro ubicado a la izquierda de la imágen, teniendo en cuenta que el componente seleccionado muestre un módelo de simulación en la ventana 'Preview'. (Debe aparecer un texto diferente a "No Simulator Model", como aparece en el cuadro a la derecha de la imágen).</p>

                    <img class="joint" src="./img/libreria-componentes.png" alt="ventana de librería" width="600px" />

                    <p>Al terminar, cierre la libreria presionando en el teclado la tecla "Esc", en la ventana de la libreria haciendo click en el botón "Aceptar" o en la "X" en la parte superior derecha de la ventana</p>
                </li>
            </ul>
        </li>
        <li>
            <h3>Ubicación y conexión de los componentes </h3>
            <ul>
                <li>
                    <p>Debe tener seleccionado el modo de componentes ("Component Mode") para la ubicación de los componentes en el espacio de trabajo. Damos click sobre el componente deseado de la lista de componentes. </p>
                    <p>Seguidamente damos click en cualquier lugar de nuestro espacio de trabajo. Una sombra de nuestro componente estará asociada al cursor del mouse, lo cual queremos aprovechar 
                    </p>
                    
                        <img src="./img/put-component.gif" alt="selección desde la lista de dispositivos">
                    
                </li>
                <li>
                    <p>Para conectar los elementos entre ellos, vamos a colocar el cursor del mouse sobre uno de los terminales de un componente hasta que aparezca un punto rojo sobre el terminal. Damos click y llevamos el cursor del mouse al terminal del componente de destino. Cuando aparezca un punto rojo damosclick y de esa manera terminamos la conexión.</p>
                    <img class="joint" src="./img/VID-20230419-WA0027.gif" alt="conexión entre componentes" width="600px">
                </li>
            </ul>
        </li>
        <li>
            <h3> Componentes importados </h3>
            <ul>
                <li>
                    <p>Podemos incluir dispositivos externos  como si hicieran parte de Proteus. Lo podemos ubicar en la biblioteca ya que al inicio del ejercicio importamos estos componentes. Para nuestro caso, hemos importado la tarjeta Driver para motores DC.</p>
                    
                    <img src="./img/motor-driver.png" alt="Motor Driver L298">
                </li>

                <li>
                    <p>Repita el proceso de ubicación de componentes según la lista de ejemplo y realice las conexiones entre los diferentes componentes.</p>
                </li>
            </ul>
        </li>
        <li>
            <h3> Conexiones especiales </h3>
            <ul>
                <li>
                    <p>Para evitar colocar muchas lineas que recorren toda la hoja y hacen que la estética del diagrama no sea la mejor, existen varios tipos de conexiones. Para este ejercicio vamos a usar conexiones en la misma hoja ("DEFAULT"), alimentación de voltaje positivo ("POWER")y alimentación negativa ("GROUND")</p>

                    <p>La selección de estas conexiones se hace dando click en el modo de herramientas "Terminals Mode", en el panel de terminales podemos elegir las respectivas conexiones.</p>
                    
                    <img src="./img/motor-driver.png" alt="Motor Driver L298">
                </li>

                <li>
                    <p>Repita el proceso de ubicación de componentes según la lista de ejemplo y realice las conexiones entre los diferentes componentes.</p>
                </li>
            </ul>
        </li>

    </ol>`