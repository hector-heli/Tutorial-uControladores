
export const programming = `
    <h2>Programming</h2>
    <p> En esta seccion vamos a escribir el código para la placa seleccionada. En nuestro caso el Arduino Uno. Sin embargo este código puede ser usado en cualquier placa compatible con Arduino IDE.
    </p>
    <p>El código puede ser transcrito siguiendo el ejemplo dado en el documento que se puede descargar desde <a href="https://drive.google.com/file/d/165jPD5k-NHkLaUJM1zA09RgdVR4x-GTt/view?usp=classroom_web&authuser=2" target="blank">aquí</a>.
    </p>
    <p> La versión usada en este ejemplo es el Arduino 2.3.x pero no hay inconveniente con el editor de código o la versión de este.</p>
    <p> En esta sección se van a explicar diferentes alternativas para la escritura del código, asaber:</p>
    <ol>
        <li>Programación desde el Arduino IDE 1.8.19</li>
        <li>Programación desde el Arduino IDE 2.x.x</li>
        <li>Programación desde el Arduino Web Editor</li>
        <li>Programación desde el VSM de Proteus</li>
        <li>Programación desde Visual Studio Code</li>
    </ol> 
    <ol>
        <li><h3>Programación desde el Arduino 1.8.19</h3></li>
        <p> El Arduino IDE es un Entorno de Desarrollo Integrado, diseñado para la programación de placas que hacen parte del proyecto Arduino. Las instrucciones descritas aquí son para la versión 1.8.19 la cuál es la última versión soportada de Arduino versión 1. </p>
        <p> El Arduino puede ser descargado desde la pagina oficial <a href="https://www.arduino.cc/en/software">https://www.arduino.cc/en/software</a>. Al abrir el programa el IDE muestra el último programa trabajado. Si es la prinera vez que se abre el Arduino IDE después de su instalación se abrirá un sketch nuevo creado en una carpeta temporal. 
        </p>
        <ul>
            <li>
                <p> En un scketch nuevo transcriba el código del documento enlazado anteriormente. Es importante que la transcripción sea lo más fiel posible al mostrado em el documento del guía. (Tenga en cuenta que el cero (0) se parece a la O, el paréntesis '(' es parecido a una llave '{', si hay una etiqueta nombrada con letra mayúscula  debemos respetar este estado.) </p>

                <img src="./img/programmingImages/code-comparing.png" alt="comparando código"/>

                <p> Aunque los comentarios no influyen en la ejecución del programa, es importante para la evaluación que también transcriba este bloque de comentarios completamente. </p>

                <p> Este programa presenta unas secuencias de luces. Por tal razón, en las lineas de comentarios se deben escribir la descripción de dichas secuencias. De igaul forma, se debe registrar el/los nombre(s) de los autores del archivo. </p>
            </li>
            <li>
                <p> Si quiere visualizar los números de linea debe hacer una configuración en el IDE de Arduino. En el menú "Archivo" y la sección "Preferencias" se abre la ventana de configuración; activamos la opción "Mostrar números de linea" y damos click en "Ok" de la ventana. </p>

                <img src="./img/programmingImages/show-number-line.png" alt="Botón Verificar">
            </li>

            <li>
                <p> Después de transcribir el código debemos hacer la depuración de errores. En este caso nos vamos a ayudar del documento guía. </p>
                <p> Para encontrar los errores debemos hacer la compilación desde el botón "Verificar". </p>

                <img src="./img/programmingImages/verify-button.png" alt="Botón Verificar">
            </li>
            
            <li>
                <p> Como resultado en el 'output' de Arduino (recuadro azul) podremos observar los posibles errores de transcripción, lógicos o sintácticos que se hallan en nuestro código. Debemos recurrir al documento guía para identificar los errores y hacer la corrección. </p>

                <img src="./img/programmingImages/errors-correction.png" alt="Botón Verificar">
            </li>
            <p> Por ejemplo, en la ímagense muestran tres errores.  En la línesa 89 falta agregar un punto y coma al final de la linea; sin embargo en el output se muestra que el error está en la linea 90. Si vemos la descripción del error dice que falta el ; antes de la llave de cierre (}). </p>

            <p> Por esta razón se espera que usted se apoye en el pdf guía para poder corregir los errores. </p>













`; 