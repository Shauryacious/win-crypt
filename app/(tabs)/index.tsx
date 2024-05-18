import React from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

function Market() {
  return (
    <SafeAreaView>
      <ThemedView className="flex items-center h-screen">
        <ThemedView className="aspect-square h-96 mt-10">
          <LottieView
            style={{ width: "100%", height: "100%" }}
            source={require("@/assets/animations/welcome.json")}
            autoPlay
            loop
          />
        </ThemedView>
        <ThemedText className="heading font-bold" type="title">
          Welcome to winCrypt
        </ThemedText>
        <ThemedText
          className="tagline text-center"
          style={{ fontSize: 18, opacity: 0.6 }}
        >
          Invest your virtual ₹10,000 and compete with others
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

export default Market;
