/* eslint-disable react/prop-types */
import { useRef } from 'react';

let modalRef;

export function showModal() {
  modalRef?.current?.showModal();
}

export default function Modal({ setCurrLocation }) {
  modalRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <dialog
      ref={modalRef}
      className="border-solid border-2 border-slate-700 rounded-lg card"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCurrLocation(inputRef.current.value)
          modalRef.current.close()
        }}
        className="mx-8 my-6 space-y-8"
      >
        <div className="space-x-4 text-lg">
          <label htmlFor="city">City:</label>
          <input
            ref={inputRef}
            type="text"
            id="city"
            className="px-4 py-2 bg-slate-200"
          />
        </div>
        <div className="flex justify-evenly">
          <input
            type="submit"
            value="Save"
            className="px-4 py-1 rounded-sm bg-green-500 text-white"
          />
          <input
            type="button"
            value="Close"
            onClick={() => modalRef.current.close()}
            className="px-4 py-1 rounded-sm bg-slate-200"
          />
        </div>
      </form>
    </dialog>
  );
}
