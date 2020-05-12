const apiKey = ''
const sheetsID = ''
const tabName = 'Sheet1'

const sheetsURL =  `https://sheets.googleapis.com/v4/spreadsheets/${sheetsID}/values/${tabName}?key=${apiKey}`

fetch(sheetsURL)
  .then(res => res.json()) 
  .then(response => {
    console.log(response.values)
    // createWordDivs(response.values)
  })
  .catch(err => {
    console.error("This fetch failed. Check your sheetsID, apiKey, etc")
    console.error(err)
  });

// const createWordDivs = (values) => {
//   values.forEach((row) => {
//     var newDiv = document.createElement("div")
//     newDiv.innerHTML = row[0]
//     document.body.appendChild(newDiv)
//   })
// }

