import { FlatList, Text, View } from "react-native";
import { styles } from "../abahome/abahome.style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor.jsx";
import icon from "../../constants/icon.js";

function AbaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende seus serviços Médicos</Text>

      <FlatList
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Doctor
              name={item.name}
              icon={item.icon == "M" ? icon.male : icon.female}
              specialty={item.specialty}
            />
          );
        }}
      />
    </View>
  );
}

export default AbaHome;
