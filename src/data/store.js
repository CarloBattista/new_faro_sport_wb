import { reactive } from "vue";

export const store = reactive({
    isMobile: false,
    isGalleryOpen: false,

    images: [
        {
            id: 0,
            src: "image_01.webp",
            alt: "Image 1"
        },
        {
            id: 1,
            src: "image_02.webp",
            alt: "Image 2"
        },
        {
            id: 2,
            src: "image_03.webp",
            alt: "Image 3"
        },
        {
            id: 3,
            src: "image_04.webp",
            alt: "Image 4"
        },
        {
            id: 4,
            src: "image_05.webp",
            alt: "Image 5"
        },
        {
            id: 5,
            src: "image_06.webp",
            alt: "Image 6"
        },
        {
            id: 6,
            src: "image_07.webp",
            alt: "Image 7"
        },
        {
            id: 7,
            src: "image_08.webp",
            alt: "Image 8"
        },
        {
            id: 8,
            src: "image_09.webp",
            alt: "Image 9"
        },
        {
            id: 9,
            src: "image_10.webp",
            alt: "Image 10"
        }
    ]
});