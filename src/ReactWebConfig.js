import webpack from 'webpack'
import { config } from 'dotenv'

export const ReactWebConfig = function ReactWebConfig(path) {
  const env = config({ path }).parsed
  return new webpack.DefinePlugin({
    '__REACT_WEB_CONFIG__': JSON.stringify(env)
  })
}
