import React from "react";
import CreateList from "../../../constants/createList.json";
import IconLoader from "../../atom/images/IconLoader";
import ImagesLoader from "../../atom/images/ImagesLoader";

function CardSection() {
  return (
    <section className="flex flex-row justify-center flex-wrap gap-4 mt-8">
      {CreateList &&
        CreateList.map((item) => (
          <div
            className="card w-1/4 bg-base-100 shadow-xl rounded-none"
            key={item.id}
          >
            <ImagesLoader imageUrl={item.imageUrl} />
            <div className="card-body bg-card-body relative">
              <IconLoader imageIcon={item.icon} />
              <h2 className="card-title text-white">{item.title}</h2>
              <p className="text-white">{item.desc}</p>
            </div>
          </div>
        ))}
    </section>
  );
}

export default CardSection;
