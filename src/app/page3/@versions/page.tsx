// 这里涉及样式引入上下文顺序问题，注意！
import testStyles from "./version2/version2.module.css";
import "./version2/common.css";

export default () => {
  return (
    <div className="grid gap-5">
      <Link href="/page3/version1">Version1</Link>
      <Link href="/page3/version2">Version2</Link>
      <p>Versions RootPage</p>
    </div>
  );
  // return (
  //   <div className={`test ${testStyles.test}`}>
  //     <span className="test3">redasdasdwa</span>
  //     <div
  //       className={`test2 text-blue ${testStyles} test`}
  //       text="yellow"
  //       // style={{ color: "red" }}
  //     >
  //       Versions RootPage
  //     </div>
  //   </div>
  // );
};
