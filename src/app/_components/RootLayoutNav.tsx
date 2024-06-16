export default () => {
  return (
    <div
      className="z-100 absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
      grid="~ gap-5"
      border="~ 4px solid red"
      p="5"
      backdrop="blur-2xl opacity-70"
      text="black/50 nowrap"
      bg="red/30"
      {...{}}
    >
      <span>Here is Root Layout | Index 1</span>
      <span>选择要查看的页面案例，当前项目主要页面为：Page3</span>
      <nav className="flex justify-center gap-5">
        <Link href="/">Home/Root</Link> ｜
        <Link href="/page1">Page1 - Next.js</Link> ｜
        <Link href="/page2">Page2 - Terrible Design</Link> ｜
        <Link
          href="/page3"
          className="decoration-offset-8 animate-bounce underline decoration-wavy"
        >
          Page3 - Nice One
        </Link>
      </nav>
    </div>
  );
};
