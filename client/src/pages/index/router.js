import Main from './index'
import IndexMain from '@/pages/main/router'
const index = {
  path: '',
  name: 'mainIndex',
  component: Main,
  children: [].concat(IndexMain)
}

export default [
  index
]