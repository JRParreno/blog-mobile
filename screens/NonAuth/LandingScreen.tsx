import * as React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Button } from "react-native-elements";
import ViewWithLoading from "../../components/ViewWithLoading";
import { commonColor } from "../../constants/Colors";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";


export default function LandingScreen() {
    const navigation = useNavigation();
    const [isRegister, setIsRegister] = useState<boolean>(true);

    return (
        <ViewWithLoading loading={false}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <LottieView
                        source={require('../../assets/lottie/93385-login.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.baseText, { fontSize: 30, marginBottom: 20 }]}>
                        Enterprise Team Collaboration.
                    </Text>
                    <Text style={[styles.baseText, { fontSize: 18, color: '#666670' }]}>
                        Bring together your files, your tools project and people. Including a new
                        mobile and desktop application.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.btnInnerContainer}>
                        <Button
                            title={'Register'}
                            buttonStyle={{
                                backgroundColor: isRegister ? commonColor.white : '#3B3A41',
                                borderRadius: 10,
                                padding: 15,
                                paddingHorizontal: 30
                            }}
                            titleStyle={{
                                color: isRegister ? '#3B3A41' : commonColor.white
                            }}
                            onPress={() => {
                                setIsRegister(true);
                            }}
                        />
                        <Button
                            title={'Sign In'}
                            buttonStyle={{
                                backgroundColor: !isRegister ? commonColor.white : '#3B3A41',
                                borderRadius: 10,
                                padding: 15,
                                paddingHorizontal: 30
                            }}
                            onPress={() => {
                                setIsRegister(false);
                                navigation.navigate("Login");
                            }}
                            titleStyle={{
                                color: !isRegister ? '#3B3A41' : commonColor.white
                            }}
                        />
                    </View>
                </View>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonColor.black
    },
    imageContainer: {
        flex: 2
    },
    textContainer: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        flex: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnInnerContainer: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#3B3A41',
        borderRadius: 10
    },
    baseText: {
        color: commonColor.white,
        textAlign: 'center'
    }
})