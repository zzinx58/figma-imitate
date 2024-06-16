export default ({ children }: { [key in "children"]: React.ReactNode }) => {
  return (
    <div
      className="absolute right-0 top-1/3 grid gap-5 p-5"
      border="~ solid 2px red"
    >
      <span>Here is Page3 Layout | Index 2</span>
      <nav className="flex gap-5">
        <Link href="/page3">Versions Home/Root</Link> |
        <Link href="/page3/version1">Version1</Link> |
        <Link href="/page3/version2">Version2</Link>
      </nav>
      {children}
    </div>
  );
};
