import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import api_covid from "../../services/api_covid";
import styles from "./styles";


export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    api_covid
      .get("/api/countries/")
      .then(response => {
        setIncidents(response.data.countries);
      });
  }, []);

 function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.title}>Welcome</Text>
      
      <Text style={styles.description}>Registered cases.</Text>
   
      <FlatList 
        data={incidents}
        style={styles.incidentList}
        keyExtractor={(item, index) => `${index}`}


        renderItem={({ item: incident }) => (
          <View style={styles.incident}>

            <Text value={incident.iso2} style={styles.incidentProperty}>{incident.name}</Text>
            
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
            <Text style={styles.detailsButtonText}>See more details</Text>
            </TouchableOpacity>  


          </View>
        )}
      />
    </View>
  );
}
