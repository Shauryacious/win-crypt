import React from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

function Market() {
  return (
    <SafeAreaView>
      <ThemedView className="flex items-center mt-14">
        <ThemedView className="aspect-square h-96">
          <LottieView
            style={{ width: "100%", height: "100%" }}
            source={require("@/assets/animations/welcome.json")}
            autoPlay
            loop
          />
        </ThemedView>
        <ThemedText className="heading text-3xl font-bold">
          Welcome to winCrypt
        </ThemedText>
        <ThemedText className="tagline text-xl text-center">
          Invest your virtual ₹10,000 and compete with others
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

export default Market;
