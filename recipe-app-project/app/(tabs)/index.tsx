import { Image } from 'expo-image';
import {View, Text} from "react-native";
import {useState} from 'react';
import { useRouter } from "expo-router";
import { Platform, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input'


export default function HomeScreen() {

    const router = useRouter();

    const [ingredients, setIngredients] = useState("");
    const [recipe, setRecipe] = useState(null);

    const getRecipe = async() => {
      console.log("Button Pressed");

      try {
        
          const res = await fetch("http://10.130.12.55:3000/api/recipe", {
            method: "POST",
            headers: {"Content-Type":  "application/json"},
            body: JSON.stringify({ingredients}),
          });
          console.log("FETCHING FROM:", "http://10.130.12.55:3000/api/recipe");
          const data = await res.json();
          console.log(data);
          setRecipe(data);

          router.push({
            pathname: "/results",
            params: {
              title: data.title,
              summary: data.summary,
              ingredients: JSON.stringify(data.ingredients),
              steps: JSON.stringify(data.steps),
          },
          
          });
      } catch (err){
          console.log("Error loading recipe", err);
      }
    };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/schefhatsupreme.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Find a Recipe Now!
        </ThemedText>
       <Image source={require('@/assets/images/eggchef.png')} style={{ width: 40, height: 40 }} />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          {`Enter some ingredients to get started`}
        </ThemedText>
      </ThemedView>
      
      <Input
        placeholder = "Enter ingredients"
        value = {ingredients}
        onChangeText ={setIngredients}
      />
      <Button 
      title="Generate Recipe" 
      onPress= {getRecipe}
      />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: undefined,
  aspectRatio: 390 / 250,
}
});
