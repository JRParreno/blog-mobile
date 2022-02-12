import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { commonColor } from "../../../constants/Colors";

export default function FooterLogin() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.textStyle}>Create your Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginVertical: 20,
        alignItems: 'center'
    },
    textStyle: {
        color: commonColor.main,
        textDecorationLine: 'underline'
    }
})