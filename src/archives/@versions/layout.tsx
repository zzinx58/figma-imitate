export default ({
  children,
  versions,
}: { [key in "children" | "versions"]: React.ReactNode }) => {
  return (
    <div className="m-3 w-max p-5" border="~ red 2px">
      <span>Here is Versions Layout | Index 3</span>
      {children}
      {/* Here's slot not work. */}
      {/* {versions} */}
    </div>
  );
};
