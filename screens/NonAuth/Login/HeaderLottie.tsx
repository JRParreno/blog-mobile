import * as React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';

export default function HeaderLottie() {
    return (
        <View style={styles.lottieContainer}>
            <LottieView style={{ flex: 1 }} source={require("../../../assets/lottie/login-blog.json")} autoPlay loop />
        </View>
    );
}

const styles = StyleSheet.create({
    lottieContainer: {
        flex: 1.25,
    }
})