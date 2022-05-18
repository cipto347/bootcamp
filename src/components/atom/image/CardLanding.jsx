import PropTypes from "prop-types";
import VariousType from "./VariousType";
import styles from "./styles.module.scss";

function CardLanding({ cardType }) {
  return (
    <div>
      {cardType === "various" && (
        <div className={`${styles.cardWrapper} bg-LightPurple`}>
          <VariousType
            svgName="variousQuestion"
            className={styles.imageVarious}
          />
          <div className={`${styles.footer} bg-DarkPurple`} />
        </div>
      )}
      {cardType === "any" && (
        <div className={`${styles.cardWrapper} bg-LightNavy`}>
          <VariousType svgName="anyDevice" className={styles.imageAny} />
          <div className={`${styles.footer} bg-DarkNavy`} />
        </div>
      )}
      {cardType === "score" && (
        <div className={`${styles.cardWrapper} bg-LightBlue`}>
          <VariousType svgName="checkScore" className={styles.imageScore} />
          <div className={`${styles.footer} bg-DarkBlue`} />
        </div>
      )}
    </div>
  );
}
CardLanding.propTypes = {
  cardType: PropTypes.string.isRequired,
};
export default CardLanding;
