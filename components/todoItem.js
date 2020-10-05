import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Button, View} from 'react-native';

export default function TodoItem({ pressHandler, item }) {
  return (
    <View style={styles.innerContainer}>
        <View style={styles.textInputContainer}>
            <Text style={styles.title}>{item.text}</Text>
        </View>
        <Text style={styles.fieldName}>
            <Button color='#1A237E' onPress={() => pressHandler(item.key)} title="Delete" />
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    innerContainer: {
        padding: 10,
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        flex: 0.5,
        flexDirection: 'row'
    },
    fieldName: {
        flex: 1,
    },
    textInputContainer: {
        flex: 3,
    },
    title: {
        fontSize: 18,
    }
});