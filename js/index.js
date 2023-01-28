const box = document.getElementById('box');

(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => renderProducts(data))
})()

function daleteFn(id) {
    if (confirm('Are you sure you want to')) {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
        })
            .then(res => res.json()) // or res.json()
            .then(data => checkDelete(data))
            .catch(err => console.error(err))
    }
}

function checkDelete(data) {
    console.log(data);
    data ? alert("Deleted data") : alert("Undeleted ");
}

function renderProducts(products) {
    box.innerHTML = ""
    products.forEach(product => {
        let { description, image, price, rating, title, id } = product
        box.innerHTML +=
            `
            <div class="product-box">
                <img class="product-img" width="241" height="123" src="${image}" alt="${title} image">
                <p class="product-price">Price:$${price}</p>
                <p class="product-discount">Discount:${rating.count}</p>
                <p class="product-description">Desc: ${description}</p>
                <p class="product-name">Name: ${title}</p>
                <button onclick="daleteFn(${id})" class="product-delete">
                    <img src="./assets/images/Vector.svg" height="20" alt="delete svg">
                </button>
            </div>
            `
    });
}


