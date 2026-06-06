import React, { useState } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import { HomeScreen } from "@/components/home-screen";

export default function HomeScreenContainer() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [userPoints] = useState<number | undefined>(942);

  const handleStartFocus = () => {
    setIsLoading(true);
    // Simulate connection sequence before navigation
    setTimeout(() => {
      setIsLoading(false);
      router.push("/explore");
    }, 1500);
  };

  const handleNavigateLogin = () => {
    router.push("/modal");
  };

  return (
    <HomeScreen
      systemStatus="ONLINE"
      isOnline={isOnline}
      userPoints={userPoints}
      onStartFocus={handleStartFocus}
      onNavigateLogin={handleNavigateLogin}
      isLoading={isLoading}
    />
  );
}
