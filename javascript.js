

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
    }
]
let conteo = carros.length

for (let i = 0; i < conteo; i++) {
    document.write(conteo[i].tipo +'<br>')
 }