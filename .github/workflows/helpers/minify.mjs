import cssnano from 'cssnano';
import { writeFile } from 'fs/promises';
import { minify } from 'uglify-js';

(async () => {
    // Minify CSS
    const css = await cssnano.process(
        await fs.promises.readFile('css/style.css', 'utf-8'),
        { from: 'css/style.css', to: 'css/style.min.css' }
    );
    await writeFile('css/style.min.css', css.css);

    // Minify JS
    const result = minify(await fs.promises.readFile('js/script.js', 'utf-8'), {
        output: {
            filename: 'js/script.min.js'
        }
    });
    await writeFile('js/script.min.js', result.code);

    console.log('CSS and JS minified');
})();
