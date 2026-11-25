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
    gallery: [
      require('@/assets/images/dishes/burger-gourmet.jpg'),
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    ],
    tag: 'Cupom Relâmpago',
    isFavorite: false,
    category: 'burgers',
    description:
      'Blend bovino artesanal de 180g grelhado no ponto certo, queijo cheddar inglês derretido, fatias crocantes de bacon e maionese defumada artesanal em pão brioche amanteigado levemente tostado.',
    nutritionalInfo: {
      calories: '680 kcal',
      carbs: '46 g',
      protein: '38 g',
      fat: '29 g',
      allergens: ['Glúten', 'Lactose', 'Derivados de soja'],
    },
  },
  {
    id: '2',
    name: 'Pasta ao Pesto Fresco',
    restaurant: 'Trattoria Bella',
    distance: '1,2 km',
    prepTime: '20-25 min',
    price: 29.9,
    image: require('@/assets/images/dishes/pasta-pesto.jpg'),
    gallery: [
      require('@/assets/images/dishes/pasta-pesto.jpg'),
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    ],
    tag: 'Destaque do Chef',
    isFavorite: true,
    category: 'massas',
    description:
      'Massa artesanal fresca salteada no autêntico pesto genovês de manjericão colhido no dia, pinoli, azeite extravirgem e lascas de parmesão curado.',
    nutritionalInfo: {
      calories: '540 kcal',
      carbs: '62 g',
      protein: '16 g',
      fat: '22 g',
      allergens: ['Glúten', 'Lactose', 'Oleaginosas (pinoli)'],
    },
  },
  {
    id: '3',
    name: 'Pizza Margherita Especial',
    restaurant: 'Pizzaria Napolitana',
    distance: '1,9 km',
    prepTime: '25-30 min',
    price: 42.9,
    image: require('@/assets/images/dishes/pizza-margherita.jpg'),
    gallery: [
      require('@/assets/images/dishes/pizza-margherita.jpg'),
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    ],
    tag: 'Mais Pedido',
    isFavorite: false,
    category: 'pizzas',
    description:
      'Massa de fermentação lenta por 48h assada em forno a lenha, molho de tomates San Marzano D.O.P., muçarela fior di latte artesanal e manjericão fresco.',
    nutritionalInfo: {
      calories: '720 kcal',
      carbs: '85 g',
      protein: '28 g',
      fat: '24 g',
      allergens: ['Glúten', 'Lactose'],
    },
  },
];
