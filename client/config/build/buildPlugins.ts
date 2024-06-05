import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const {mode, paths, analyze} = options;

    const isDev: boolean = options.mode === 'development';
    const isProd: boolean = options.mode === 'production';

    // Общий массив плагинов
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),

        // Подключение переменных среды
        new DotenvWebpackPlugin({
            path: paths.env
        }),
        // // Глобальные переменные доступные во всем проекте
        // new DefinePlugin({
        //     'process.env.API_URL': JSON.stringify()
        // }),
    ]

    // Плагины для dev версии
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        // Проверка типов в отдельном процессе (посколько в лоадерах проверка типов выключена),
        // чтобы проверка типов все равно производилась
        plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    // Плагины для prod версии
    if (isProd) {
        // Создание отдельного сборщика css
        plugins.push(new MiniCssExtractPlugin({
            // Название куда помещаем файл
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
        // Анализатор бандла
        analyze && plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}