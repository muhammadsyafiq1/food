import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SeacrhBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return(
        <View>
            <SeacrhBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={ () => console.log('term was submited')}
            />
            <Text>
                Search Screen : {term}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen; 