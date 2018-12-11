/**
 * @file 开发期间组件预览入口
 */

import Taro, { Component } from '@tarojs/taro'
import Preview from './pages/preview'

import './app.scss'

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
