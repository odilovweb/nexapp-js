import React from "react";
import Repo from "@/components/Repo";
function page({ params: { name } }) {
  return (
    <div>
      <Repo name={name} />
    </div>
  );
}

export default page;
