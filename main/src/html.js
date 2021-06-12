function generateCard(employee) {
  if (employee.getRole() == "intern") {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header">
        ${employee.getRole()}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">name: ${employee.name}</li>
        <li class="list-group-item">employee id: ${employee.id}</li>
        <li class="list-group-item"><a href = "mailto: ${employee.email}">${
      employee.email
    }</a></li>
        <li class="list-group-item">school:${employee.school}</li>
        </ul>
      </div>`;
  } else if (employee.getRole() == "engineer") {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header">
        ${employee.getRole()}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">name: ${employee.name}</li>
        <li class="list-group-item">employee id: ${employee.id}</li>
        <li class="list-group-item"><a href = "mailto: ${employee.email}">${
      employee.email
    }</a></li>
    <li class="list-group-item"><a target="blank" href = "https://github.com/${
      employee.github
    }">GitHub: ${employee.github}</a></li>
      </ul>
      </div>`;
  } else {
    //manager
    return `<div class="card" style="width: 18rem;">
        <div class="card-header">
        ${employee.getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">name: ${employee.name}</li>
          <li class="list-group-item">employee id: ${employee.id}</li>
          <li class="list-group-item"><a href = "mailto: ${employee.email}">${
      employee.email
    }</a></li>
          <li class="list-group-item">office number:${
            employee.officeNumber
          }</li>
        </ul>
      </div>`;
  }
}
function generateHTML(cards) {
  return `
  <html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light"> Employee Team Profile Builder</nav>

  <div class = "card-deck">
  ${cards.join("\n")}
  </div>
 
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html> `;
}
module.exports = { generateCard, generateHTML };
