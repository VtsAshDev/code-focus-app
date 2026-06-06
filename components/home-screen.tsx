import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  ReduceMotion,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Fonts } from "@/constants/theme";

const NEON_GREEN = "#00FF66";
const NEON_RED = "#FF3333";
const DARK_BG = "#000000";

export interface HomeScreenProps {
  systemStatus: "ONLINE" | "OFFLINE" | "ERROR";
  onStartFocus: () => void;
  onNavigateLogin: () => void;
  isLoading: boolean;
}

export function HomeScreen({
  systemStatus,
  onStartFocus,
  onNavigateLogin,
  isLoading,
}: HomeScreenProps) {
  // Cursor Blinking Animation (Using simple interval for 100% reliability on iOS)
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Main Button Scale Animation
  const startBtnScale = useSharedValue(1);
  const startBtnStyle = useAnimatedStyle(() => ({
    transform: [{ scale: startBtnScale.value }],
  }));

  const handleStartPressIn = () => {
    if (isLoading) return;
    startBtnScale.value = withTiming(0.96, {
      duration: 80,
      reduceMotion: ReduceMotion.Never,
    });
  };
  const handleStartPressOut = () => {
    startBtnScale.value = withTiming(1, {
      duration: 100,
      reduceMotion: ReduceMotion.Never,
    });
  };

  const isSystemOnline = systemStatus === "ONLINE";
  const statusColor = isSystemOnline ? NEON_GREEN : NEON_RED;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="light" />

      {/* Decorative Center Graphics */}
      <View style={styles.centerContainer}>
        <View
          style={styles.squaresContainer}
          importantForAccessibility="no"
          accessibilityElementsHidden={true}
        >
          {/* Solid Green Square 1 */}
          <View
            style={[
              styles.solidSquare,
              { backgroundColor: statusColor, shadowColor: statusColor },
            ]}
          />
          {/* Solid Green Square 2 */}
          <View
            style={[
              styles.solidSquare,
              { backgroundColor: statusColor, shadowColor: statusColor },
            ]}
          />
        </View>

        {/* LOGO Title */}
        <View style={styles.logoRow}>
          <Text
            style={[styles.logoText, { flexShrink: 1 }]}
            accessibilityRole="header"
            accessibilityLabel="Code Focus"
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            C O D E _ F O C U S
          </Text>
          <View
            style={{ opacity: isCursorVisible ? 1 : 0 }}
            importantForAccessibility="no"
          >
            <View
              style={[
                styles.terminalCursor,
                { backgroundColor: statusColor, shadowColor: statusColor },
              ]}
            />
          </View>
        </View>

        {/* Tagline */}
        <Text style={styles.taglineText}>
          {"// FOCO ABSOLUTO PARA DESENVOLVEDORES"}
        </Text>
      </View>

      {/* Bottom Actions Section */}
      <View style={styles.bottomContainer}>
        {/* Primary START button */}
        <Animated.View
          style={[
            styles.primaryButtonWrapper,
            startBtnStyle,
            isLoading && styles.disabledButton,
          ]}
        >
          <Pressable
            onPress={onStartFocus}
            onPressIn={handleStartPressIn}
            onPressOut={handleStartPressOut}
            disabled={isLoading}
            style={({ pressed }) => [
              styles.primaryButton,
              { backgroundColor: statusColor, shadowColor: statusColor },
              pressed && styles.primaryButtonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Começar o modo foco"
            accessibilityHint="Inicia uma nova sessão de foco"
          >
            <Text style={styles.primaryButtonText}>COMEÇAR</Text>
          </Pressable>
        </Animated.View>

        {/* Secondary Login button */}
        <Pressable
          onPress={onNavigateLogin}
          disabled={isLoading}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.buttonTextPressed,
            isLoading && styles.disabledButton,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Já tenho login"
          accessibilityHint="Navega para a tela de autenticação"
        >
          <Text style={[styles.secondaryButtonText, { color: statusColor }]}>
            JÁ TENHO LOGIN
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: DARK_BG,
    justifyContent: "space-between",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 2,
  },
  squaresContainer: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 56,
  },
  solidSquare: {
    width: 76,
    height: 96,
    borderRadius: 2,
    // iOS neon glow shadow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    // Android glow backup
    elevation: 4,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  logoText: {
    color: "#FFFFFF",
    fontFamily: Fonts?.mono || "monospace",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 2,
    // Subtle white glow
    textShadowColor: "rgba(255, 255, 255, 0.4)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  taglineText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: Fonts?.mono || "monospace",
    fontSize: 12,
    letterSpacing: 1.5,
    marginBottom: 40,
    textAlign: "center",
  },
  terminalCursor: {
    width: 12,
    height: 24,
    marginLeft: 6,
    // Glow effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  bottomContainer: {
    paddingHorizontal: 32,
    paddingBottom: 60,
    gap: 20,
    alignItems: "center",
    zIndex: 2,
  },
  primaryButtonWrapper: {
    width: "100%",
  },
  primaryButton: {
    width: "100%",
    paddingVertical: 18,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    // iOS neon glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    // Android glow backup
    elevation: 8,
  },
  primaryButtonPressed: {
    opacity: 0.85,
  },
  primaryButtonText: {
    color: DARK_BG,
    fontFamily: Fonts?.mono || "monospace",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 3,
  },
  secondaryButton: {
    paddingVertical: 8,
    alignItems: "center",
  },
  secondaryButtonText: {
    fontFamily: Fonts?.mono || "monospace",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textDecorationLine: "underline",
  },
  buttonTextPressed: {
    opacity: 0.5,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
