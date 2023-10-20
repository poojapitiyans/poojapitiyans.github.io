import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';

(async () => {
    await imagemin(['images/*.{jpg,png}'], {
        destination: 'optimized_images',
        plugins: [
            imageminMozjpeg({ quality: [0.6, 0.8] }),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log('Images optimized');
})();
