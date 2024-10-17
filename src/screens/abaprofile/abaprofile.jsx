import { Text, View } from "react-native";
import { styles } from "../abaprofile/abaprofile.style.js";

function AbaProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Wesley Silva Soares</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>wesley@wssweb.com</Text>
      </View>
    </View>
  );
}

export default AbaProfile;
