import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  item: {
    backgroundColor: "#eeeeee",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: colors.black,
  },
  value: {
    fontSize: 18,
  },
});
