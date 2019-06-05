const sampleCart = {
	fish1: {
		id: 'fish1',
		name: 'Pacific Halibut',
		price: 1724,
		quantity: 1,
	},
	fish2: {
		id: 'fish2',
		name: 'Lobster',
		price: 3200,
		quantity: 3,
	},
}
const sampleFishes = {
	fish1: {
		id: 'fish1',
		name: 'Pacific Halibut',
		image: '/images/hali.jpg',
		desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
		price: 1724,
		inStock: false,
	},

	fish2: {
		id: 'fish2',
		name: 'Lobster',
		image: '/images/lobster.jpg',
		desc: 'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
		price: 3200,
		inStock: true,
	},

	fish3: {
		id: 'fish3',
		name: 'Sea Scallops',
		image: '/images/scallops.jpg',
		desc: 'Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound',
		price: 1684,
		inStock: true,
	},

	fish4: {
		id: 'fish4',
		name: 'Mahi Mahi',
		image: '/images/mahi.jpg',
		desc: 'Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ',
		price: 1129,
		inStock: true,
	},

	fish5: {
		id: 'fish5',
		name: 'King Crab',
		image: '/images/crab.jpg',
		desc: 'Crack these open and enjoy them plain or with one of our cocktail sauces',
		price: 4234,
		inStock: true,
	},

	fish6: {
		id: 'fish6',
		name: 'Atlantic Salmon',
		image: '/images/salmon.jpg',
		desc: 'This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!',
		price: 1453,
		inStock: true,
	},

	fish7: {
		id: 'fish7',
		name: 'Oysters',
		image: '/images/oysters.jpg',
		desc: 'A soft plump oyster with a sweet salty flavor and a clean finish.',
		price: 2543,
		inStock: true,
	},

	fish8: {
		id: 'fish8',
		name: 'Mussels',
		image: '/images/mussels.jpg',
		desc: 'The best mussels from the Pacific Northwest with a full-flavored and complex taste.',
		price: 425,
		inStock: true,
	},

	fish9: {
		id: 'fish9',
		name: 'Jumbo Prawns',
		image: '/images/prawns.jpg',
		desc: 'With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.',
		price: 2250,
		inStock: true,
	},
}

export { sampleFishes, sampleCart }
