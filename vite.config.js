import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default {
    plugins: [handlebars({
        context: {
            title: "Asilo Digital",
            footer_text: "Mejora tu algoritmo, siguenos en estas plataformas"
        },
        partialDirectory: resolve(__dirname, 'src/partials'),
        reloadOnPartialChange: false,
    })],
};
