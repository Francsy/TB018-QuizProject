//En primer lugar he creado una función que crea toda la estructura del quiz al pasarle un array de objetos (preguntas) y el id en el que quieres que se anide
function createQuiz (arr, id) {
    
    form = document.createElement("form");
    form.setAttribute("id", "quizform")
    form.setAttribute("name", "quiz")
    document.getElementById(id).appendChild(form);

    for (let i = 0; i < preguntas.length; i++) {

        let fieldset = document.createElement("fieldset");
        fieldset.setAttribute("id",preguntas[i].name);
        fieldset.setAttribute("class","quizfieldset");
        form.appendChild(fieldset);

        let legend = document.createElement("legend");
        legend.innerHTML = preguntas[i].question;
        fieldset.appendChild(legend);

        let input1 = document.createElement("input");
        input1.setAttribute("id", preguntas[i].optionA)
        input1.setAttribute("type", "radio");
        input1.setAttribute("name", preguntas[i].name)
        input1.setAttribute("value", preguntas[i].optionAValue)
        fieldset.appendChild(input1);

        let label1 = document.createElement("label");
        label1.setAttribute("class","optionA");
        label1.setAttribute("for",preguntas[i].optionA);
        label1.innerHTML = preguntas[i].optionAText;
        fieldset.appendChild(label1);

        let input2 = document.createElement("input");
        input2.setAttribute("id", preguntas[i].optionB)
        input2.setAttribute("type", "radio");
        input2.setAttribute("name", preguntas[i].name)
        input2.setAttribute("value", preguntas[i].optionBValue)
        fieldset.appendChild(input2);

        let label2 = document.createElement("label");
        label2.setAttribute("class","optionB");
        label2.setAttribute("for",preguntas[i].optionB);
        label2.innerHTML = preguntas[i].optionBText;
        fieldset.appendChild(label2);

        let input3 = document.createElement("input");
        input3.setAttribute("id", preguntas[i].optionC)
        input3.setAttribute("type", "radio");
        input3.setAttribute("name", preguntas[i].name)
        input3.setAttribute("value", preguntas[i].optionCValue)
        fieldset.appendChild(input3);

        let label3 = document.createElement("label");
        label3.setAttribute("class","optionC");
        label3.setAttribute("for",preguntas[i].optionC);
        label3.innerHTML = preguntas[i].optionCText;
        fieldset.appendChild(label3);

        let input4 = document.createElement("input");
        input4.setAttribute("id", preguntas[i].optionD)
        input4.setAttribute("type", "radio");
        input4.setAttribute("name", preguntas[i].name)
        input4.setAttribute("value", preguntas[i].optionDValue)
        fieldset.appendChild(input4);

        let label4 = document.createElement("label");
        label4.setAttribute("class","optionD");
        label4.setAttribute("for",preguntas[i].optionD);
        label4.innerHTML = preguntas[i].optionDText;
        fieldset.appendChild(label4);
    }

    let formButton = document.createElement("button");
    formButton.setAttribute("type","submit");
    formButton.setAttribute("value","comprobar");
    formButton.innerHTML = "Comprobar respuestas";
    form.appendChild(formButton);

}

