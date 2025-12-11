import { useLocalSearchParams } from "expo-router";
import {View, ScrollView} from "react-native";
import RecipeCard from "@/components/ui/RecipeCard";


export default function SimilarRecipe () {
    const { recipen } = useLocalSearchParams();

    console.log("RAW recipen:", recipen);
    const cleanString = Array.isArray(recipen) ? recipen[0] : recipen;
    console.log("CLEAN STRING:", cleanString);
    const recipeP = JSON.parse(cleanString);

    return(
        <ScrollView>
        {recipeP.map((item: any, index:number) => (
        <RecipeCard key={index} recipe={item} />
        ))
    }
    </ScrollView>
    );
}

