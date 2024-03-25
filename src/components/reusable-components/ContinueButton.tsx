function ContinueButton({ onClick }: { onClick: any }) {
  return (
    <button
      className={
        "flex text-center justify-center p-[6px] rounded text-xs font-semibold text-gray-100 w-full bg-violet-600 hover:bg-violet-500"
      }
      onClick={onClick}
    >
      {/* {onSubmit ? (
        <Oval strokeWidth={5} width={"20px"} height={"20px"} />
      ) : (
      )} */}
      <p className="uppercase font-normal">Continue</p>
    </button>
  );
}

export default ContinueButton;
