import { List } from "react-native-paper";

export default function TodoItem({

    text,
    onPress,
    iconName,
}) {
    return (
        <List.Item
            onPress={onPress}
            title={text}
            right={() => <List.Icon icon={iconName} />}
        />
    );
}