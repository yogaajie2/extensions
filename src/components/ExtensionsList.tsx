import { useState } from "preact/hooks";
import Card from "./Card";
import data from "../content/extensions/data.json";

const ExtensionsList = () => {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const filteredExtensions = extensions.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true; // all
  });

  function handleActiveChange(extensionName: string, value: boolean) {
    setTimeout(() => {
      setExtensions(
        extensions.map((extension) => {
          if (extension.name === extensionName) {
            return { ...extension, isActive: value };
          } else {
            return extension;
          }
        }),
      );
    }, 500);
  }

  function handleRemoveExtension(extensionName: string) {
    setExtensions(
      extensions.filter((extension) => extension.name !== extensionName),
    );
  }

  return (
    <>
      <section class="my-10 flex flex-col text-center md:mb-6 md:flex-row md:items-center md:justify-between">
        <h1 class="text-4xl font-bold">Extensions List</h1>

        <div class="mt-8 flex justify-evenly md:mt-0 md:gap-4">
          <button
            class={filter === "all" ? "filter-button-active" : "filter-button"}
            type="button"
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            class={
              filter === "active" ? "filter-button-active" : "filter-button"
            }
            type="button"
            onClick={() => setFilter("active")}
          >
            Active
          </button>

          <button
            class={
              filter === "inactive" ? "filter-button-active" : "filter-button"
            }
            type="button"
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </section>

      <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.map((extension) => (
          <Card
            data={extension}
            filter={filter}
            handleActiveChange={handleActiveChange}
            handleRemoveExtension={handleRemoveExtension}
            key={extension.name}
          />
        ))}
      </section>
    </>
  );
};

export default ExtensionsList;
