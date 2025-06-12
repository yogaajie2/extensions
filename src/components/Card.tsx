import type { Extension } from "../types";

interface Props {
  data: Extension;
  handleActiveChange: (extensionName: string, value: boolean) => void;
  handleRemoveExtension: (extensionName: string) => void;
}

const Card = ({ data, handleActiveChange, handleRemoveExtension }: Props) => {
  return (
    <div class="flex min-h-48 flex-col rounded-2xl border border-neutral-200 bg-neutral-0 p-4 shadow dark:border-neutral-600 dark:bg-neutral-800">
      <div class="flex gap-4">
        <img class="h-12 w-12" src={data.logo} alt={data.name} />

        <div>
          <h2 class="text-lg font-bold">{data.name}</h2>

          <p class="text-neutral-600 dark:text-neutral-300">
            {data.description}
          </p>
        </div>
      </div>

      <div class="mt-auto flex items-center justify-between">
        <button
          class="rounded-full border border-neutral-200 px-4 py-1 transition-colors hover:bg-red-700 hover:text-neutral-0 focus:bg-neutral-100 focus:outline-2 focus:outline-offset-1 focus:outline-red-400 dark:border-neutral-600 dark:hover:border-transparent dark:hover:bg-red-400 dark:hover:text-neutral-900 dark:focus:bg-neutral-600"
          type="button"
          onClick={() => {
            const dialog: HTMLDialogElement = document.getElementById(
              "confirmationModal",
            ) as HTMLDialogElement;

            dialog.showModal();
          }}
        >
          Remove
        </button>

        <input
          checked={data.isActive}
          class="toggle border-neutral-300 bg-neutral-300 text-neutral-0 transition-colors checked:border-red-700 checked:bg-red-700 checked:hover:border-red-500 checked:hover:bg-red-500 focus:outline-2 focus:outline-offset-1 focus:outline-red-400 dark:border-neutral-600 dark:bg-neutral-600 dark:checked:border-red-400 dark:checked:bg-red-400"
          type="checkbox"
          onChange={(event) =>
            handleActiveChange(data.name, event.currentTarget.checked)
          }
        />
      </div>

      <dialog id="confirmationModal" className="modal">
        <div className="modal-box rounded-2xl bg-neutral-0 dark:bg-neutral-700">
          <h3 className="text-lg font-bold">Are you sure?</h3>

          <p className="py-4">
            Do you want to remove the {data.name} extension?
          </p>

          <div className="modal-action">
            <form className="flex gap-4" method="dialog">
              <button
                className="rounded-full border border-neutral-200 px-4 py-1 transition-colors hover:bg-red-700 hover:text-neutral-0 focus:bg-neutral-100 focus:outline-2 focus:outline-offset-1 focus:outline-red-400 dark:border-neutral-600 dark:hover:border-transparent dark:hover:bg-red-400 dark:hover:text-neutral-900 dark:focus:bg-neutral-600"
                onClick={() => handleRemoveExtension(data.name)}
              >
                Yes
              </button>

              <button className="rounded-full border border-neutral-200 px-4 py-1 transition-colors hover:bg-red-700 hover:text-neutral-0 focus:bg-neutral-100 focus:outline-2 focus:outline-offset-1 focus:outline-red-400 dark:border-neutral-600 dark:hover:border-transparent dark:hover:bg-red-400 dark:hover:text-neutral-900 dark:focus:bg-neutral-600">
                No
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Card;
