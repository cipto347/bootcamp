import { Grid } from "gridjs-react";
import propTypes from "prop-types";

// grid css
import "../../../style/module/penaCustoms/gridjs.scss";

function GridTable(props) {
  const { propsServer, propsColumns, propsLanguage, children, propsAddButton } =
    props;
  return (
    <div className="lg:relative">
      {propsAddButton && children}

      <Grid
        server={propsServer}
        columns={propsColumns}
        sort
        search
        pagination
        fixedHeader
        autoWidth
        language={propsLanguage}
        resizable
      />
    </div>
  );
}

GridTable.propTypes = {
  propsServer: propTypes.object.isRequired,
  propsColumns: propTypes.array.isRequired,
  propsLanguage: propTypes.object.isRequired,
  children: propTypes.element,
  propsAddButton: propTypes.bool,
};

GridTable.defaultProps = {
  children: <div />,
  propsAddButton: false,
};

export default GridTable;
