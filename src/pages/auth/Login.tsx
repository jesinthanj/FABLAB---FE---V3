import Layout from "../../components/Layout";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <Layout>
      <div className="vh-100 d-flex align-items-center justify-content-center">
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
            <TextField
              className="py-3 d-flex justify-content-center"
              label="username"
            />
            <TextField
              className="py-3 d-flex justify-content-center"
              label="password"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
