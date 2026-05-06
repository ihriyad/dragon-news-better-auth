import Header from "@/components/Header";
import React from "react";

const NewsPageLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default NewsPageLayout;
