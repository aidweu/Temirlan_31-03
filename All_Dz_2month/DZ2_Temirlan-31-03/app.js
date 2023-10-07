var Starbucks = {
    Coffee: [
        {
            name: "Кофе Латте по-кыргызски",
            description: "Горячий напиток с эспрессо и молоком."
        },
        {
            name: "Американо по-кыргызски",
            description: "Простой кофе, приготовленный добавлением горячей воды к эспрессо."
        },
        {
            name: "Капучино по-кыргызски",
            description: "Кыргызский кофе с эспрессо, молоком и молочной пенкой."
        },
    ],
    Tea: [
        {
            name: "Зеленый чай (Кок Чай)",
            description: "Чай, приготовленный из зеленых чайных листьев."
        },
        {
            name: "Черный чай (Кара Чай)",
            description: "Классический черный чай с крепким вкусом."
        },
        {
            name: "Чай с мятой по-кыргызски",
            description: "Черный чай с добавлением свежей мяты."
        },
    ],
    Drinks: [
        {
            name: "Шоколадный коктейль по-кыргызски",
            description: "Напиток с молоком, шоколадом и взбитыми сливками."
        },
        {
            name: "Фреш апельсиновый по кыргызски",
            description: "Свежевыжатый апельсиновый сок."
        },
    ],
    Smooth: [
        {
            name: "Манговый смузи по-кыргызки",
            description: "Освежающий напиток из манго, йогурта и меда."
        },
        {
            name: "Земляника-банан смузи по-кыргызски",
            description: "Смузи с земляникой, бананом и йогуртом."
        },
    ],
    Snacks: [
        {
            name: "Круассан с шоколадом по-кыргызски",
            description: "Пышный круассан с начинкой из темного шоколада."
        },
        {
            name: "Кыргызский йогурт с медом и орехами по-кыргызски",
            description: "Порция кыргызского йогурта с медом и орехами."
        },
    ],
};

console.log("Меню Старбакс:");
console.log("КОФЕ:");
Starbucks.Coffee.forEach((drink) => {
    console.log(`${drink.name}: ${drink.description}`);
});

console.log("\nЧАЙ:");
Starbucks.Tea.forEach((drink) => {
    console.log(`${drink.name}: ${drink.description}`);
});

console.log("\nНАПИТКИ:");
Starbucks.Drinks.forEach((drink) => {
    console.log(`${drink.name}: ${drink.description}`);
});

console.log("\nСМУЗИ:");
Starbucks.Smooth.forEach((drink) => {
    console.log(`${drink.name}: ${drink.description}`);
});

console.log("\nЗАКУСКИ:");
Starbucks.Snacks.forEach((snack) => {
    console.log(`${snack.name}: ${snack.description}`);
});
