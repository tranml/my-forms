import { Text, StyleSheet, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useCheckoutForm } from "../../contexts/CheckoutFormProvider";

export default function ConfirmationFormScreen() {
  const { personalInfo, paymentInfo, onSubmit } = useCheckoutForm();


  // console.log(Object.entries(personalInfo).map(([key, value]) => {
  //   return {
  //     [key]: value,
  //   }
  // }));
  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1, gap: 15 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={"/checkout"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value.toString()}
              </Text>
            ))}
          </View>
        )}

        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={"/checkout/payment"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value.toString()}
              </Text>
            ))}
          </View>
        )}
        <CustomButton title="Submit" onPress={onSubmit} style={styles.button} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 25,
    gap: 15,
  },
  button: {
    marginTop: "auto",
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});
