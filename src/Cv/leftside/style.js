import COLORS from "../../constants/colors";

export default theme => ({
  root: {
    flexGrow: 1,
    background: COLORS.blue,
    paddingBottom: "570px"
  },
  subImage: {
    padding: theme.spacing.unit * 3
  },
  image: {
    height: "160px",
    background: "white",
    paddingLeft: "50px"
  },
  title: {
    color: COLORS.white
  },
  subtitle: {
    color: COLORS.white,
    fontWeight: "normal"
  },
  subsubtitle: {
    color: COLORS.white,
    textDecoration: "underline"
  },
  icon: {
    color: COLORS.white,
    fontSize: "50px"
  },
  iconContainer: {},
  progress: {
    background: COLORS.white,
    marginBottom: "10px"
  },
  smallIcon: {
    color: COLORS.white,
    fontSize: "20px"
  }
});
