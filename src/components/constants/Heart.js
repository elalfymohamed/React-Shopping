import React from "react";
import Header from "../Header";

function Heart() {
  return (
    <>
      <Header />
      <section className="section-heart">
        <div className="section-heart__container">
          <div className="section-heart__container__empty-heart">
            <p>your heart is empty</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Heart;
