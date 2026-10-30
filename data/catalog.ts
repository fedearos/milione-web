export type Category = 'FIAMBRES / SALAZONES' | 'EMBUTIDOS FRESCOS';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  imagePlaceholder?: string;
}

export const categories: Category[] = ['FIAMBRES / SALAZONES', 'EMBUTIDOS FRESCOS'];

export const catalogData: Product[] = [
  {
    id: '1',
    name: 'Chorizos Secos',
    description: 'El orgullo de nuestra fábrica, elaborados 100% con carne de cerdo de primera calidad. Embutidos en tripa natural y estacionados hasta alcanzar su punto justo, logrando esa consistencia firme y el sabor campero inconfundible que no puede faltar en tu mesa.',
    category: 'FIAMBRES / SALAZONES',
  },
  {
    id: '2',
    name: 'Bondiola',
    description: 'Un clásico indiscutido de las picadas. Seleccionamos las mejores piezas de cerdo, curadas pacientemente y atadas a mano. Su maduración lenta logra un veteado perfecto y una textura que se deshace en el paladar, ofreciendo un sabor intenso, dulce y tradicional.',
    category: 'FIAMBRES / SALAZONES',
  },
  {
    id: '3',
    name: 'Salame',
    description: 'El embajador de la tradición Milione. Una receta familiar histórica donde la proporción exacta de carne magra de cerdo, tocino y especias se fusionan durante su lento secado artesanal. De corte limpio, aroma tentador y sabor equilibrado, es el rey absoluto de cualquier encuentro.',
    category: 'FIAMBRES / SALAZONES',
  },
  {
    id: '4',
    name: 'Chorizos Frescos',
    description: 'El alma de todo buen asado. Elaborados 100% con cortes de cerdo seleccionados y nuestra clásica receta familiar. Tienen el equilibrio exacto de especias para garantizar esa jugosidad y sabor inconfundible que brilla en la parrilla o al disco. Un infaltable que siempre pide un bocado más.',
    category: 'EMBUTIDOS FRESCOS',
  }
];