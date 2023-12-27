import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listing";
import { Link, Stack } from "expo-router";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import listingsData from '@/assets/data/airbnb-listings.json'
import ListingsMap from "@/components/ListingsMap";
import listingsDataGeo from "@/assets/data/airbnb-listings.json"
const Page = () => {
  const items = useMemo(() => listingsData as any, []);

    const [category, setCategory] = useState<string>('Rooms');
  const onDataChanged = (category: string) => {
    setCategory(category);

  };
return (
    <View style={{ flex: 1, marginTop: 130}}>
      <Stack.Screen
      options={{
        header : () => <ExploreHeader onCategoryChanged={onDataChanged} />
      }}
      />
      {/*<Listings listing={items} category={category}/>*/}
      <ListingsMap listings={listingsDataGeo}/>
    </View>


  );
};
export default Page;