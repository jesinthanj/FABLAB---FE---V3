import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            paddingRight: "8px",
            paddingTop: "8px",
          }}
        >
          <img
            src={"../../assets/licet_logo.png"}
            alt=""
            width="80"
            height="80"
          />
        </div>
        <div className="card shadow">
          <div className="card-body">
            <h5
              className="pb-1 d-flex justify-content-center"
              style={{
                fontFamily: "montserrat",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              LICET
            </h5>
            <h1
              className="pb-4 d-flex justify-content-center"
              style={{
                fontFamily: "montserrat",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              FABLAB
            </h1>
            <div>
              <TextField
                className="py-3 d-flex justify-content-center"
                label="username"
              />
              <TextField
                className="py-3 d-flex justify-content-center"
                label="password"
              />
            </div>
            <div className="d-flex justify-content-between">
              <a
                href="/"
                rel="noopener noreferrer"
                className="text-decoration-none text-warning"
              >
                <p style={{ fontSize: "10px" }}>Forgot password</p>
              </a>
              <a
                href="/register1"
                rel="noopener noreferrer"
                className="text-decoration-none text-warning"
              >
                <p style={{ fontSize: "10px" }}>New user?</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
