import { FlatList, Image, Text, View } from "react-native";
import { styles } from "../services/services.styles.js";
import { doctors_services } from "../../constants/data.js";
import icon from "../../constants/icon.js";
import Service from "../../components/service/service.jsx";

function Services() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={icon.female} />
        <Text style={styles.name}>Erica</Text>
        <Text style={styles.specialty}>Genecologista</Text>
      </View>

      <FlatList
        data={doctors_services}
        keyExtractor={(serv) => serv.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Service description={item.description} price={item.price} />;
        }}
      />
    </View>
  );
}

export default Services;
