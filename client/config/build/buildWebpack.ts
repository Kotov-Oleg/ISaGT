import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";


export function buildWebpack(options : BuildOptions): webpack.Configuration {
    const {mode, port, paths} = options;

    const isDev: boolean = options.mode === 'development';

    return  {
        // Мод сборки
        mode: mode ?? 'development',
        // Путь до главного файла (может быть несколько)
        entry: paths.entry,
        // Куда будет помещаться собранный проект
        output: {
            path: paths.output,
            // Можно указать шаблоны для названия сборки с хешем, чтобы браузер не использовал старые сборки
            filename: '[name].[contenthash].js',
            // Удаление прошлой сборки перед новой сборкой
            clean: true
        },
        // Вебпак плагины
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        // Для отслеживания ошибок
        devtool: isDev && 'inline-source-map',
        // Конфигурации dev сервера
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}