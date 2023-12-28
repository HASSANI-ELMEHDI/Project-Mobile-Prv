import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listing";
import { Link, Stack } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import listingsData from '@/assets/data/airbnb-listings.json'
import ListingsMap from "@/components/ListingsMap";
import axios from "axios";



const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
    const [category, setCategory] = useState<string>('Rooms');
  const onDataChanged = (category: string) => {
    setCategory(category);

  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/logements/');
      
      
    } catch (error) {
      console.log('--------------erreur1 ',error.message)
    }
  };
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