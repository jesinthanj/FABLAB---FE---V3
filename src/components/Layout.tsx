export default function Layout(props: any) {
  return (
    <>
      <div
        style={{
          padding: "10vh",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#FF8E23",
          borderBottomRightRadius: "150px",
          zIndex: "-1",
        }}
      ></div>
      {props.children}
      <div
        style={{
          padding: "10vh",
          position: "fixed",
          bottom: 0,
          right: 0,
          backgroundColor: "#FF8E23",
          borderTopLeftRadius: "150px",
          zIndex: "-1",
        }}
      ></div>
    </>
  );
}
