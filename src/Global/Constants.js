import { Dimensions } from 'react-native';


export const Height = Dimensions.get('window').height;
export const Width = Dimensions.get('window').width;

export const calcHeight = (height) => {return(Height * (height / 799.5))}
export const calcWidth = (width) => {return(Width * (width / 360))}

export const metrics = {
  ItemRaduis: 8,
  ItemBorderColor: '#afafaf',
  ItemBorderWidth: 0.6,

};

export const CONSTANTS = {
  AllProductPageCount: 20
};

