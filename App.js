import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, Pressable, Image } from "react-native";
import { styles_main } from "./styles";

//SafeAreaView, Native-Stack, Passing data between screens

//home screen with thumbnail images of TMNT characters
function HomeScreen({ navigation }) {
  //passing character name obtained from "Pressable", as key to "Details" screen
  const handleTmntCharacter = (character) => {
    console.log(character);
    if (character !== "") {
      navigation.navigate("Details", { characterKey: character });
    }
  };
  return (
    <SafeAreaView style={styles_main.container}>
      <View style={styles_main.tableContainer}>
        <View style={styles_main.rowContainer}>
          <Pressable
            style={styles_main.pressableContainer}
            onPress={() => {
              handleTmntCharacter("DON");
            }}
          >
            <Text style={styles_main.textTMNT}>DON</Text>
            <Image
              style={styles_main.imageContainer}
              source={require("./assets/tmntdon.png")}
            />
          </Pressable>
          <Pressable
            style={styles_main.pressableContainer}
            onPress={() => {
              handleTmntCharacter("LEO");
            }}
          >
            <Text style={styles_main.textTMNT}>LEO</Text>
            <Image
              style={styles_main.imageContainer}
              source={require("./assets/tmntleo.png")}
            />
          </Pressable>
        </View>
        <View style={styles_main.rowContainer}>
          <Pressable
            style={styles_main.pressableContainer}
            onPress={() => {
              handleTmntCharacter("MIKE");
            }}
          >
            <Text style={styles_main.textTMNT}>Mike</Text>
            <Image
              style={styles_main.imageContainer}
              source={require("./assets/tmntmike.png")}
            />
          </Pressable>
          <Pressable
            style={styles_main.pressableContainer}
            onPress={() => {
              handleTmntCharacter("RAPH");
            }}
          >
            <Text style={styles_main.textTMNT}>Raph</Text>
            <Image
              style={styles_main.imageContainer}
              source={require("./assets/tmntraph.png")}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function DetailScreen({ route, navigation }) {
  // receiving characterKey using "route", if route.params is null, undefined, or false, then returns an empty object {}
  const { characterKey } = route.params ?? {};

  // mapping the characterKey to its value
  const displayCharacterDetails = (characterKey) => {
    const characterDetails = [
      {
        key: "DON",
        value:
          "Donatello, nicknamed Don or Donnie, is a superhero and one of the four main characters of the Teenage Mutant Ninja Turtles comics and all related media. He is the smartest and often gentlest of his brothers, bearing a purple mask over his eyes. He wields a bō staff, his primary signature weapon in all media. He is the adoptive and mutated son of Master Splinter, as well as the younger brother of Leonardo and Raphael, and the older brother of Michelangelo. He is the third eldest/second youngest brother of the turtles, and second-in-command of the team. A common trait in the franchise is that he is the tallest ninja turtle, demonstrated in the IDW comics, the DC crossover film, the 2014 reboot, and most notably, in the 2012 animated series. Donnie often speaks in technobabble with a natural aptitude for science and technology. His ninja skills are the lowest of the four turtles; as he relies on gadgets over combat skills. Like all of the brothers, he is named after a Renaissance artist; in this case, he is named after Italian sculptor Donatello.He is the favorite turtle of co-creator Peter Laird, who served as the basis of Donatello's personality.",
      },
      {
        key: "LEO",
        value:
          "Leonardo, or Leo for short, is a superhero appearing in Teenage Mutant Ninja Turtles comics and related media, and created by American comic book artists Kevin Eastman and Peter Laird. He is one of the four central characters of the franchise, along with his brothers, Donatello, Raphael and Michelangelo. Often depicted wearing a blue bandanna, his signature weapons are two katana. In all iterations, Leo is the leader of his brothers. He's traditionally portrayed as the eldest, most mature and disciplined of the Turtles. These two concepts have been altered in one of the most recent versions of the franchise, with Raphael being the eldest and taking the role as leader, while Leonardo has been altered to being less serious, more laidback, charming, sardonic, and having a joke-cracking personality. However, he does eventually take the role as leader from Raphael as he learns how to be more responsible.",
      },
      {
        key: "MIKE",
        value:
          "Michelangelo, nicknamed Mike or Mikey, is a superhero and one of the four main characters of the Teenage Mutant Ninja Turtles comics and all related media.Michelangelo is the most agile of the four brothers but prefers to have a good time rather than train. The youngest of the group, he is shown to be rather immature; he is known for his wisecracks, love of skateboarding, witty optimism, and, like his brothers, love of pizza. He is usually depicted wearing an orange eye mask. His signature weapons are dual nunchaku, though he has also been portrayed using other weapons, such as a grappling hook, manriki-gusari, kusarigama, tonfa, and a three-section staff (in some action figures). He is commonly portrayed in media as speaking with a California accent.",
      },
      {
        key: "RAPH",
        value:
          "Raphael, nicknamed Raph, is a superhero and one of the four main characters of the Teenage Mutant Ninja Turtles comics and all related media. In most iterations, he's usually depicted as the second oldest/mid-middle-child of the turtle brothers, often at odds with his older brother, Leonardo.He is usually depicted wearing a red eye mask; in this regard, he is the only turtle to retain this color since the original incarnation of the characters, as the remaining turtles received different colors at a later time. Raphael wields twin sai as his primary weapon. He is commonly portrayed in media as speaking with a Brooklyn accent. Raphael is known for his temperamental and cynical personality, being short-tempered, aggressive, sullen, maddened, sarcastic, and rebellious.[2] The origin of Raphael's anger is not always fully explored, but in some incarnations appears to stem partly from the realization that they are the only creatures of their kind and ultimately alone, while also bothered by the injustice the helpless and innocent suffer.",
      },
    ];

    for (let character of characterDetails) {
      if (character.key === characterKey) {
        return character.value;
      }
    }
    return "Character not found";
  };

  // display character image runtime by getting image from asset folder
  const getImagePath = (imageName) => {
    switch (imageName) {
      case "DON":
        return require("./assets/donatelloDetail.jpg");
      case "LEO":
        return require("./assets/leonardoDetail.jpg");
      case "MIKE":
        return require("./assets/michelangeloDetail.jpg");
      case "RAPH":
        return require("./assets/raphaelDetail.jpg");
      default:
        return null;
    }
  };

  const displayCharacterImage = getImagePath(characterKey);

  return (
    <View style={styles_main.detailContainer}>
      <Text style={styles_main.textCharacterTMNT}>{characterKey}</Text>
      <View style={{ width: 400 }}>
        <Text style={styles_main.textDetailTMNT}>
          {displayCharacterDetails(characterKey)}
        </Text>
      </View>
      <Image
        style={styles_main.imageContainerDetail}
        source={displayCharacterImage}
      />
    </View>
  );
}

// create the native stack navigator to use Navigator and Screen properties
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
