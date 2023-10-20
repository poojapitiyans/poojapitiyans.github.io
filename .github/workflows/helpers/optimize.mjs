import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { promises as fs } from 'fs';
import { join } from 'path';

// Define the paths to seek out images
const paths = [
  'images',
  'css',
  'js',
  'fonts'
];

(async () => {
  for (const path of paths) {
    // Discover the names of image files dwelling within the path
    const files = (await fs.readdir(path)).filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));
    
    for (const file of files) {
      // Define the full path to the image
      const filePath = join(path, file);
      
      console.log(`Optimizing ${filePath}...`);
      
      // Optimize the image and replace the original
      await imagemin([filePath], {
        destination: path,
        plugins: [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.6, 0.8] })
        ]
      });
      
      console.log(`Optimized ${filePath}`);
    }
  }
  
  console.log('All images optimized');
})();
