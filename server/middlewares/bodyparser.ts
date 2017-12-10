import * as convert from 'koa-convert'
import * as bodyparser from 'koa-bodyparser'

const config = {
  enableTypes: ['json', 'form', 'text']
}

export default convert((bodyparser(config)))