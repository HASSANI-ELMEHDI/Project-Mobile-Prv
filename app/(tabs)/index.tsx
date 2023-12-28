import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listing";
import { Link, Stack } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";

import ListingsMap from "@/components/ListingsMap";
import { fetchData } from '@/constants/api';




const Page = () => {
  const items = useMemo(() => listingsData as any, []);

    const [category, setCategory] = useState<string>('Rooms');
  const onDataChanged = (category: string) => {
    setCategory(category);

  };

  const [listingsData , setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data);
      });
  }, []);
return (
    <View style={{ flex: 1, marginTop: 130}}>
      <Stack.Screen
      options={{
        header : () => <ExploreHeader onCategoryChanged={onDataChanged} />
      }}
      />
      {/*<Listings listing={items} category={category}/>*/}
      <ListingsMap listings={listingsData}/>
    </View>


  );
};
export default Page;