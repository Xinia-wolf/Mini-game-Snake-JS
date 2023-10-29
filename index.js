class SnakeHead {
    // Определяем конструктор, который включает массив клеток змеи 
    // и количество очков
    constructor() {
        this._snake = [];
        this._result = 0;
    };

    // метод, позволяющий на старте добавить первые две клетки в массив
    addToSnake(element1, element2) {
        this._snake.push(element1, element2);
        this._snake[0].classList.add("snakehead");
        this._snake[1].classList.add("snaketail");
    };

    moveLeft() {
        // метод - движение змеи влево
        let snakehead = snakeHead._snake[0];
        let apple = document.querySelector(".apple");
        function operateLeft(a) {
            let result;
            // это условие работает, если змейка попадает на левый край поля
            if ([1, 11, 21, 31, 41, 51, 61, 71, 81, 91].includes(a)) {
                result = a + 9;
                justMove(result);
            } else if (a == +apple.id && apple == null) {
                // это условие включено для исключения ситуации, когда змея съела яблоко
                // а следующее не успело появиться, в итоге змейка останавливается
                createApple();
                operateLeft(+snakehead.id);
            } else if (a == +apple.id) {
                // это условие работает, если змейка попадает на клетку с яблоком
                result = +snakeHead._snake[snakeHead._snake.length - 1].id + 1;
                // находим клетку справа от последней клетки хвоста, 
                // чтобы присвоить ей соответствующий класс
                eatApple(result);
            } else {
                // условие, которое работает во всех остальных случаях
                result = a - 1;
                justMove(result);
            };
        };

        // функция, реализующая движение змейки
        function justMove(leftCellId) {
            let leftCell = document.getElementById(leftCellId);
            leftCell.classList.add("snakehead");
            snakeHead._snake.unshift(leftCell);
            snakeHead._snake[snakeHead._snake.length - 1].classList.remove("snaketail");
            snakeHead._snake.pop();
            snakeHead._snake[1].classList.add("snaketail");
            snakeHead._snake[1].classList.remove("snakehead");
            checkState(leftCellId);
        };

        // функция, позволяющая проверить, не столкнулся ли хвост с головой 
        // или с границей поля, и если да, она реализует конец игры
        function checkState(snakeheadId) {
            for (let i = 1; i < snakeHead._snake.length; i++) {
                if ((snakeHead._snake[0] == snakeHead._snake[i]) || ([10, 20, 30, 40, 50, 60, 70, 80, 90, 100].includes(+snakeheadId))) {
                    snakeHead._snake.splice(0, snakeHead._snake.length);
                    if (parseInt(localStorage.getItem("bestResult")) < parseInt(snakeHead._result)) {
                        localStorage.setItem("bestResult", snakeHead._result);
                    };
                    let bestResult = document.querySelector(".bestResult");
                    let bestResultRecord = localStorage.getItem("bestResult");
                    bestResult.innerHTML = parseInt(bestResultRecord);
                    restartButton.style.display = "block";
                    alert("Игра окончена!");
                } else {
                    continue;
                };
            };
        };

        // функция, которая вызывается при попадании на клетку с яблоком
        function eatApple(rightCellId) {
            apple.classList.remove("apple");
            let rightCell = document.getElementById(rightCellId);
            rightCell.classList.add("snaketail");
            snakeHead._snake.push(rightCell);
            createApple();
            let resultRecord = document.querySelector(".currentResult");
            snakeHead._result = parseInt(snakeHead._result) + 1;
            resultRecord.innerHTML = snakeHead._result;
        };

        // генератор случайных чисел
        function generateRandom() {
            let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            for (let i = 0; i < snakeHead._snake.length; i++) {
                num == +snakeHead._snake[i].id ? generateRandom() : i++;
            };
            return num;
        };

        // функция, которая вызывается для генерации на поле следующего яблока
        function createApple() {
            if (document.querySelector(".apple") == null) {
                let randomCellId = generateRandom();
                let randomCell = document.getElementById(`${randomCellId}`);
                randomCell.classList.add("apple");
            };
        };

        // вызываем функцию, генерирующую собственно движение налево
        operateLeft(+snakehead.id);
    };

    /* Так же точно построены методы, реализующие движение в разных направлениях */

    // метод - движение змеи вверх
    moveUp() {
        let snakehead = snakeHead._snake[0];
        let apple = document.querySelector(".apple");
        function operateUp(a) {
            let result;
            if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(a)) {
                result = a + 90;
                justMove(result);
            } else if (a == +apple.id && apple == null) {
                createApple();
                operateUp(+snakehead.id);
            } else if (a == +apple.id) {
                result = +snakeHead._snake[snakeHead._snake.length - 1].id + 10;
                eatApple(result);
            } else {
                result = a - 10;
                justMove(result);
            };
        };
       
        function justMove(topCellId) {
            let topCell = document.getElementById(topCellId);
            topCell.classList.add("snakehead");
            snakeHead._snake.unshift(topCell);
            snakeHead._snake[snakeHead._snake.length - 1].classList.remove("snaketail");
            snakeHead._snake.pop();
            snakeHead._snake[1].classList.add("snaketail");
            snakeHead._snake[1].classList.remove("snakehead");
            checkState(topCellId);
        };

        function checkState(snakeheadId) {
            for (let i = 1; i < snakeHead._snake.length; i++) {
                if ((snakeHead._snake[0] == snakeHead._snake[i]) || ([91, 92, 93, 94, 95, 96, 97, 98, 99, 100].includes(+snakeheadId))) {
                    snakeHead._snake.splice(0, snakeHead._snake.length);
                    if (parseInt(localStorage.getItem("bestResult")) < parseInt(snakeHead._result)) {
                        localStorage.setItem("bestResult", snakeHead._result);
                    };
                    let bestResult = document.querySelector(".bestResult");
                    let bestResultRecord = localStorage.getItem("bestResult");
                    bestResult.innerHTML = parseInt(bestResultRecord);
                    restartButton.style.display = "block";
                    alert("Игра окончена!");
                } else {
                    continue;
                };
            };
        };

        function eatApple(bottomCellId) {
            apple.classList.remove("apple");
            let bottomCell = document.getElementById(bottomCellId);
            bottomCell.classList.add("snaketail");
            snakeHead._snake.push(bottomCell);
            createApple();
            let resultRecord = document.querySelector(".currentResult");
            snakeHead._result = parseInt(snakeHead._result) + 1;
            resultRecord.innerHTML = snakeHead._result;
        };

        function generateRandom() {
            let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            for (let i = 0; i < snakeHead._snake.length; i++) {
                num == +snakeHead._snake[i].id ? generateRandom() : i++;
            };
            return num;
        };

        function createApple() {
            if (document.querySelector(".apple") == null) {
                let randomCellId = generateRandom();
                let randomCell = document.getElementById(`${randomCellId}`);
                randomCell.classList.add("apple");
            };
        };

        operateUp(+snakehead.id);
    };

    // метод - движение змеи вниз
    moveDown() {
        let snakehead = snakeHead._snake[0];
        let apple = document.querySelector(".apple");
        function operateDown(a) {
            let result;
            if ([91, 92, 93, 94, 95, 96, 97, 98, 99, 100].includes(a)) {
                result = a - 90;
                justMove(result);
            } else if (a == +apple.id && apple == null) {
                createApple();
                operateDown(+snakehead.id);
            } else if (a == +apple.id) {
                result = +snakeHead._snake[snakeHead._snake.length - 1].id - 10;
                eatApple(result);
            } else {
                result = a + 10;
                justMove(result);
            };
        };

        function justMove(bottomCellId) {
            let bottomCell = document.getElementById(bottomCellId);
            bottomCell.classList.add("snakehead");
            snakeHead._snake.unshift(bottomCell);
            snakeHead._snake[snakeHead._snake.length - 1].classList.remove("snaketail");
            snakeHead._snake.pop();
            snakeHead._snake[1].classList.add("snaketail");
            snakeHead._snake[1].classList.remove("snakehead");
            checkState(bottomCellId);
        };

        function checkState(snakeheadId) {
            for (let i = 1; i < snakeHead._snake.length; i++) {
                if ((snakeHead._snake[0] == snakeHead._snake[i]) || ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(+snakeheadId))) {
                    snakeHead._snake.splice(0, snakeHead._snake.length);
                    if (parseInt(localStorage.getItem("bestResult")) < parseInt(snakeHead._result)) {
                        localStorage.setItem("bestResult", snakeHead._result);
                    };
                    let bestResult = document.querySelector(".bestResult");
                    let bestResultRecord = localStorage.getItem("bestResult");
                    bestResult.innerHTML = parseInt(bestResultRecord);
                    restartButton.style.display = "block";
                    alert("Игра окончена!");
                } else {
                    continue;
                };
            };
        };

        function eatApple(topCellId) {
            apple.classList.remove("apple");
            let topCell = document.getElementById(topCellId);
            topCell.classList.add("snaketail");
            snakeHead._snake.push(topCell);
            createApple();
            let resultRecord = document.querySelector(".currentResult");
            snakeHead._result = parseInt(snakeHead._result) + 1;
            resultRecord.innerHTML = snakeHead._result;
        };

        function generateRandom() {
            let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            for (let i = 0; i < snakeHead._snake.length; i++) {
                num == +snakeHead._snake[i].id ? generateRandom() : i++;
            };
            return num;
        };

        function createApple() {
            if (document.querySelector(".apple") == null) {
                let randomCellId = generateRandom();
                let randomCell = document.getElementById(`${randomCellId}`);
                randomCell.classList.add("apple");
            };
        };

        operateDown(+snakehead.id);
    };

    // метод - движение змеи вправо
    moveRight() {
        let snakehead = snakeHead._snake[0];
        let apple = document.querySelector(".apple");
        function operateRight(a) {
            let result;
            if ([10, 20, 30, 40, 50, 60, 70, 80, 90, 100].includes(a)) {
                result = a - 9;
                justMove(result);
            } else if (a == +apple.id && apple == null) {
                createApple();
                operateRight(+snakehead.id);
            } else if (a == +apple.id) {
                result = +snakeHead._snake[snakeHead._snake.length - 1].id - 1;
                eatApple(result);
            } else {
                result = a + 1;
                justMove(result);
            };
        };

    function justMove(rightCellId) {
        let rightCell = document.getElementById(rightCellId);
        rightCell.classList.add("snakehead");
        snakeHead._snake.unshift(rightCell);
        snakeHead._snake[snakeHead._snake.length - 1].classList.remove("snaketail");
        snakeHead._snake.pop();
        snakeHead._snake[1].classList.add("snaketail");
        snakeHead._snake[1].classList.remove("snakehead");
        checkState(rightCellId);
    };

    function checkState(snakeheadId) {
        for (let i = 1; i < snakeHead._snake.length; i++) {
            if ((snakeHead._snake[0] == snakeHead._snake[i]) || ([11, 21, 31, 41, 51, 61, 71, 81, 91, 100].includes(+snakeheadId))) {
                snakeHead._snake.splice(0, snakeHead._snake.length);
                if (parseInt(localStorage.getItem("bestResult")) < parseInt(snakeHead._result)) {
                    localStorage.setItem("bestResult", snakeHead._result);
                };
                let bestResult = document.querySelector(".bestResult");
                let bestResultRecord = localStorage.getItem("bestResult");
                bestResult.innerHTML = parseInt(bestResultRecord);
                restartButton.style.display = "block";
                alert("Игра окончена!");
            } else {
                continue;
            };
        };
    };

    function eatApple(leftCellId) {
        apple.classList.remove("apple");
        let leftCell = document.getElementById(leftCellId);
        leftCell.classList.add("snaketail");
        snakeHead._snake.push(leftCell);
        createApple();
        let resultRecord = document.querySelector(".currentResult");
        snakeHead._result = parseInt(snakeHead._result) + 1;
        resultRecord.innerHTML = snakeHead._result;
    };

    function generateRandom() {
        let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        for (let i = 0; i < snakeHead._snake.length; i++) {
            num == +snakeHead._snake[i].id ? generateRandom() : i++;
        };
        return num;
    };

    function createApple() {
        if (document.querySelector(".apple") == null) {
            let randomCellId = generateRandom();
            let randomCell = document.getElementById(`${randomCellId}`);
            randomCell.classList.add("apple");
        };
    };

    operateRight(+snakehead.id);
};
};

