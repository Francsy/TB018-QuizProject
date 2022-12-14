//En primer lugar he creado una función que crea toda la estructura del quiz al pasarle un array de objetos (preguntas) y el id en el que quieres que se anide
function createQuiz(arr, id) {

    form = document.createElement("form");
    form.setAttribute("id", "quizform")
    form.setAttribute("name", "quiz")
    document.getElementById(id).appendChild(form);

    for (let i = 0; i < preguntas.length; i++) {

        let fieldset = document.createElement("fieldset");
        fieldset.setAttribute("id", preguntas[i].name);
        fieldset.setAttribute("class", "quizfieldset");
        form.appendChild(fieldset);

        let legend = document.createElement("legend");
        legend.innerHTML = preguntas[i].question;
        fieldset.appendChild(legend);

        for (let j = 1; j < 5; j++) {

            let input = document.createElement("input");
            input.setAttribute("id", preguntas[i][`option${j}`])
            input.setAttribute("type", "radio");
            input.setAttribute("name", preguntas[i]["name"])
            input.setAttribute("value", preguntas[i][`option${j}Value`])
            fieldset.appendChild(input);

            let label = document.createElement("label");
            label.setAttribute("class", `option${j}`);
            label.setAttribute("for", preguntas[i][`option${j}`]);
            label.innerHTML = preguntas[i][`option${j}Text`];
            fieldset.appendChild(label);
        }

    }

    let formButton = document.createElement("button");
    formButton.setAttribute("type", "submit");
    formButton.setAttribute("value", "comprobar");
    formButton.innerHTML = "Comprobar respuestas";
    form.appendChild(formButton);

}

