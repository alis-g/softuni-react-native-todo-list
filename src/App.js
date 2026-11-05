
import { View } from 'react-native';
import TopBar from '../components/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBar from '../components/BottomBar';

export default function App() {
  return (
    <SafeAreaProvider>
    <View style={{flex: 1}}>
      <TopBar />
      <BottomBar />
    </View>
    </SafeAreaProvider>

  );
}


