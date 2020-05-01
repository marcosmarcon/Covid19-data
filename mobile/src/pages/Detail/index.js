import React,{ useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import api_covid from "../../services/api_covid";
import styles from "./styles";
console.disableYellowBox = true;
export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api_covid
      .get("/api/countries/"+incident.iso2+"/confirmed")
      .then(response => {
        setCases(response.data);
      });
  }, []);

  useEffect(() => {
    api_covid
      .get("/api/countries/"+incident.iso2+"/confirmed")
      .then(response => {
        setCases(response.data);
      });
  }, []);

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#003399" />
        </TouchableOpacity>
      </View>
        
        <FlatList 
        data={cases}
        style={styles.incidentList}
        renderItem={({ item: incidentcase }) => (
           <View style={styles.incident}>
            <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Countrie:</Text>
            
            <Text style={styles.incidentValue}>{incident.name} / {incident.iso2} </Text>

            <Text style={styles.incidentProperty}>Confirmed: <Text style={styles.incidentValue}>{incidentcase.confirmed}</Text></Text>
            <Text style={styles.incidentProperty}>Recovered: <Text style={styles.incidentValue}>{incidentcase.recovered}</Text></Text>
            <Text style={styles.incidentProperty}>Deaths: <Text style={styles.incidentValue}>{incidentcase.deaths}</Text></Text>

          </View>
        )}
        />
    </View>
  );
}
