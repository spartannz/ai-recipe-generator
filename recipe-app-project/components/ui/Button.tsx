import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.button}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2563EB",        // blue-600
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 20,                  // rounded-2xl
        marginTop: 16,                     // mt-4
        shadowColor: "#2563EB",            // blue-300 shadow
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,                      // Android shadow
    },
    text: {
        color: "#FFFFFF",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "600",
    }
});