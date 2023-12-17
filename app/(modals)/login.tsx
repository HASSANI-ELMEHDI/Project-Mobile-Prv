import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Page = () => {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const onSelectAuth = React.useCallback(async () => {
    try {
      var createdSessionId  =(await startOAuthFlow()).createdSessionId;
      var setActive  =(await startOAuthFlow()).setActive;
        if(!createdSessionId)  createdSessionId="555";
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.push('/(modals)/loginCode');
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


 /* const onSelectAuth = async () => {
    const selectedAuth =  googleAuth
    try {
      const response = await selectedAuth();
      console.log('Full response:'+ response);
      console.log('test '+response.createdSessionId);
  
      const { createdSessionId, setActive } = response;
      console.log('createdSessionId:'+ createdSessionId);

//if the user is authentificated
      if (createdSessionId) {
        console.log("heyyyyyyyyyyyyyyyyyyyyy true");
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  };
  */
  return (
    <View style={styles.container}>
    <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.seperatorView}>
        <View
          style={styles.separator}
        />
        <Text style={styles.seperator}>or</Text>
        <View
           style={styles.separator}
        />
        </View>
        <View style={{ gap: 20 }}>
         <TouchableOpacity style={styles.btnOutline} onPress={onSelectAuth}>
          <Ionicons name="md-logo-google" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },
  separator:{
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
});