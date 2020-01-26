import React from 'react';
import { Image } from 'react-native';
import * as Icons from '../../assets/icons/';

const Icon = props => {
  const {name, style} = props;

  if(!name) return null;

  return(
    <Image source={Icons[`icon_${name}`]} />
  )
}

export default React.memo(Icon);
