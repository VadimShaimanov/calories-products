// калории всех блюд 

let totalColories = 0

// подсчет калорий 

function allCalories (index, title, calories, weight) {

  let productCalories = calories * weight / 100

      totalColories = totalColories + productCalories

      document.write(`<li class ="list__item">
                      ${index})
                      ${title},
                      калорийность: ${calories} ккал,
                      вес: ${weight} гр,
                      всего:${productCalories} ккал
                      </li>
                    `)
}

// функция суммарного вывода калорийности блюда

function printTotalCalories (value) {
  document.write(`<div class="total">
                  Калорийность всего блюда: ${value} ккал
                  </div>
                `)
}

let index = 0

document.write('<div class="container">')
document.write('<h1 class="title">Калькулятор калорийности блюда</h1>')
document.write('<ul class="list">')


// #1

{
  ++index 
  let productTitle = prompt(`Введите название продукта ${index}`)
  let productCalories = Number(prompt(`Количество калорий в 100 граммах продукта ${index}`))
  let productWeight = Number(prompt(`Вес продукта в граммах ${index}`))
  allCalories (index, productTitle, productCalories, productWeight)
}

// #2

{
  ++index 
  let productTitle = prompt(`Введите название продукта ${index}`)
  let productCalories = Number(prompt(`Количество калорий в 100 граммах продукта ${index}`))
  let productWeight = Number(prompt(`Вес продукта в граммах ${index}`))
  allCalories (index, productTitle, productCalories, productWeight)
}

// #3

{
  ++index 
  let productTitle = prompt(`Введите название продукта ${index}`)
  let productCalories = Number(prompt(`Количество калорий в 100 граммах продукта ${index}`))
  let productWeight = Number(prompt(`Вес продукта в граммах ${index}`))
  allCalories (index, productTitle, productCalories, productWeight)
}


document.write('</ul>')

// вывод суммарной калорийности
printTotalCalories(totalColories)

document.write('</div>')








