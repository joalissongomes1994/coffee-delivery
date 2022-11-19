export type TCoffeeListData = {
  id: number
  image: string
  title: string
  description: string
  price: number
  amount: number
  labels: {
    name: string
  }[]
}

export const coffeesList: TCoffeeListData[] = [
  {
    id: 1,
    image: '/src/assets/coffees/expresso-tradicional.png',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }],
  },
  {
    id: 2,
    image: '/src/assets/coffees/expresso-americano.png',
    title: 'Expresso Tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }],
  },
  {
    id: 3,
    image: '/src/assets/coffees/expresso-cremoso.png',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }],
  },
  {
    id: 4,
    image: '/src/assets/coffees/expresso-gelado.png',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }, { name: 'Gelado' }],
  },
  {
    id: 5,
    image: '/src/assets/coffees/cafe-com-leite.png',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: 6,
    image: '/src/assets/coffees/latte.png',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: 7,
    image: '/src/assets/coffees/capuccino.png',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: 8,
    image: '/src/assets/coffees/macchiato.png',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: 9,
    image: '/src/assets/coffees/mochaccino.png',
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Tradicional' }, { name: 'Com leite' }],
  },
  {
    id: 10,
    image: '/src/assets/coffees/chocolate-quente.png',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Especial' }, { name: 'Com leite' }],
  },
  {
    id: 11,
    image: '/src/assets/coffees/cubano.png',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Especial' }, { name: 'Alcoólico' }, { name: 'Gelado' }],
  },
  {
    id: 12,
    image: '/src/assets/coffees/havaiano.png',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Especial' }],
  },
  {
    id: 13,
    image: '/src/assets/coffees/arabe.png',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Especial' }],
  },
  {
    id: 14,
    image: '/src/assets/coffees/irlandes.png',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    amount: 5,
    labels: [{ name: 'Especial' }, { name: 'Alcoólico' }],
  },
]
