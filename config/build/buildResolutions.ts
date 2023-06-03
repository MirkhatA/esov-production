import {ResolveOptions} from "webpack";

export function buildResolutions(): ResolveOptions {
    return (
        {
            extensions: ['.tsx', '.ts', '.js'],
        }
    )
}
