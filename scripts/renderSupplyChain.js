const supplyChainList = [
	Ingredients.Cucumber,
	Ingredients.Dill,
	Ingredients.Lettuce,
	Ingredients.NapaCabbage,
	Ingredients.SweetCorn,
	Ingredients.ShishitoPepper,
	Ingredients.LionsManeMushroom,
	Ingredients.Eggs
];

const parser = new DOMParser();
const template = `
	<div id="supply-chain-list__container">
	${supplyChainList.map(ingredient => `
	  <div class="supply-chain-ingredient">
	    <span>${ingredient.Name}</span>
	  </div>
	`).join('')}
	</div>
`;
const templateDocument = parser.parseFromString(template, 'text/html');
const templateNode = templateDocument.body.childNodes[0];

document.querySelector('#supply-chain-content').appendChild(templateNode);