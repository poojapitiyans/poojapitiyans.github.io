const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
    await imagemin(['images/*.{jpg,png}'], {
        destination: 'optimized_images',
        plugins: [
            imageminMozjpeg({tquality: [0.6, 0.8]}),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log('Images optimized');
})();
