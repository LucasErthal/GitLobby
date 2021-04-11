import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_600SemiBold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar style='light'/>
      <Routes />
    </>
  );
}
