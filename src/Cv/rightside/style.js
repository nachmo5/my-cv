import COLORS from "../../constants/colors";

export default theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  paper: {
    // ...theme.mixins.gutters(),
    //   paddingTop: theme.spacing.unit * 2,
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
    borderRadius: 0
    //    backgroundColor: theme.palette.primary.main,
    //    color: theme.palette.text.secondary,
    //  height: "300px"
  },
  header: {
    backgroundColor: COLORS.blue,
    width: "100%",
    height: "50px",
    display: "flex",
    direction: "column",
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  headerTxt: {
    color: COLORS.white
  },
  title: {
    color: COLORS.darkGray
  },
  date: {
    color: COLORS.blue
  },
  subtitle: {
    color: COLORS.darkGray
  },
  cardBody: {
    padding: theme.spacing.unit * 2
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
    fontSize: "30px",
    color: COLORS.white
  }
});
