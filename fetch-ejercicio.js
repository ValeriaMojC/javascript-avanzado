const $btnCat = document.querySelector('#btnCat');
const $divCats = document.querySelector('#cats')

$btnCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search').then(resp => resp.json()).then(data => {
        /*Desestructuracion
        se usa para extraer elementos de un arreglo u objeto*/
        //const [cat] = data;  == const cat = data[0];
        //const [cat] = data;
        //const {url} = cat;

        console.log(data);
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        imgCat.width = '300'
        $divCats.appendChild(imgCat);
        //document.body.append(imgCat);
    });
});