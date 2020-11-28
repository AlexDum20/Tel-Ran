
export const soups = [{
        name : 'Borzhch',
        price: 12.30,
        imgSrc: './Images/Soups/borzhch.jpg'
    },
    {
        name : 'Shchee',
        price: 10.30,
        imgSrc: './Images/Soups/shchee.jpg'
    },
    {
        name : 'Rassolnik',
        price: 14.00,
        imgSrc: './Images/Soups/rassolnik.jpg'
    },
    {
        name : 'Solianka',
        price: 11.60,
        imgSrc: './Images/Soups/solianka.jpg'
    }
];

export const desserts = [{
    name: 'Coffee',
    price: 12.30,
    imgSrc: './Images/Desserts/coffee.jpg'
},
    {
        name : 'Icecream',
        price: 10.30,
        imgSrc: './Images/Desserts/icecream.jpg'
    },
    {
        name : 'Salad',
        price: 14.00,
        imgSrc: './Images/Desserts/salad.jpg'
    },
    {
        name : 'Sigar',
        price: 11.60,
        imgSrc: './Images/Desserts/sigar.jpg'
    }
];

export const meals = [{
        name : 'Kasha',
        price: 12.30,
        imgSrc: './Images/Meals/kasha.jpg'
    },
    {
        name : 'Pasta',
        price: 10.30,
        imgSrc: './Images/Meals/pasta.jpg'
    },
    {
        name : 'Pelmeni',
        price: 14.00,
        imgSrc: './Images/Meals/pelmeni.jpg'
    },
    {
        name : 'Shashlyk',
        price: 11.60,
        imgSrc: './Images/Meals/shashlyk.jpg'
    }
];

export const salads = [{
        name : 'Cesar',
        price: 12.30,
        imgSrc: './Images/Salads/cesar.jpg'
    },
    {
        name : 'Green',
        price: 10.30,
        imgSrc: './Images/Salads/green.jpg'
    },
    {
        name : 'Herring',
        price: 14.00,
        imgSrc: './Images/Salads/herring.jpg'
    },
    {
        name : 'Olivier',
        price: 11.60,
        imgSrc: './Images/Salads/olivier.jpg'
    }
];

export const listCategories = [
    {desserts},
    {meals},
    {salads},
    {soups}
    ];

export let productListOrder = [];
export const setProductListOrder = (arr) => productListOrder = arr;