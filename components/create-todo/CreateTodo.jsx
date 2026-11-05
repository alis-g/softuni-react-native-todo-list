import * as React from 'react';
import { View } from 'react-native';
import { Modal, Text, Button, TextInput } from 'react-native-paper';

const CreateTodo = ({
    onDismiss
}) => {
    const [visible, setVisible] = React.useState('');

    const [text, setText] = React.useState('')
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (

        <Modal visible={true} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
            <Text>Create a new todo</Text>
            <View style={{flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                <TextInput
                    label={"Name"}
                    value={text}
                    style={{flex:1}}
                    onChangeText={text => setText(text)}
                />

                <Button style={{justifyContent: 'center'}}icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
                    Add
                </Button>
            </View>

        </Modal>



    );
};

export default CreateTodo;