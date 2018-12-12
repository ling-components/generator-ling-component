/**
 * @file 组件预览入口，请勿修改
 */

import Taro, { Component } from '@tarojs/taro'
import Preview from './pages/preview'

class PreviewApp extends Component {

  config = {
    pages: [
      'pages/preview/index'
    ]
  }

  render () {
    return (
      <Preview />
    )
  }
}

Taro.render(<PreviewApp />, document.getElementById('app'))
