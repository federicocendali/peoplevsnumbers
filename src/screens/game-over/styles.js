import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
  },
  contentLandscape: {
    flexDirection: "row",
    height: 210,
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 0,
  },
  image: {
    width: "100%",
    height: 200,
  },
  imageLandscape: {
    width: "50%",
    height: 210,
  },
  detailContainer: {
    flex: 1,
  },
  detailContainerLandscape: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rounds: {
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: "Kanit-Regular",
  },
  selectedNumber: {
    fontSize: 16,
    fontFamily: "Kanit-Regular",
    paddingVertical: 5,
  },
  buttonContainer: {
    paddingVertical: 15,
  },
});
