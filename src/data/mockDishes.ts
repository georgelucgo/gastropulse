import { Category, Dish } from '@/types/dish';

export const CATEGORIES: Category[] = [
  { id: 'near_you', name: 'Perto de você', isActive: true },
  { id: 'burgers', name: 'Burgers', isActive: false },
  { id: 'pizzas', name: 'Pizzas', isActive: false },
  { id: 'japonesa', name: 'Japonesa', isActive: false },
  { id: 'massas', name: 'Massas', isActive: false },
  { id: 'sobremesas', name: 'Sobremesas', isActive: false },
];

export const MOCK_DISHES: Dish[] = [
  {
    id: '1',
    name: 'Burger Gourmet Artesanal',
    restaurant: 'Bistrô da Esquina',
    distance: '0,8 km',
    prepTime: '15-20 min',
    price: 34.9,
    originalPrice: 42.0,
    image: require('@/assets/images/dishes/burger-gourmet.jpg'),
    tag: 'Cupom Relâmpago',
    isFavorite: false,
    category: 'burgers',
    description: 'Blend bovino artesanal de 180g, queijo cheddar inglês derretido, fatias crocantes de bacon e maionese defumada no pão brioche tostado.',
  },
  {
    id: '2',
    name: 'Pasta ao Pesto Fresco',
    restaurant: 'Trattoria Bella',
    distance: '1,2 km',
    prepTime: '20-25 min',
    price: 29.9,
    image: require('@/assets/images/dishes/pasta-pesto.jpg'),
    tag: 'Destaque do Chef',
    isFavorite: true,
    category: 'massas',
    description: 'Massa artesanal fresca salteada no autêntico pesto genovês de manjericão, pinoli, azeite extravirgem e lascas de parmesão curado.',
  },
  {
    id: '3',
    name: 'Pizza Margherita Especial',
    restaurant: 'Pizzaria Napolitana',
    distance: '1,9 km',
    prepTime: '25-30 min',
    price: 42.9,
    image: require('@/assets/images/dishes/pizza-margherita.jpg'),
    tag: 'Mais Pedido',
    isFavorite: false,
    category: 'pizzas',
    description: 'Massa de fermentação lenta por 48h, molho de tomates San Marzano, muçarela fior di latte artesanal e manjericão fresco.',
  },
];
