import { reactive } from "vue";

export const store = reactive({
    isMobile: false,

    images: [
        {
            id: 0,
            src: "images_01.webp",
            alt: "Image 1"
        },
        {
            id: 1,
            src: "images_02.webp",
            alt: "Image 2"
        },
        {
            id: 2,
            src: "images_03.webp",
            alt: "Image 3"
        },
        {
            id: 3,
            src: "images_04.webp",
            alt: "Image 4"
        },
        {
            id: 4,
            src: "images_05.webp",
            alt: "Image 5"
        },
        {
            id: 5,
            src: "images_06.webp",
            alt: "Image 6"
        },
        {
            id: 6,
            src: "images_07.webp",
            alt: "Image 7"
        },
        {
            id: 7,
            src: "images_08.webp",
            alt: "Image 8"
        },
        {
            id: 8,
            src: "images_09.webp",
            alt: "Image 9"
        },
        {
            id: 9,
            src: "images_10.webp",
            alt: "Image 10"
        }
    ]
});