import Colors from '@/constants/Colors';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Page = () => {
  const { signOut, isSignedIn } = useAuth();  return (
    <View>
    {isSignedIn && <Button title="Log Out" onPress={() => signOut()} color={Colors.dark} />}
     { !isSignedIn &&
    <Link href={'/(modals)/login'}>
      <Text>Logi</Text>
    </Link>
    }
    </View>
  );
};

export default Page;