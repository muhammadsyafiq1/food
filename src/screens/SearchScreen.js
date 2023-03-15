import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SeacrhBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something Went Wrong');
        }
    };

    return(
        <View>
            <SeacrhBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>
                We have found : {results.length}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen; 