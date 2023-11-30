function PlusCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 text-white"
      style={{ width: "24px", marginRight: "10px", marginLeft: "8px" }}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default PlusCircle;