//En segundo lugar declaramos el array de objetos con todas las preguntas que queramos, con diferentes valores a su estructura de valores 
const preguntas = [
    {
        name: "videogame",
        question: "¿Cuál fue primero?",
        option1: "pacman-field",
        option1Text: "Pac-man",
        option1Value: "pacman",
        option2: "tetris-field",
        option2Text: "Tetris",
        option2Value: "tetris",
        option3: "pong-field",
        option3Text: "Pong",
        option3Value: "pong",
        option4: "supermario-field",
        option4Text: "Super Mario",
        option4Value: "supermario",
        right: "pong"
    },
    {
        name: "writer",
        question: "¿Quién escribió: «No todos los que vagan están perdidos»?",
        option1: "rowling-field",
        option1Text: "J. K. Rowling",
        option1Value: "rowling",
        option2: "tolkien-field",
        option2Text: "J. R. Tolkien",
        option2Value: "tolkien",
        option3: "hemingway-field",
        option3Text: "E. Hemingway",
        option3Value: "hemingway",
        option4: "chacon-field",
        option4Text: "D. Chacón",
        option4Value: "chacon",
        right: "tolkien"
    }, {
        name: "matrix",
        question: "¿De qué color es la pastilla que se toma Neo en la película Matrix?",
        option1: "green-field",
        option1Text: "Verde",
        option1Value: "green",
        option2: "blue-field",
        option2Text: "Azul",
        option2Value: "blue",
        option3: "red-field",
        option3Text: "Roja",
        option3Value: "red",
        option4: "yellow-field",
        option4Text: "Amarilla",
        option4Value: "yellow",
        right: "red"
    }, {
        name: "filmquote",
        question: "¿En qué película aparece la siguiente frase: «Muéstrame un corazón que esté libre de necios sueños, y te enseñaré a un hombre feliz»?",
        option1: "braveheart-field",
        option1Text: "Braveheart",
        option1Value: "braveheart",
        option2: "brunner-field",
        option2Text: "Blade Runner",
        option2Value: "brunner",
        option3: "mente-field",
        option3Text: "Una Mente Maravillosa",
        option3Value: "mente",
        option4: "club-field",
        option4Text: "El Club de los Poetas Muertos",
        option4Value: "club",
        right: "club"
    },
    {
        name: "resident",
        question: "¿Cómo se llama la ciudad en la que se desarrolla Resident Evil?",
        option1: "raccoon-field",
        option1Text: "Raccoon City",
        option1Value: "raccoon",
        option2: "resident-field",
        option2Text: "Resident City",
        option2Value: "resident",
        option3: "newyork-field",
        option3Text: "New York City",
        option3Value: "newyork",
        option4: "metropolis-field",
        option4Text: "Metrópolis",
        option4Value: "metropolis",
        right: "raccoon"
    },
    {
        name: "camara",
        question: "¿Qué técnica para grabar, novedosa en aquellos tiempos, utilizó Kubrick en «El Resplandor»?",
        option1: "glidecam-field",
        option1Text: "Glidecam",
        option1Value: "glidecam",
        option2: "bodycam-field",
        option2Text: "Bodycam",
        option2Value: "bodycam",
        option3: "handyman-field",
        option3Text: "Handyman",
        option3Value: "handyman",
        option4: "steadicam-field",
        option4Text: "Steadicam",
        option4Value: "steadicam",
        right: "steadicam"
    },
    {
        name: "montecristo",
        question: "¿Quién escribió «El Conde de Montecristo»?",
        option1: "herbert-field",
        option1Text: "F. Herbert",
        option1Value: "herbert",
        option2: "dumas-field",
        option2Text: "A. Dumas",
        option2Value: "dumas",
        option3: "reverte-field",
        option3Text: "A. P. Reverte",
        option3Value: "reverte",
        option4: "martin-field",
        option4Text: "G. R. R. Martin",
        option4Value: "martin",
        right: "dumas"
    },
    {
        name: "zelda",
        question: "¿Cuál es el material de la primera espada que recibes en The Legend of Zelda?",
        option1: "acero-field",
        option1Text: "Acero",
        option1Value: "acero",
        option2: "hueso-field",
        option2Text: "Hueso",
        option2Value: "hueso",
        option3: "hierro-field",
        option3Text: "Hierro",
        option3Value: "hierro",
        option4: "madera-field",
        option4Text: "Madera",
        option4Value: "madera",
        right: "madera"
    },
    {
        name: "sitcom",
        question: "Serie de humor ambientada en una empresa regional de venta de papel en Scranton (Pensilvania)",
        option1: "bigbang-field",
        option1Text: "The Big Bang Theory",
        option1Value: "bigbang",
        option2: "seinfeld-field",
        option2Text: "Seinfeld",
        option2Value: "seinfeld",
        option3: "office-field",
        option3Text: "The Office",
        option3Value: "office",
        option4: "friends-field",
        option4Text: "Friends",
        option4Value: "friends",
        right: "office"
    }, {
        name: "n64",
        question: "¿Cuántas entradas para mandos tiene la Nintendo 64?",
        option1: "1-field",
        option1Text: "1",
        option1Value: "1",
        option2: "2-field",
        option2Text: "2",
        option2Value: "2",
        option3: "4-field",
        option3Text: "4",
        option3Value: "4",
        option4: "6-field",
        option4Text: "6",
        option4Value: "6",
        right: "4"
    }
]

//En tercer lugar llamamos a la función createQuiz con el id de la sección main del HTML

createQuiz(preguntas, "quizmain");


//En cuarto lugar vamos a hacer toda la validación del formulario:

document.querySelector('#quizform').addEventListener('submit', function (event) {
    event.preventDefault();

    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = event.target[preguntas[i].name].value;
        if (respuesta == "") {
            alert(`Por favor, responde a la pregunta nº ${i + 1}`);
            return;
        }
    }

    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = event.target[preguntas[i].name].value;
        if (respuesta != preguntas[i].right) {

            document.querySelector(`#${preguntas[i].name}>input[type=radio]:checked + label`).style.backgroundColor = "red";
            document.querySelector(`#${preguntas[i].name}>input[type=radio]:checked + label`).style.border = "10px solid black";
        } else {
            document.querySelector(`#${preguntas[i].name}>input[type=radio]:checked + label`).style.backgroundColor = "green";
            document.querySelector(`#${preguntas[i].name}>input[type=radio]:checked + label`).style.border = "10px solid black";
        }
    }

    let total = 0;

    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = event.target[preguntas[i].name].value;
        if (respuesta == preguntas[i].right) {
            total++;
        }
    }
    if (total < preguntas.length) {
        alert(`Respondiste correctamente a ${total} preguntas de ${preguntas.length}`)
    } else {
        alert(`¡Enhorabuena, lo lograste!`)
    }
})