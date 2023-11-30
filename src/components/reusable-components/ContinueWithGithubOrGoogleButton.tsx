function ContinueWithGithubOrGoogleButton({ accountName }) {
  return (
    <button className="p-2 border rounded mb-2 border-gray-200 hover:bg-gray-50 active:bg-white">
      <p className="text-gray-600 text-xs font-semibold">
        Continue with {accountName}
      </p>
    </button>
  );
}

export default ContinueWithGithubOrGoogleButton;
