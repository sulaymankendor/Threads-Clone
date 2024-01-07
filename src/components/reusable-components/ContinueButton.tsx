import React from "react";
import { Oval } from "react-loader-spinner";

function ContinueButton({ submit, onSubmit, disabled }) {
  return (
    <button
      disabled={true}
      onClick={() => submit()}
      className={`flex text-center justify-center p-[6px] rounded text-xs font-semibold w-full ${
        disabled ? "text-gray-300" : "text-gray-100"
      } ${disabled === false && "hover:bg-violet-500"} ${
        disabled ? "bg-violet-900" : "bg-violet-600"
      }`}
    >
      {onSubmit ? (
        <Oval strokeWidth={5} width={"20px"} height={"20px"} />
      ) : (
        <p className="uppercase font-normal">Continue</p>
      )}
    </button>
  );
}

export default ContinueButton;
