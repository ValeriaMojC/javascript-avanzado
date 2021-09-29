const $cardsContainer = document.querySelector('#cardsContainer');

const tarjetas = () => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(resp => resp.json()).then(data => {

        data.forEach(card => {
            let col = document.createElement('div');
            col.classList = 'col-md-2';
            col.innerHTML = `
            <div class="card">
                <img src="${card.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${card.title}</p>
                </div>
            </div>
            `;
            $cardsContainer.appendChild(col);
        });
    })
}

tarjetas();