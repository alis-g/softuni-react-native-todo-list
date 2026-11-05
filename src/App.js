
import { View } from 'react-native';
import TopBar from '../components/top-bar/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBar from '../components/bottom-bar/BottomBar';
import CreateTodo from '../components/create-todo/CreateTodo';
import { TodoProvider } from '../contexts/TodoContext';
import TodoList from '../components/todo-list/TodoList';

export default function App() {

  return (
    <SafeAreaProvider>
      <TodoProvider>
        <View style={{ flex: 1 }}>
          <TopBar />
          <TodoList />
          <CreateTodo />

          <BottomBar />
        </View>
      </TodoProvider>
    </SafeAreaProvider>

  );
}


