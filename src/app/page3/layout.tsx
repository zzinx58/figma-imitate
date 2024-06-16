import Page3LayoutNav from "./_components/Page3LayoutNav";
export default ({
  versions,
  children,
  params,
}: {
  [key in "children" | "versions"]: React.ReactNode;
} & { params: any }) => {
  return (
    <div>
      {/* Versions 页面导航 Layout */}
      {/* <Page3LayoutNav children={children} /> */}
      {/* versions 页面单独呈现 */}
      {versions}
    </div>
  );
};
