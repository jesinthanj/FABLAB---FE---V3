export default function Layout(props: any) {
  return (
    <>
      <div
        style={{
          padding: "60px",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#FF8E23",
          borderBottomRightRadius: "150px",
        }}
      ></div>
      {props.children}
      <div
        style={{
          padding: "60px",
          position: "absolute",
          bottom: 0,
          right: 0,
          backgroundColor: "#FF8E23",
          borderTopLeftRadius: "150px",
        }}
      ></div>
    </>
  );
}
