export type OpeningRange = [open: string, close: string];

export interface OpeningDay {
  /** Human label in Spanish, e.g. "Lunes". */
  label: string;
  /** schema.org day name for JSON-LD, e.g. "Monday". */
  schema: string;
  /** 0 = Sunday ... 6 = Saturday, for the "open now" widget. */
  jsDay: number;
  ranges: OpeningRange[];
  closed?: boolean;
}

export interface MenuItem {
  name: string;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const site = {
  name: 'Cervecería La Placeta',
  shortName: 'La Placeta',
  tagline: 'Bar de tapas en el corazón del centro de Alcoy',
  description:
    'Cervecería La Placeta es un bar de tapas y bocadillos en pleno casco histórico de Alcoy. Cervezas nacionales e importación, desayunos, terraza y trato cercano.',

  url: 'https://xLu1s.github.io/web-bar-placeta-alcoy/',
  locale: 'es-ES',

  contact: {
    phone: '965 54 36 02',
    phoneHref: 'tel:+34965543602',
    email: 'laplacetalcoy@gmail.com',
    emailHref: 'mailto:laplacetalcoy@gmail.com',
    instagram: 'https://www.instagram.com/cervecerialaplacetacb',
    facebook: 'https://www.facebook.com/share/1KQkrZNQbS/',
  },

  address: {
    street: 'Carrer Pintor Casanova, 3',
    locality: 'Alcoi',
    region: 'Alicante',
    postalCode: '03801',
    country: 'ES',
    countryName: 'España',
  },

  geo: {
    lat: 38.6994388,
    lng: -0.4732365,
  },

  rating: {
    value: 4.1,
    count: 215,
  },

  priceRange: '€€',

  hours: [
    {
      label: 'Lunes',
      schema: 'Monday',
      jsDay: 1,
      ranges: [
        ['07:30', '15:30'],
        ['18:00', '22:00'],
      ],
    },
    {
      label: 'Martes',
      schema: 'Tuesday',
      jsDay: 2,
      ranges: [
        ['07:30', '15:30'],
        ['18:00', '22:00'],
      ],
    },
    {
      label: 'Miércoles',
      schema: 'Wednesday',
      jsDay: 3,
      ranges: [
        ['07:30', '15:30'],
        ['18:00', '22:00'],
      ],
    },
    {
      label: 'Jueves',
      schema: 'Thursday',
      jsDay: 4,
      ranges: [
        ['07:30', '15:30'],
        ['18:00', '22:30'],
      ],
    },
    {
      label: 'Viernes',
      schema: 'Friday',
      jsDay: 5,
      ranges: [
        ['07:30', '15:30'],
        ['18:00', '00:30'],
      ],
    },
    {
      label: 'Sábado',
      schema: 'Saturday',
      jsDay: 6,
      ranges: [
        ['09:30', '15:30'],
        ['18:00', '00:30'],
      ],
    },
    {
      label: 'Domingo',
      schema: 'Sunday',
      jsDay: 0,
      ranges: [],
      closed: true,
    },
  ] as OpeningDay[],

  menu: {
    title: 'Nuestra carta',
    intro:
      'Tapas de siempre, hechas en casa y para compartir. Precios pendientes de actualizar — consúltanos o llámanos.',
    allergenNote:
      'Disponemos de la lista completa de alérgenos de todos nuestros platos. Pídenosla y te ayudamos a elegir.',
    image: `${BASE}images/menu.png`,
    imageAlt: 'Carta de tapas frías y calientes de La Placeta',
    categories: [
      {
        id: 'frias',
        title: 'Tapas frías',
        items: [
          { name: 'Focie con confitura' },
          { name: 'Parmesano y roquefort' },
          { name: 'Jamón y queso' },
          { name: 'Boquerones en vinagre' },
          { name: 'Ensaladilla rusa' },
          { name: 'Ensaladilla de queso' },
          { name: 'Ensaladilla de mar' },
          { name: 'Tabla de quesos' },
        ],
      },
      {
        id: 'calientes',
        title: 'Tapas calientes',
        items: [
          { name: 'Magro con tomate' },
          { name: 'Sepia en salsa' },
          { name: 'Albóndigas de carne' },
          { name: 'Albóndigas de sardinas' },
          { name: 'Bravas de la casa' },
          { name: 'Croquetas (a elegir)' },
          { name: 'Callos' },
          { name: 'Sangre con cebolla' },
          { name: 'Higaditos encebollados' },
          { name: 'Huevos georgiev' },
          { name: 'Huevos estrellados con jamón' },
          {
            name: 'Plescaviso',
            desc: 'Carne picada rellena de queso fundido',
          },
          { name: 'Pulpo a la gallega' },
          { name: 'Provolone con hierbas provenzales' },
          { name: 'Calamares a la romana' },
          { name: 'Tiras de pollo' },
          { name: 'Sepia a la plancha' },
          { name: 'Abisinios' },
          { name: 'Pinchos' },
          { name: 'Tortilla de patatas' },
          { name: 'Chistorra' },
        ],
      },
    ] as MenuCategory[],
  },

  specialties: [
    {
      icon: 'beer',
      title: 'Cervezas con carácter',
      text: 'Variedad de cervezas nacionales e importación, bien tiradas y a su temperatura.',
    },
    {
      icon: 'coffee',
      title: 'Desayunos de barrio',
      text: 'Empieza el día como en casa: tostadas, bocadillos y café de los de siempre.',
    },
    {
      icon: 'sun',
      title: 'Terraza en la placeta',
      text: 'Un rincón tranquilo en pleno centro, a un paso de los teatros y del recorrido festero.',
    },
  ],

  gallery: [] as GalleryImage[],

  faq: [
    {
      q: '¿Dónde está La Placeta?',
      a: 'Estamos en Carrer Pintor Casanova, 3 (03801 Alcoi), en pleno casco histórico, muy cerca de la plaça d’Espanya y de los teatros de la ciudad.',
    },
    {
      q: '¿Cuál es el horario de La Placeta?',
      a: 'Abrimos de lunes a sábado. De lunes a miércoles, de 7:30 a 15:30 y de 18:00 a 22:00; jueves hasta las 22:30; y viernes y sábado con horario de noche hasta las 00:30. Los sábados empezamos a las 9:30. Los domingos cerramos.',
    },
    {
      q: '¿Se puede reservar mesa?',
      a: 'Puedes llamarnos al 965 54 36 02 y te ayudamos a organizar tu visita, especialmente para grupos.',
    },
    {
      q: '¿Tenéis opciones para alérgicos o intolerantes?',
      a: 'Sí. Contamos con la lista de alérgenos de todos los platos y te asesoramos para que elijas con seguridad.',
    },
    {
      q: '¿Hay terraza?',
      a: 'Sí, tenemos terraza exterior en una plaza tranquila, ideal para tapear o tomar algo al sol.',
    },
    {
      q: '¿Se puede ir con niños?',
      a: 'Por supuesto. Es un bar familiar y de barrio, con ambiente cercano y opciones para todos.',
    },
  ] as FaqItem[],

  nav: [
    { href: '#sobre-nosotros', label: 'Nosotros' },
    { href: '#carta', label: 'Carta' },
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#horario', label: 'Horario' },
    { href: '#contacto', label: 'Contacto' },
  ],
};
