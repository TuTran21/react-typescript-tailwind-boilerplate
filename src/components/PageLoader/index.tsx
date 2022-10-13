import { Fragment } from "react";

// Used to lazy load react pages
// Can implement layout skeleton loadings to prevent CLS (Cumulative Layout Shift)
const PageLoader = () => {
  return (
    <Fragment>
      <p>Loading</p>
    </Fragment>
  );
};

export default PageLoader