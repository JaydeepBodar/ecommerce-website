import React from "react";
import { Helmet } from "react-helmet"
const Helmetc = ({ title }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </React.Fragment>
  );
};

export default Helmetc;
