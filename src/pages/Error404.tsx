import Layout from "../components/Layout";

export function Error404() {
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div>
          <h1
            style={{
              fontFamily: "montserrat",
              fontWeight: "bold",
            }}
          >
            404 - Page Not Found
          </h1>
        </div>
      </div>
    </Layout>
  );
}
