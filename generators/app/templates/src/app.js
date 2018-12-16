/**
 * @file 组件预览入口，请勿修改
 */

import Taro from '@tarojs/taro'
import Index from './pages/index/index'

class App extends Taro.Component {

  config = {
    pages: [
      'pages/index/index'
    ]
  }

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App /> , document.getElementById('app'))
