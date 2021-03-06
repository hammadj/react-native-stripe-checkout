import React from 'react'
import { Image, View } from 'react-native'
import _ from 'lodash'

export default (props) => {
  const brandLower = _.lowerCase(props.brand)
  if (brandLower === 'visa') {
    return (<Image style={props.style} source={require('../../../assets/images/card_visa.png')} />)
  } else if (brandLower === 'master card') {
    return (<Image style={props.style} source={require('../../../assets/images/card_mastercard.png')} />)
  } else if (brandLower === 'american express') {
    return (<Image style={props.style} source={require('../../../assets/images/card_amex.png')} />)
  } else if (brandLower === 'apple pay') {
    return (<Image style={props.style} source={require('../../../assets/images/card_applepay.png')} />)
  } else if (brandLower === 'discover') {
    return (<Image style={props.style} source={require('../../../assets/images/card_discover.png')} />)
  }
  return (<View />)
}