//En segundo lugar declaramos el array de objetos con todas las preguntas que queramos, con diferentes valores a su estructura de valores 
const preguntas = [
    {
        name: "videogame",
        question: "¿Cuál fue primero?",
        optionA: "pacman-field",
        optionAText: "Pac-man",
        optionAValue: "pacman",
        optionB: "tetris-field",
        optionBText: "Tetris",
        optionBValue: "tetris",
        optionC: "pong-field",
        optionCText: "Pong",
        optionCValue: "pong",
        optionD: "supermario-field",
        optionDText: "Super Mario",
        optionDValue: "supermario",
        right: "pong"
    },
    {
        name: "writer",
        question: "¿Quién escribió: «No todos los que vagan están perdidos»?",
        optionA: "rowling-field",
        optionAText: "J. K. Rowling",
        optionAValue: "rowling",
        optionB: "tolkien-field",
        optionBText: "J. R. Tolkien",
        optionBValue: "tolkien",
        optionC: "hemingway-field",
        optionCText: "E. Hemingway",
        optionCValue: "hemingway",
        optionD: "chacon-field",
        optionDText: "D. Chacón",
        optionDValue: "chacon",
        right: "tolkien"
    },{
        name: "matrix",
        question: "¿De qué color es la pastilla que se toma Neo en la película Matrix?",
        optionA: "green-field",
        optionAText: "Verde",
        optionAValue: "green",
        optionB: "blue-field",
        optionBText: "Azul",
        optionBValue: "blue",
        optionC: "red-field",
        optionCText: "Roja",
        optionCValue: "red",
        optionD: "yellow-field",
        optionDText: "Amarilla",
        optionDValue: "yellow",
        right: "red"
    },{
        name: "filmquote",
        question: "¿En qué película aparece la siguiente frase: «Muéstrame un corazón que esté libre de necios sueños, y te enseñaré a un hombre feliz»?",
        optionA: "braveheart-field",
        optionAText: "Braveheart",
        optionAValue: "braveheart",
        optionB: "brunner-field",
        optionBText: "Blade Runner",
        optionBValue: "brunner",
        optionC: "mente-field",
        optionCText: "Una Mente Maravillosa",
        optionCValue: "mente",
        optionD: "club-field",
        optionDText: "El Club de los Poetas Muertos",
        optionDValue: "club",
        right: "club"
    },
    {
        name: "resident",
        question: "¿Cómo se llama la ciudad en la que se desarrolla Resident Evil?",
        optionA: "raccoon-field",
        optionAText: "Raccoon City",
        optionAValue: "raccoon",
        optionB: "resident-field",
        optionBText: "Resident City",
        optionBValue: "resident",
        optionC: "newyork-field",
        optionCText: "New York City",
        optionCValue: "newyork",
        optionD: "metropolis-field",
        optionDText: "Metrópolis",
        optionDValue: "metropolis",
        right: "raccoon"
    }, 
    {
        name: "camara",
        question: "¿Qué técnica para grabar, novedosa en aquellos tiempos, utilizó Kubrick en «El Resplandor»?",
        optionA: "glidecam-field",
        optionAText: "Glidecam",
        optionAValue: "glidecam",
        optionB: "bodycam-field",
        optionBText: "Bodycam",
        optionBValue: "bodycam",
        optionC: "handyman-field",
        optionCText: "Handyman",
        optionCValue: "handyman",
        optionD: "steadicam-field",
        optionDText: "Steadicam",
        optionDValue: "steadicam",
        right: "steadicam"
    },
    {
        name: "montecristo",
        question: "¿Quién escribió «El Conde de Montecristo»?",
        optionA: "herbert-field",
        optionAText: "F. Herbert",
        optionAValue: "herbert",
        optionB: "dumas-field",
        optionBText: "A. Dumas",
        optionBValue: "dumas",
        optionC: "reverte-field",
        optionCText: "A. P. Reverte",
        optionCValue: "reverte",
        optionD: "martin-field",
        optionDText: "G. R. R. Martin",
        optionDValue: "martin",
        right: "dumas"
    },
    {
        name: "zelda",
        question: "¿Cuál es el material de la primera espada que recibes en The Legend of Zelda?",
        optionA: "acero-field",
        optionAText: "Acero",
        optionAValue: "acero",
        optionB: "hueso-field",
        optionBText: "Hueso",
        optionBValue: "hueso",
        optionC: "hierro-field",
        optionCText: "Hierro",
        optionCValue: "hierro",
        optionD: "madera-field",
        optionDText: "Madera",
        optionDValue: "madera",
        right: "madera"
    },
    {
        name: "sitcom",
        question: "Serie de humor ambientada en una empresa regional de venta de papel en Scranton (Pensilvania)",
        optionA: "bigbang-field",
        optionAText: "The Big Bang Theory",
        optionAValue: "bigbang",
        optionB: "seinfeld-field",
        optionBText: "Seinfeld",
        optionBValue: "seinfeld",
        optionC: "office-field",
        optionCText: "The Office",
        optionCValue: "office",
        optionD: "friends-field",
        optionDText: "Friends",
        optionDValue: "friends",
        right: "office"
    },{
        name: "n64",
        question: "¿Cuántas entradas para mandos tiene la Nintendo 64?",
        optionA: "1-field",
        optionAText: "1",
        optionAValue: "1",
        optionB: "2-field",
        optionBText: "2",
        optionBValue: "2",
        optionC: "4-field",
        optionCText: "4",
        optionCValue: "4",
        optionD: "6-field",
        optionDText: "6",
        optionDValue: "6",
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