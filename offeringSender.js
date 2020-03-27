export var OfferingSender = function OfferingSender(url, formFields) {
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formFields)
	}).then(function (res) {
		return res.ok ? alert("Sikeres felajánlás") : alert("Sikertelen felajánlás");
	}).catch(function () {
		return alert("Sikertelen felajánlás");
	});
};