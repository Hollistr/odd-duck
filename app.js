'use strict';
// global variables
let totalVotes = 0
let allProducts = []
let imgContainer = document.getElementById("img-container")
let maxClicks = 25

// constuctor function 
function Product(name, photoExt = 'jpg') {
  this.name = name;
  this.photo =`Images/${name}.${photoExt}`;
  this.view = 0
  this.votes= 0

  allProducts.push(this);
}

Product.allProducts = []

// dom references
// let testInt1 = 0;
// let testInt2 = 0;
// let testInt3 = 0;
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

//Select a product randomly from an array of products
function getRandomNumber() {
  return Math.floor(Math.random() * allProducts.length)
}

// funtion to rnder new set of images
function renderProduct() {
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();

  // while ((product1 === product2 || product1 === product2 || product2 === product3 || product1 === testInt1 || product1 === testInt2 || product1 === testInt3 || product2 === testInt1 || product2 === testInt2 || product2 === testInt3 || product3 === testInt1 || product3 === testInt2 || product3 === testInt3));
  //   product1 = getRandomNumber();
  //   product2 = getRandomNumber();
  //   product3 = getRandomNumber();


  imgOne.alt = allProducts[product1].name;
  imgTwo.alt = allProducts[product2].name;
  imgThree.alt = allProducts[product3].name;

  imgOne.src = allProducts[product1].photo;
  imgTwo.src = allProducts[product2].photo;
  imgThree.src = allProducts[product3].photo;

  allProducts[product1].views++;
  allProducts[product2].views++;
  allProducts[product3].views++;

}
console.log(allProducts);

// function for clicks/
function handleClick(event) {
  if (event.target === imgContainer) {
    alert('Please click on an image');
    return
  }
  let imgClicked = event.target.alt;
  for (let i = 0; i < allProducts.length; i++) {
    if (imgClicked === allProducts[i].name) {
      allProducts[i].votes++;
      break;
    }
  }
  if (totalVotes === maxClicks) {
    
    imgContainer.removeEventListener('click', handleClick);
  renderChart();
  } else {
    totalVotes +=1
    renderProduct()
  }
}

// function to record votes
function renderClicks() {
  let ul = document.getElementById('resultList');
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} view and was clicked ${allProducts[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// executable code
  new Product('bag');
  new Product('banana');
  new Product('bathroom');
  new Product('boots');
  new Product('breakfast');
  new Product('bubblegum');
  new Product('chair');
  new Product('cthulhu');
  new Product('dog-duck');
  new Product('dragon');
  new Product('pen');
  new Product('pet-sweep');
  new Product('scissors');
  new Product('shark');
  new Product('sweep', 'png');
  new Product('tauntaun');
  new Product('unicorn');
  new Product('water-can');
  new Product('wine-glass');

imgContainer.addEventListener('click', handleClick)

renderProduct()

let canvasElem = document.getElementById('my-chart')

// function to display total votes
function renderChart(){
  const ctx = document.getElementById('my-chart').getContext('2d')
  let productNames = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productVotes.push(allProducts[i].votes);
    productViews.push(allProducts[i].views);
  }

// Table constructor
// const data = {
//   labels: productNames,
//   datasets: [{
//     label: 'votes',
//     data: productVotes,
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)'
//       ],
//       borderWidth: 1
//     },
//     {
//       label: 'Views',
//       data: productViews,
//       backgroundColor: [
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 159, 64)'
//       ],
//       borderWidth: 1
//     }]
//   }

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: productNames,
      datasets: [{
        label: 'votes',
        data: productVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)'
          ],
          borderWidth: 1
        },
        {
          label: 'Views',
          data: productViews,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgb(255, 159, 64)'
          ],
          borderWidth: 1
        }]
      }
//      labels: productNames,
  //    datasets: [
       // data,
    //  ]
    ,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  console.log(myChart);
}


  // const config = {
  //   type: 'bar',
  //   data: data,
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   },
  // };

  // const myChart = new Chart(canvasChart, config);
