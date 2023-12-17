import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ListRenderItem, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


interface Props{
    listing:any[];
    category:string;
}

const Listings = ({listing:items,category}:Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const listRef = useRef<FlatList>(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }, [category]);
      const renderRow: ListRenderItem<any> = ({ item }) => (
        <Link href={`/listing/${item.id}`}>Go there</Link>
      )
  return (
    <View style={defaultStyles.container}>
    <FlatList 
    renderItem={renderRow}
    ref={listRef}
    data={loading?[]:items}
    >
        
    </FlatList>
    </View>
  );
};

export default Listings;