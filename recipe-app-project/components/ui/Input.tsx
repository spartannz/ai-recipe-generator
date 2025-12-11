import { TextInput, StyleSheet } from "react-native";

type InputProps = {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
};

export default function Input({ value, onChangeText, placeholder }: InputProps) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            placeholderTextColor="#9CA3AF"     // gray-400
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#FFFFFF",
        borderColor: "#D1D5DB",     // gray-300
        borderWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 20,           // rounded-2xl
        fontSize: 16,
        color: "#111827",           // gray-900
        marginTop: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,               // Android shadow
    },
});