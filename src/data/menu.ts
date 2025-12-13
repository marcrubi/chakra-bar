export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: string;
    tags?: string[];
};

export type MenuCategory = {
    title: string;
    items: MenuItem[];
};

export const menuData: MenuCategory[] = [
    {
        title: "Signature Cocktails",
        items: [
            {
                id: "c1",
                name: "El Chackra Rojo",
                description: "Ginebra infusionada con hibisco, sirope de rosas, limón y clara de huevo. Acabado con polvo de rubí.",
                price: "14€",
                tags: ["Best Seller"],
            },
            {
                id: "c2",
                name: "Mumbai Gold",
                description: "Whisky, cúrcuma, miel especiada y ginger beer. Servido en vaso de cobre ahumado.",
                price: "12€",
            },
            {
                id: "c3",
                name: "Midnight Lotus",
                description: "Vodka negro, licor de mora, arándanos y un toque de lima kaffir.",
                price: "13€",
            },
        ],
    },
    {
        title: "Clásicos",
        items: [
            {
                id: "cl1",
                name: "Negroni Ahumado",
                description: "La receta clásica con Mezcal y humo de madera de roble.",
                price: "11€",
            },
            {
                id: "cl2",
                name: "Spicy Margarita",
                description: "Tequila reposado, triple seco, lima y borde de sal de tajín.",
                price: "12€",
                tags: ["Picante"],
            },
        ],
    },
    {
        title: "Sin Alcohol",
        items: [
            {
                id: "sa1",
                name: "Virgin Colada",
                description: "Piña fresca, crema de coco y un toque de nuez moscada.",
                price: "9€",
            },
        ],
    },
];