import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 12,
  },

  banner: {
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingTp: 10,
    paddingBottom: 25,
  },

  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
    fontWeight: "bold",
    marginTop: 5,
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
    marginTop: 3,
  },

  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 15,
    marginLeft: 10,
  },
};
