# Proyecto 2: DATA DASHBOARD
### Preámbulo
En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la mayor cantidad de datos posibles respecto al progreso de las estudiantes para apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance completando los proyectos de la Ruta de Aprendizaje y su desempeño en función a la Rúbrica de Niveles Esperados. Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que llamamos LMS (Learning Management System). El LMS acumula data sobre quién leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios completados, nota en quizzes, etc.) no impacta directamente en la evaluación de una estudiante, sí es una pieza de información relevante que las TMs quisieran visualizar para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan ver y usar la data de progreso del LMS. Para ello, proponemos crear un data dashboard (tablero de visualización de datos).

### Introducción
El segundo proyecto solicitado es un Data Dashboard, donde las TM podrán revisar de manera más sencilla y gráfica el avance que las alumnas de laboratoria realizan en el LMS.

### Proceso de planificación
Para realizar la planificación del proyecto, se utilizó un tablero Backlog y un planificador online en la plataforma Trello.
En este tercer sprint, el objetivo principal es realizar la impresión en HTML de los datos solicitados en el Readme principal.
![backlog](https://github.com/DanellySotomayor/lim-2018-05-bc-core-am-datadashboard/blob/master/img/backlog-2do-sprint.jpeg "backlog-2do-sprint")

![trello](https://github.com/DanellySotomayor/lim-2018-05-bc-core-am-datadashboard/blob/master/img/trello-data.jpg "trello-3er-sprint")


### Proceso de planeamiento del proyecto
#### Definición del producto 
Nuestro Data Dashboard busca ajustarse a las necesidades de nuestra usuario, este no solo debe de monitorizar los progresos de las estudiantes, sino también analizar temas importantes para identificar alguna problemática a resolver.

Bajo esta premisa, nuestro proyecto muestra, de manera resumida y sencilla, el avance de las estudiantes de Laboratoria con respecto a los cursos, lecturas, ejercicios y cuestionarios que realizan en el LMS. Para ello, realizamos una entrevista personal a nuestra Training Manager (TM) de Lima, Alejandra Ramirez, en la que solicitamos feedback del primer draft elaborado.

* ¿Quiénes son los principales usuarios de producto?

Las Training Manager de las diferentes sedes de Laboratoria y el equipo de colaboradores.

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Los usuarios esperan encontrar un panel que muestre de manera global los datos de los progresos de las estudiantes con respecto a su promoción, poder ordenarlos y filtrarlos  según su completitud, y realizar búsquedas por nombres, para poder realizar un mejor seguimiento y tomar decisiones acertadas con respecto a que está funcionando y qué no con respecto al aprendizaje del grupo. 

* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Al realizar la entrevista a la TM, ella nos solicitó mostrar de manera clara el porcentaje de completitud de cada alumna en cuanto a ejercicios, lecturas  y cuestionarios en un listado que pueda filtrarse. Con base en ello, trabajamos en nuestro primer prototipo de alta fidelidad en Figma.

* ¿Cuándo revisan normalmente estos datos los usuarios?

En fechas clave como al inicio y final de cada Bootcamp y al finalizar cada proyecto, para revisar el progreso de cada alumna.

* ¿Cómo crees que el producto les está resolviendo sus problemas?

La interfaz ofrecida  brinda al usuario de manera clara y rápida el progreso de cada miembro del grupo de estudiantes en una sola vista, en ella se puede realizar la búsqueda de las alumnas por nombre y filtrar de manera ascendente y descendente según su puntaje, con ello obtenemos una mejor organización, visibilidad en el menor tiempo posible.


### Planteando la interfaz
#### Prototipo de baja fidelidad
Dentro del proceso de elaboración de nuestro proyecto, se realizó el prototipado de baja fidelidad a mano alzada, según se ve a continuación:
![main](https://github.com/DanellySotomayor/lim-2018-05-bc-core-am-datadashboard/blob/master/img/principal.jpeg "vista principal")
Esta es la vista principal de la interfaz una vez elegido el Cohort Lima.

![main2](https://github.com/DanellySotomayor/lim-2018-05-bc-core-am-datadashboard/blob/master/img/filtros.jpeg "vista de filtros")  
Esta es la vista de los filtros a implementarse.

#### Prototipo de alta fidelidad
Se utilizó la herramienta Figma para realizar el prototipo de alta fidelidad. Al ser el primer objetivo conocer el avance de las alumnas, se planteó como primera interfaz una lista de avance general de todas las alumnas:
![interfaz](https://github.com/DanellySotomayor/lim-2018-05-bc-core-am-datadashboard/blob/master/img/Draft%20-%20Dashboard%20Laboratoria.png "Interfaz")

Asimismo, se implementará una vista donde se obtendrá el progreso por alumna.
![interfaz2](https://github.com/DanellySotomayor/lim-2018-05-bc-core-am-datadashboard/blob/master/img/Draft%20-%20Dashboard%20Laboratoria-1.png "Interfaz2")