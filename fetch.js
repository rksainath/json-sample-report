document.getElementById('button1').addEventListener('click', getJSON);
document.getElementById('button2').addEventListener('click', getJSON);

function getJSON(e) {
  const filename = e.target.textContent;
  fetch(`${filename}.json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (items) {
      let output = '';
      items.forEach(function (item) {
        output += `<li>Name: ${item.Name}</li><li>Place: ${item.Place}</li><li>Occupation: ${item.Occupation}</li> <br>`;
      });
      document.querySelector('.response').innerHTML = output;
    });
}
