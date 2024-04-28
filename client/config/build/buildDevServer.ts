import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {BuildOptions} from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {port} = options

    return {
        port: port ?? 3000,
        open: true,
        // Использование маршрутизации в приложении (навигация за счет js в RRD)
        // Это только для дев сервера
        // Если раздавать статику через nginx, то надо делать проксирование на index.html
        historyApiFallback: true,
        // Для того, чтобы страница не перезагружалась при изменении кода
        hot: true
    }
}