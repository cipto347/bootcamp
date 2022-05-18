import CreateList from "../../../constants/createList.json";
import IconLoader from "../../atom/images/IconLoader";
import ImagesLoader from "../../atom/images/ImagesLoader";

function CardSection() {
  return (
    <section className="flex flex-row flex-wrap mt-8">
      {CreateList &&
        CreateList.map((item) => (
          <div key={item.id} className="p-2 w-1/3 ">
            <div className="card bg-base-100 h-[32rem] shadow-xl rounded-none">
              <ImagesLoader imageUrl={item.imageUrl} />
              <div className="card-body bg-card-body pt-12 relative">
                <IconLoader imageIcon={item.icon} />
                <h2 className="card-title text-white">{item.title}</h2>
                <p className="text-white">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default CardSection;
