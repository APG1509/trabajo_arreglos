let pregunte

do { 
    pregunte = prompt("Contrañera") 
} while (pregunte != "101312")

document.write("Segundo punto"+'<br >'+'<br>')

document.write("1 de los 4 ejercicios fue la contraseña" + '<br >' + '<br>')

document.write("Te presento a: ")

let array = ['Henry' + ' Jose' + ' Gomes' + ' Garcia']

let persona = array.length

for (let i = 0; i < persona; i++){
    document.write(array[i] + '<br >')
}

let numero2 = 1

document.write("Tiene de edad: ")

while ((numero2 <= 2)) {
document.write(numero2)
    numero2++
}

let numero = 1  

document.write('<br>' + "Tiene ")

while (numero <= 1) {
document.write(numero)
    numero++
}

document.write(" hermano")

document.write('<br>' + '<br>' +"Segundo punto"+'<br>'+'<br>')

document.write("aqui esta el color de los 15 autos registrados"+'<br>'+'<br>')

let carros = [
    {
      "color": "morado",
      "tipo": "minivan",
      "registroDia": new Date('2017-01-03'),
      "capacidad": 7
    },
    {
      "color": "rojo",
      "tipo": "camioneta",
      "registroDia": new Date('2018-03-03'),
      "capacidad": 5
    },
    {
      "color": "blanco",
      "tipo": "sedan",
      "registroDia": new Date('2021-02-22'),
      "capacidad": 5
    },
    {
      "color": "rosa",
      "tipo": "bus",
      "registroDia": new Date('2006-07-06'),
      "capacidad": 32
    }, 
    {
      "color": "marron",
      "tipo": "camion",
      "registroDia": new Date('2017-06-02'),
      "capacidad": 3
    },
    {
        "color": "verde",
        "tipo": "hatchback",
        "registroDia": new Date('2012-09-04'),
        "capacidad": 5
    },
    {
        "color": "naranja",
        "tipo": "camioneta",
        "registroDia": new Date('2016-11-01'),
        "capacidad": 8
    },
    {
        "color": "azul",
        "tipo": "pickup",
        "registroDia": new Date('2018-04-06'),
        "capacidad": 5
    },
    {
        "color": "gris",
        "tipo": "SUV",
        "registroDia": new Date('2013-01-25'),
        "capacidad": 5
    },
    {
        "color": "piel",
        "tipo": "coupe",
        "registroDia": new Date('2018-07-30'),
        "capacidad": 5
    },
    {
        "color": "rojo",
        "tipo": "furgoneta",
        "registroDia": new Date('2000-10-17'),
        "capacidad": 3
    },
    {
        "color": "rojo",
        "tipo": "deportivo",
        "registroDia": new Date('2002-01-03'),
        "capacidad": 5
    },
    {
        "color": "azul",
        "tipo": "electrico",
        "registroDia": new Date('2017-08-09'),
        "capacidad": 5
    },
    {
        "color": "amarillo",
        "tipo": "roadster",
        "registroDia": new Date('2009-05-24'),
        "capacidad": 5
    },
    {
        "color": "rojo",
        "tipo": "camioneta",
        "registroDia": new Date('2005-11-29'),
        "capacidad": 5
    },
]

let conteo = carros.length

for (let i = 0; i < conteo; i++) {
    document.write("Color: " + carros[i].color + '<br>'+ '<br>')
}

document.write("Aqui esta la capacidad de los 15 autos registrados"+'<br>'+'<br>')

for (let i = 0; i < conteo; i++) {
    document.write("Capacidad: " + carros[i].capacidad +'<br>' +'<br>')
}

document.write("Aqui esta el tipo de auto de los 15 autos registrados"+'<br>'+'<br>')

for (let i = 0; i < conteo; i++) {
    document.write("Capacidad: " + carros[i].tipo +'<br>' +'<br>')
}

document.write("Aqui esta la fecha de registro de los 15 autos"+'<br>'+'<br>')

for (let i = 0; i < conteo; i++) {
    document.write("Capacidad: " + carros[i].registroDia +'<br>' +'<br>')
}
