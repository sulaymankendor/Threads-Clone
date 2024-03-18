function GithubAndGoogleButton({ children }: { children: JSX.Element }) {
  return (
    <button className="flex items-center p-2 border rounded mb-2 border-gray-200 hover:bg-gray-50 active:bg-white">
      {children}
      <p className="text-gray-600 text-xs font-semibold ml-1">
        Continue with Github
      </p>
    </button>
  );
}

export default GithubAndGoogleButton;
