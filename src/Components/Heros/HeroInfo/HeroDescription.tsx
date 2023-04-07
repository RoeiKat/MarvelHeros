import { Fragment } from "react";
const HeroDescription = function (props: { description: string | null }) {
  const { description } = props;
  return (
    <Fragment>
      <h5>Description:</h5>
      <p>
        {description
          ? description
          : "There is no description available for this hero"}
      </p>
    </Fragment>
  );
};

export default HeroDescription;
