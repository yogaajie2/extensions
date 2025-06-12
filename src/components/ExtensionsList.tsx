import Card from "./Card";
import data from "../content/extensions/data.json";

const ExtensionsList = () => {
  return (
    <>
      <section class="my-10 flex flex-col text-center md:mb-6 md:flex-row md:items-center md:justify-between">
        <h1 class="text-4xl font-bold">Extensions List</h1>

        <div class="mt-8 flex justify-evenly md:mt-0 md:gap-4">
          <button class="filter-button-active" type="button">
            All
          </button>

          <button class="filter-button" type="button">
            Active
          </button>

          <button class="filter-button" type="button">
            Inactive
          </button>
        </div>
      </section>

      <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </section>
    </>
  );
};

export default ExtensionsList;
