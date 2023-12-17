import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listing";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const Page = () => {
    const [category, setCategory] = useState<string>('Tiny homes');
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
      <Listings listing={[]} category={category}
      />
    </View>


  );
};
export default Page;