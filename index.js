fetch("https://api.unsplash.com/photos/random?client_id=Y8fIJeQlFd-Oc0T5Bs4mrd0LI2D-js6xRXoyRCO6BRY&orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
	})
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1563216368-5b6a40648062?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzQ0NDQ5ODd8&ixlib=rb-4.0.3&q=85")`
		document.getElementById("author").textContent = `By: Hugues de BUYER-MIMEURE`
    })