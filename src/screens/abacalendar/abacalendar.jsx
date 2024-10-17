import { FlatList, View } from "react-native";
import { styles } from "../abacalendar/abacalendar.style.js";
import { appointments } from "../../constants/data";
import Appointment from "../../components/appointments/appointments.jsx";

function AbaCalendar() {
  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(appoint) => appoint.id_appointments}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appointment
              service={item.service}
              doctor={item.doctor}
              specialty={item.specialty}
            />
          );
        }}
      />
    </View>
  );
}

export default AbaCalendar;
