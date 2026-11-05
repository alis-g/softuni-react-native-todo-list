
import { Keyboard, View } from 'react-native';
import { Modal, Text, Button, TextInput } from 'react-native-paper';
import { TodoContext } from '../../contexts/TodoContext';
import { useContext, useState } from 'react';

const CreateTodo = ({
   
}) => {


    const { addTodo, handleDismiss, showCreateTodo } = useContext(TodoContext)
    const [text, setText] = useState('')
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const addTodoHandler = () => {
        addTodo(text)
        setText('')
        handleDismiss()
        Keyboard.dismiss()
    }

    return (

        <Modal visible={showCreateTodo} onDismiss={handleDismiss} contentContainerStyle={containerStyle}>
            <Text>Create a new todo</Text>
            <View style={{flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                <TextInput
                    label={"Name"}
                    value={text}
                    style={{flex:1}}
                    onChangeText={text => setText(text)}
                    onSubmitEditing={addTodoHandler}
                />

                <Button style={{justifyContent: 'center'}}icon="plus" mode="contained" onPress={addTodoHandler}>
                    Add
                </Button>
            </View>

        </Modal>



    );
};

export default CreateTodo;