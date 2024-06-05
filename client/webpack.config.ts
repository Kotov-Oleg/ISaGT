import path from "path";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths} from "./config/build/types/types";

interface EnvVariables {
    mode?: BuildMode
    port?: number
    analyze?: boolean
}

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        env: path.resolve(__dirname, '.env')
    }

    return buildWebpack({
        port: env.port ?? 3003,
        mode: env.mode ?? 'development',
        paths: paths,
        analyze: env.analyze,
    });
};
