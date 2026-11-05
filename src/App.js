
import { View } from 'react-native';
import TopBar from '../components/top-bar/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBar from '../components/bottom-bar/BottomBar';
import { useState } from 'react';
import CreateTodo from '../components/create-todo/CreateTodo';

export default function App() {
  const [showCreateTodo, setShowCreateTodo] = useState(true)

  const handleDismiss = () => {
    setShowCreateTodo(false)
  }

  const openCreateTodoHandler = () => {
    setShowCreateTodo(true)
  }
  return (
    <SafeAreaProvider>
    <View style={{flex: 1}}>
      <TopBar />

      {showCreateTodo && <CreateTodo onDismiss={handleDismiss} />}

      <BottomBar openCreateTodo = {openCreateTodoHandler}/>
    </View>
    </SafeAreaProvider>

  );
}


