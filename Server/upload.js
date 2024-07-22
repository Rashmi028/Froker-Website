import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
    './images/blog1.jpg',
    './images/blog2.png',
    './images/blog3.png',
    './images/blog4.png',
    './images/blog5.png',
    './images/blog6.png',
    './images/blog7.png',
    './images/blog8.png',
    './images/blog9.png',
    './images/blog10.png',
    './images/blog11.png',
    './images/blog12.png',
    './images/blog13.png',
    './images/blog14.png',
    './images/blog15.png',
    './images/blog16.png',
    './images/blog17.png',
    './images/blog18.png',
];

(async function run() {
    for (const image of images) {
        try {
            const result = await cloudinary.uploader.upload(image);
            console.log(result.secure_url);
        } catch (error) {
            console.error(`Failed to upload ${image}: `, error);
        }
    }
})();
