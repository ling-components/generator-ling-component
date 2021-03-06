/**
 * @file 玲珑组件库组件模板
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class LingComponent extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='component-<%= componentId %>'>
        <Text
          style={{
            color: this.props.color
          }}
        >
          {this.props.text}
        </Text>
      </View>
    )
  }
}
