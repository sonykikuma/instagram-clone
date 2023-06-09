import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
  return (
    <main>
      <section>
        {/*stories*/}
        <Stories />
        {/*posts*/}
        <Posts/>
      </section>

      <section>
        {/*mini profile*/}
        {/*suggestions*/}
      </section>
    </main>
  );
};

export default Feed;
