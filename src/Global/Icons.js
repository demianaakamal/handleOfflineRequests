import React from 'react';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


const search = ({ size = 18, color = '#000', onPress }) => {
  return (
    <EvilIcons
      name="search"
      size={size}
      onPress={onPress}
      color={color} />
  );
};

const menu = ({ size = 18, color = '#000', onPress }) => {
  return (
    <Ionicons
      name="ios-menu"
      onPress={onPress}
      size={size}
      color={color} />
  );
};
const star = ({ size = 18, color = '#000', onPress }) => {
  return (
    <Entypo
      name="star"
      onPress={onPress}
      size={size}
      color={color} />
  );
};

const filter = ({ size = 18, color = '#000', onPress }) => {
  return (
    <Feather
      name="filter"
      size={size}
      onPress={onPress}
      color={color} />
  );
};
const close = ({ size = 18, color = '#000', onPress, style = {} }) => {
  return (
    <AntDesign
      name="closecircle"
      size={size}
      onPress={onPress}
      color={color}
      style={style} />
  );
};
const caretright = ({ size = 18, color = '#000', onPress }) => {
  return (
    <AntDesign
      name="caretright"
      size={size}
      onPress={onPress}
      color={color} />
  );
};

const arrowright = ({ size = 22, color = '#000', onPress }) => {
  return (
    <Ionicons
      name="ios-arrow-round-forward"
      size={size}
      onPress={onPress}
      color={color} />
  );
};
const email = ({ size = 18, color = '#000', onPress }) => {
  return (
    <Entypo
      name="email"
      size={size}
      onPress={onPress}
      color={color} />
  );
};
const down = ({ size = 18, color = '#000', onPress, style = {} }) => {
  return (
    <Ionicons
      name="ios-arrow-down"
      size={size}
      style={style}
      onPress={onPress}
      color={color} />
  );
};

const plus = ({ size = 18, color = '#000', onPress, style = {} }) => {
  return (
    <Entypo
      name="plus"
      size={size}
      style={style}
      onPress={onPress}
      color={color} />
  );
};
export const Icons = {
  search: (props) => search(props),
  menu: (props) => menu(props),
  filter: (props) => filter(props),
  star: (props) => star(props),
  close: (props) => close(props),
  caretright: (props) => caretright(props),
  arrowright: (props) => arrowright(props),
  email: (props) => email(props),
  down: (props) => down(props),
  plus: (props) => plus(props),
};
