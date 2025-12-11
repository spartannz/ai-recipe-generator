import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import {View, ScrollView} from "react-native";
import RecipeCard from "@/components/ui/RecipeCard";
import Button from "@/components/ui/Button";

export default function Results() {
  const { title, summary, ingredients, steps} = useLocalSearchParams();
  console.log("RESULTS PARAMS:");
console.log("title:", title);
console.log("summary:", summary);
console.log("ingredients:", ingredients);
console.log("steps:", steps);

  const parsedIngredients = JSON.parse(String(ingredients || "[]"));
  const parsedSteps = JSON.parse(String(steps || "[]"));

  const router = useRouter();

  const recipe = {
    title: String(title),
    summary: String(summary),
    ingredients: parsedIngredients,
    steps: parsedSteps,
  };

  const getSim = async () => {

    try {
        const res = await fetch("http://10.130.12.55:3000/api/similar", {
            method: "POST",
            headers: {"Content-Type":  "application/json"},
             body: JSON.stringify({ title: String(title) }),
        });

        const newdata = await res.json();
    
        router.push({
            pathname: "/simrecipe",
            params: {
                recipen: JSON.stringify(newdata),
            }
        });

    }
    catch(err){
        console.log("Error loading recipe", err);

    }
  };

  return (
    <ScrollView>
        <RecipeCard recipe={recipe}/>
        <Button title="Similar Recipes" onPress = {getSim} />
     </ScrollView>
  );
}