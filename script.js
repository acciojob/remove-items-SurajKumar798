//your JS code here. If required.

const colorSelect = document.getElementById('colorSelect');
const button = document.querySelector('input[type="button"]');

button.addEventListener('click',  () => {
	const selectedIndex = colorSelect.selectedIndex;
	if(selectedIndex !== -1){
		colorSelect.remove(selectedIndex);
	};
});