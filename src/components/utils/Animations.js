import { StyleSheet } from "aphrodite";
import { bounce, fadeInRight, fadeInLeft } from "react-animations";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "3s",
    animationIterationCount: "infinite",
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "3s",
    animationIterationCount: "infinite",
  },
});

export default styles;
