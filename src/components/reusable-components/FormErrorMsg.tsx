import CloseErrorMsg from "./CloseErrorMsg";

function FormErrorMsg({ message, showFormErrorMsg, setShowFormErrorMsg }) {
  return (
    <div
      className={`px-2 items-center flex justify-between bg-red-200 p-1 rounded text-center transition-all ${showFormErrorMsg}`}
    >
      <p className="text-sm">{message}</p>
      <CloseErrorMsg
        onClick={() => {
          setShowFormErrorMsg("hidden");
        }}
      />
    </div>
  );
}

export default FormErrorMsg;
