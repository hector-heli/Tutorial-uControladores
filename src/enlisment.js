
export const enlistment =
    `<h2> Alistamiento del proyecto</h2><br>
    <p> En esta sección vamos a configurar el software de simulación, descargando archivos necesarios para la simulación de nuestro proyecto. </p>
    <ol>
        <li>
            <h3>Descarga de documentos guía</h3>
            <ul>
                <li>
                    <h4> Plano guía</h4>
                    <p>La siguiente imagen muestra el resultado después de haber terminado el diagrama esquemático</p>
                    <img src="./img/Entrenador_160.SVG" alt="entrenador" />
                </li>
                <li>
                    <h4> Guía de código </h4>
                    <p> El documento con el código necesario para la simulación lo puede descargar desde <a href="https://drive.google.com/file/d/1XiRCsiKXP083vCipTLUeV_i_aiU5CpjT/view?usp=share_link" target="_blank">aquí</a>.</p>
                </li>
                <li>
                    <h4> Importación de la plantilla de trabajo </h4>
                    <p> La plantilla es el archivo que contiene la información del espacio de trabajo en el simulador. Para importarlo en Proteus descargue el archivo en el siguiente <a href="https://drive.google.com/file/d/0B4EmhqKoqc4bZHNjZklwYmpnOFk/view?usp=share_link&resourcekey=0-JyM7V75AIyDZ66NbMq_5Cg"
                            target="_blank">enlace</a> y guárdelo en el siguiente directorio de su computador:</p>
                    <a href="C:\Program Files (x86)\Labcenter Electronics\Proteus 8 Professional\DATA\TEMPLATES">
                        C:\Program Files (x86)\Labcenter Electronics\Proteus 8 Professional\DATA\TEMPLATES
                    </a>
                </li>
                <li>
                    <h4> Importación de bibliotecas de componentes </h4>
                    <p> Podemos importar componentes externos y usarlos según nuestras necesidades. <br> Para importarlo en Proteus, descargue los archivos: <br><a href="https://drive.google.com/file/d/1TB_BVZ2VEp0IiBiOw4RX08EpaUk9c6UU/view?usp=share_link"
                            target="_blank">L298MotorDriverTEP.IDX</a> y
                        <a href="https://drive.google.com/file/d/1b1bGQpKc3dZRPvJMseAaeSqS9JcN-lSo/view?usp=share_link" target="_blank">L298MotorDriverTEP.LIB</a>. <br> Guardelos en el siguiente directorio de su computador:</p>
                    <a href="C:\Program Files (x86)\Labcenter Electronics\Proteus 8 Professional\DATA\LIBRARY">
                        C:\C:\Program Files (x86)\Labcenter Electronics\Proteus 8 Professional\DATA\LIBRARY
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <h3> Creación de Proyecto </h3>
            <ul>
                <li>
                    <h4> Crear una carpeta </h4>
                    <p>Cree una carpeta con el nombre y en la ubicación del computador elegidos por usted. En este directorio vamos a guardar todos los archivos generados durante el desarrollo del proyecto.</p>
                </li>
                <li>
                    <h4> Generar el proyecto del simulador </h4>
                    <ul>
                        <li>
                            Abra el simulador Proteus. El aspecto inicial se presenta a continuación
                            <img src="./img/pantalla-inicio.png" alt="pantalla de inicio">
                        </li>
                        <li> Haga click sobre el botón New Project <br>
                            <img src="./img/nuevo-proyecto.png" alt="iniciar creación de proyecto" width="600px">
                        </li>
                        <li>
                            <p>
                                En este paso vamos a crear la base de nuestro proyecto. Para esto, hacemos click en el botón "Browse" de la ventana de diálogo. Debemos seleccionar la carpeta creada anteriormente .</p>
                            <p>
                                De igual forma en el campo "Name" colocamos el nombre del archivo de simulación. Por último damos click en el botón "Next".
                            </p>

                            <img src="./img/crea-proyecto.png" alt="crear proyecto" width="600px">
                        </li>
                        <li>
                            <p> Ahora aparece la ventana de selección de plantilla </p>
                            <p>Vamos a seleccionar la plantilla "SENA A2_Horizontal" y clickeamos en "Next"</p>

                            <img src="./img/ventana-plantilla.png" alt="seleccion de plantilla 1" width="300px">
                        </li>
                        <li>
                            <p> No es el propósito de este tutorial llevar a cabo el desarrollo de un PCB. Por lo tanto en la ventana de Layout seleccionamos la opción "Do not create a PCB Layout". Como aparece en la imagen </p>

                            <img src="./img/ventana-layout.png" alt="seleccion de pcb layout" width="300px">
                        </li>
                        <li>
                            <p> En la ventana mostrada a continuación tenemos la opción para programar el firmware del proyecto directamente en Proteus. Para nuestro proyecto vamos a programar el arduino desde un editor de código externo, por tanto, elegimos
                                la opción "No Firmware Project" y damos click en el botón "Next"</p>

                            <img src="./img/ventana-firmware.png" alt="programación de firmware" width="300px">
                        </li>
                        <li>
                            <p> En esta ventana se resume la configuración del proyecto. Para nuestro caso, solo vamos a realizar el esquemático usando la plantilla importada, sin diseño PCB ni programación de firmware. Damos click en el botón "Finish".</p>

                            <img src="./img/ventana-resumen.png" alt="resumen de configuración" width="300px">
                        </li>
                        <li>
                            <p> La imágen muestra el aspecto inicial de nuestro espacio de trabajo. </p>

                            <img src="./img/Espacio-trabajo-inicial.png" alt="workSpace inicial" width="300px">
                        </li>
                    </ul>

                </li>
            </ul>
        </li>
    </ol>`





