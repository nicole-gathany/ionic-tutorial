const calculateBtn = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBmi = () => {
	const enteredHeight = +heightInput.value;
	const enteredWeight = +weightInput.value;

	const bmi = enteredWeight / Math.pow(enteredHeight, 2);

	console.log(bmi);
};

calculateBtn.addEventListener('click', calculateBmi);
