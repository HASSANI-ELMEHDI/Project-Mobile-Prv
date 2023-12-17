import { useEffect } from 'react';
import { Text, View } from 'react-native';


interface Props{
    listing:any[];
    category:string;
}

const Listings = ({listing,category}:Props) => {
    useEffect(()=>{
        console.log('chaged:'+category);
    },[category])
  return (
    <View>
    <Text>Listings</Text>
    </View>
  );
};

export default Listings;