// Создаём переменную - объект соответствующего класса
const snakeHead = new SnakeHead();


// Добавляем в массив-змейку первые две клетки в центре поля
snakeHead.addToSnake(document.getElementById("45"), document.getElementById("46"));

// Записываем в div, который должен содержать результат, количество очков
const resultRecord = document.querySelector(".currentResult");
resultRecord.innerHTML = snakeHead._result;

// Записываем в соответствующий div лучший результат, если он есть
const bestResult = document.querySelector(".bestResult");
const bestResultRecord = localStorage.getItem("bestResult");
if(bestResultRecord) {
    bestResult.innerHTML = parseInt(bestResultRecord);
};

// Переменная, содержащая элемент с кнопкой рестарта
const restartButton = document.querySelector(".restart");

// Делаем так, чтобы при нажатии на мышь генерировалось яблоко,
// и змейка ползла влево
const field = document.querySelector(".field");
field.addEventListener("click", () => {
    if (document.querySelector(".apple") == null) {
        let randomCell = (Math.floor(Math.random() * (100-1)) + 1);
        if (randomCell !== 45 && randomCell !== 46) {
            document.getElementById(`${randomCell}`).classList.add("apple");
        };
    };
    timerId = setInterval(snakeHead.moveLeft, 500);
});

// Привязываем движение змейки в разные стороны к нажатию кнопок на клавиатуре
window.addEventListener("keydown", function(event) {
    if (event.code == "ArrowUp") {
        clearInterval(timerId);
        timerId = setInterval(snakeHead.moveUp, 500);
    };
    if (event.code == "ArrowLeft") {
        clearInterval(timerId);
        timerId = setInterval(snakeHead.moveLeft, 500);
    };
    if (event.code == "ArrowDown") {
        clearInterval(timerId);
        timerId = setInterval(snakeHead.moveDown, 500);
    };
    if (event.code == "ArrowRight") {
        clearInterval(timerId);
        timerId = setInterval(snakeHead.moveRight, 500);
    };
});

// Реализуем возобновление игры при нажатии кнопки "рестарт"
restartButton.addEventListener("click", () => {
    clearInterval(timerId);
    document.querySelector(".apple").classList.remove("apple");
    document.querySelector(".snakehead").classList.remove("snakehead");
    let oldSnake = document.getElementsByClassName("snaketail");
    while (oldSnake.length) {
        oldSnake[0].className = oldSnake[0].className.replace(/\bsnaketail\b/g, "");
    };
    snakeHead._result = 0;
    resultRecord.innerHTML = parseInt(snakeHead._result);
    snakeHead.addToSnake(document.getElementById("45"), document.getElementById("46"));
    if (document.querySelector(".apple") == null) {
        let randomCell = (Math.floor(Math.random() * (100-1)) + 1);
        if (randomCell !== 45 && randomCell !== 46) {
            document.getElementById(`${randomCell}`).classList.add("apple");
        };
    };
    timerId = setInterval(snakeHead.moveLeft, 500);
});










