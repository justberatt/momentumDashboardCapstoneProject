fetch("https://api.unsplash.com/photos/random?client_id=Y8fIJeQlFd-Oc0T5Bs4mrd0LI2D-js6xRXoyRCO6BRY&orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
	})
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1563216368-5b6a40648062?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzQ0NDQ5ODd8&ixlib=rb-4.0.3&q=85")`
		document.getElementById("author").textContent = `By: Hugues de BUYER-MIMEURE`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.querySelector('#crypto-top').innerHTML = `
            <img src="${data.image.small}">
            <span>${data.name}</span>
        `       
        document.querySelector('#crypto-data').innerHTML = `
            <p><span class="span_1">current</span>: $${data.market_data.current_price.usd}</p>
            <p><span class="span_2">high</span>: $${data.market_data.high_24h.usd}</p>
            <p><span class="span_3">low</span>: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))