import { reactive } from 'vue';

export const store = reactive({
  phone: '+393284339795',

  isMobile: false,
  isGalleryOpen: false,
  galleryIndex: 0,

  images: [
    {
      id: 0,
      src: 'image_01.webp',
      alt: 'Image 1',
    },
    {
      id: 1,
      src: 'image_02.webp',
      alt: 'Image 2',
    },
    {
      id: 2,
      src: 'image_03.webp',
      alt: 'Image 3',
    },
    {
      id: 3,
      src: 'image_04.webp',
      alt: 'Image 4',
    },
    {
      id: 4,
      src: 'image_05.webp',
      alt: 'Image 5',
    },
    {
      id: 5,
      src: 'image_06.webp',
      alt: 'Image 6',
    },
    {
      id: 6,
      src: 'image_07.webp',
      alt: 'Image 7',
    },
    {
      id: 7,
      src: 'image_08.webp',
      alt: 'Image 8',
    },
    {
      id: 8,
      src: 'image_09.webp',
      alt: 'Image 9',
    },
    {
      id: 9,
      src: 'image_10.webp',
      alt: 'Image 10',
    },
    {
      id: 10,
      src: 'image_11.webp',
      alt: 'Image 11',
    },
    {
      id: 11,
      src: 'image_12.webp',
      alt: 'Image 12',
    },
    {
      id: 12,
      src: 'image_13.webp',
      alt: 'Image 13',
    },
    {
      id: 13,
      src: 'image_14.webp',
      alt: 'Image 14',
    },
    {
      id: 14,
      src: 'image_15.webp',
      alt: 'Image 15',
    },
    {
      id: 15,
      src: 'image_16.webp',
      alt: 'Image 16',
    },
    {
      id: 16,
      src: 'image_17.webp',
      alt: 'Image 17',
    },
    {
      id: 17,
      src: 'image_18.webp',
      alt: 'Image 18',
    },
    {
      id: 18,
      src: 'image_19.webp',
      alt: 'Image 19',
    },
  ],

  structures: [
    {
      id: 0,
      title: '⚽ Calcio a 7',
      description:
        'Realizzato con erba sintetica di ultima generazione e dotato di un’illuminazione professionale, garantisce comfort e prestazioni ideali sia di giorno che di sera.',
      hero_image: 'card_structure_soccer.webp',
      coming_soon: false,
      visible: true,
    },
    {
      id: 1,
      title: '🎾 Padel',
      description:
        'Mettiamo a disposizione 3 campi da padel di ultima generazione, con copertura durante il periodo invernale, così da garantire gioco e divertimento anche nei mesi più freddi.',
      hero_image: 'card_structure_padel.webp',
      coming_soon: false,
      visible: true,
    },
    {
      id: 2,
      title: '⚽ Calcio a 11',
      description: 'Una struttura moderna, pensata per garantire spazio, qualità e adrenalina agli appassionati del grande calcio.',
      hero_image: '',
      coming_soon: true,
      visible: false,
    },
  ],
});
