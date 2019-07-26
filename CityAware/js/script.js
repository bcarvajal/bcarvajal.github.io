
var colores = [

    "#f26a2c",
    "#dd1768",
    "#00689d",
	"#b40e9a"
];

function rand(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomcolor() {

    return colores.splice(rand(0, colores.length - 1), 1);
}

function getProgressBarColor(x){

	return "bg-" + ["danger", "info", "success", "primary", "primary"][ parseInt( (x+1)/25 ) ];
}

var nodeCount = 0;
var nodeTemplate = "";

function getCard(proyect) {

	var node = nodeTemplate;

	node = node.replace("proyect-index", nodeCount);
	node = node.replace("proyect-id", "card-" + (nodeCount++));
	node = node.replace("proyect-title", proyect.name);
	node = node.replace("proyect-description", proyect.description);
	node = node.replace("proyect-default-image.jpg", proyect.image);
	node = node.replace("proyect-image-description", proyect.description);
	node = node.replace("proyect-status", proyect.status);
	node = node.replace(/proyect-progress/g, proyect.progress); // more than 1 ocurrences
	node = node.replace("proyect-progress-color", getProgressBarColor);
	node = node.replace("proyect-extra-classes", "text-white");
	node = node.replace("proyect-extra-styles", "background-color: " + getRandomcolor() + ";");
	node = node.replace("proyect-collaborators", proyect.collaborators);

	return $(node);
}

window.onload = function() {

    nodeTemplate = $("#proyect-id").prop("outerHTML");

    var proyects = [

        {
            name: "Deep flush",
            image: "example1.jpg",
            status: "Activo",
            progress: rand(0, 100),
            description: "Este proyecto busca corroborar la frecuencia y calidad con la que se limpian todos los baños de la Universidad Andres Bello. ",
            collaborators: 4
        },

        {
            name: "Man, SHHHH! in Learning",
            image: "example2.jpg",
            status: "Aprobado",
            progress: rand(0, 100),
            description: "Proyecto que busca recopilar informacion sobre el nivel de contaminacion acustica en los lugares de estudio de la UNAB.",
            collaborators: 0
        },

        {
            name: "Ñam Ñam Network",
            image: "example3.jpg",
            status: "Finalizado",
            progress: rand(0, 100),
            description: "Queremos saber cuantos alumnos piden comida de afuera para implementar un sistema similar y asi el dinero queda en la Universidad.",
            collaborators: 256
        },

        {
            name: "Cafe ioTé",
            image: "example4.jpg",
            status: "En Proceso",
            progress: rand(0, 100),
            description: "Desde la antiguedad la humanidad busca saber que es lo que prefieren los alumnos y funcionaros de la unab ¿Té o Café?",
            collaborators: 1
        }
    ];

    var container = $("#cards-container").empty();
    proyects.map( x => getCard(x).appendTo(container) );
}
