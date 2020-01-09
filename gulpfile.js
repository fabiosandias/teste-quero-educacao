const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.assetsPath = './assets/';
elixir.config.publicPath = './dist/';

elixir.config.css.sass.folder = '.'; //pasta `elixir.config.assetsPath`

elixir.config.css.sass.pluginOptions = {
    includePaths: [
        'node_modules/bootstrap-sass/assets/stylesheets',
        'node_modules/font-awesome/scss',
    ]
};

elixir.config.css.autoprefix.options.browsers = ['> 1%'];

elixir.ready(() => {
    if (!elixir.config.production) {
        // essa configuração tenta garantir que o windows sempre será notificado quando houver alteração nos arquivos
        // no linux, traz algumas melhorias de performance
        elixir.config.js.browserify.watchify = {
            enabled: true,
            options: {
                poll: true
            }
        }
    }

    elixir.config.js.browserify.transformers = [
        // usar o preset 'env' do babelify.
        // desse modo, não damos suporte a ie muito antigo e podemos usar, além de es2015: es2016, es2017...
        // não usamos react.
        {
            name: 'babelify',
            options: {
                // presets: ['es2015', 'react'],
                presets: [
                    ['env', {
                        targets: {
                            browsers: ['ie >= 10']
                        }
                    }]
                ],
                plugins: [
                    // injeção de dependência do angular automática
                    ['angularjs-annotate', {
                        explicitOnly: true
                    }],
                    // propriedades de classe
                    'transform-class-properties',
                    // `async/await`
                    'transform-async-to-generator',
                    'transform-object-rest-spread',
                ]
            }
        },
        {
            name: 'html2js-browserify',
            options: {
                minify: elixir.config.production,
                minifyCSS: elixir.config.production,
                removeComments: elixir.config.production,
                collapseWhitespace: elixir.config.production,
                conservativeCollapse: elixir.config.production,
                customAttrCollapse: /ng-class/,
            }
        },
        //require() em .css
        {
            name: 'browserify-css',
            options: {
                global: true,
                minify: elixir.config.production
            }
        }
    ];
});

elixir(mix => {
    mix
        .sass(
            [
                './assets/sass/app.scss',
                './assets/js/**/*.scss',
            ],
            './dist/css/app.css'
        )

        .browserify('./app.js', './dist/js/app.js')

        .version(
            elixir.config.production
                ? [
                    './dist/css/app.css',
                    './dist/js/app.js',
                ]
                : [],
            'dist'
        )

        .copy('./node_modules/font-awesome/fonts', './dist/fonts')
});
