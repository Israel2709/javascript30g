const getAllChars = async () => {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  console.log(data);
  printAllChars(data.results);
};

getAllChars();

const printAllChars = (charsData) => {
  let charList = document.getElementById("char-list");
  charList.innerHTML = "";

  let charsHtml = charsData.map((char) => {
    let { image, name, id } = char;
    return `
        <div class="col">
                <div class="card mb-3 char-card">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src=${image} class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <button class="detail-btn btn btn-primary">Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  charList.innerHTML = charsHtml.join("");

  /*Seleccionamos todos los botones de ver más*/
  let detailBtns = document.querySelectorAll(".detail-btn");

  /* a cada botón, le agregamos un listener*/
  detailBtns.forEach((button) => {
    button.addEventListener("click", (event) => {});
  });
};
