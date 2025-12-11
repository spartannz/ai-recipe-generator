import { Pressable, View, Text, StyleSheet } from "react-native";

type Recipe = {
    title: string;
    summary: string;
    ingredients: string[];
    steps: string[];
};

type RecipeCardProps = {
    recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <Pressable style={styles.cardWrapper}>

            
            <View style={styles.card}>
                <Text style={styles.title}>{recipe.title}</Text>

                <Text style={styles.summary}>{recipe.summary}</Text>

                <Text style={styles.sectionTitle}>Ingredients:</Text>
                {recipe.ingredients.map((ing, index) => (
                    <Text key={index} style={styles.listItem}>
                        • {ing}
                    </Text>
                ))}

                <Text style={styles.sectionTitle}>Steps:</Text>
                {recipe.steps.map((step, index) => (
                    <Text key={index} style={styles.listItem}>
                        {index + 1}. {step}
                    </Text>
                ))}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 20, // rounded-2xl
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
        borderWidth: 1,
        borderColor: "#F3F4F6", // subtle border for clean design
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827", // gray-900
    },
    summary: {
        marginTop: 6,
        fontSize: 14,
        color: "#4B5563", // gray-600
    },
    sectionTitle: {
        marginTop: 14,
        fontSize: 16,
        fontWeight: "600",
        color: "#374151", // gray-700
    },
    listItem: {
        fontSize: 14,
        color: "#4B5563", // gray-600
        marginTop: 4,
        lineHeight: 20,
    },
});