import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions, RuleSetRule } from "webpack";
import {BuildOptions} from "./types/types";

// В лоадерах важен порядок!
export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const {mode} = options

    const isDev: boolean = mode === 'development';

    const assetLoader: RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    // svg
    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    // Передача цветов родителя всем дочерним
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const sassLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    // Включение модульности css
                    modules: {
                        // Шаблон названия имени класса
                        localIdentName: isDev ? '[path][name]__[local]' : 'hash:base64:8'
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader: RuleSetRule = {
        // ts-loader по умолчанию работает с JSX
        // Если бы не использовали ts, то нужен был бы babel-loader
        // Указывается регулярка с названием файлов, которые хотим обработать (обычно указывается расширение)
        test: /\.tsx?$/,
        // Название лоудера
        use: [
            {
                loader: 'ts-loader',
                options: {
                    // Выключение проверки типов при сборке (сильно ускоряет сборку)
                    transpileOnly: true
                }
            }
        ],
        // То, что мы не обрабатываем
        exclude: /node_modules/,
    }


    return [
        assetLoader,
        sassLoader,
        tsLoader,
        svgrLoader
    ]
}

// По умолчанию webpack умеет работать только с js файлами
/*
Лоадеры это цепочка обработчиков через которую проходят файлы с определенными расширениями. Файлы одного расширения
компилируются в другое расширение. Например ts -> js, cvg -> jsx, scss/less -> css. Порядок лоадеров очень важен,
потому что одни файлы конвертируются в другие.
Например: scss loader -> css loader -> style loader.
Если нарушить порядок, то работать не будет.
*/