fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
		const body = document.body
		body.style.backgroundImage = `url(${data.urls.raw})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
		console.log(data.urls.full)
	})