const get = document.querySelector(".get");
const post = document.querySelector(".post");
const put = document.querySelector(".put");
const del = document.querySelector(".del");



















get.addEventListener('click', () => {
	fetch('http://localhost:3000/oneFish')
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));
});





















post.addEventListener('click', () => {
	const sentence = {
		words: "Here, have this sentence"
	};
	fetch('http://localhost:3000/twoFish', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(sentence)
	})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));
});














put.addEventListener('click', () => {
	const update = {
		words: "Please sir, update my data"
	};
	fetch('http://localhost:3000/redFish', {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(update)
	})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));
});

















del.addEventListener('click', () => {
	const remove = {
		words: "Please sir, update my data"
	};
	fetch('http://localhost:3000/blueFish', {
		method: 'DELETE',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(remove)
	})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));
});













