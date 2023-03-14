import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SeacrhBar from "../components/SearchBar";

const SearchScreen = () => {
    return(
        <View>
            <SeacrhBar />
            <Text>
                Search Screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen; 