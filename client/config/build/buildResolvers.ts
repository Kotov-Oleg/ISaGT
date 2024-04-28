import {Configuration} from "webpack";
import {BuildOptions} from "./types/types";
import path from "path";

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    const {paths} = options
    return {
        // Список расширений, которые необходимо обработать
        extensions: ['.tsx', '.ts', '.js'],
        // Абсолютные пути
        alias: {
            'src': paths.src
        }
    }
}