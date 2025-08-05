import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Inputform() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [modaldata, setModaldata] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
  });
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => setUser(response.data))
      .catch((err) => console.error("Fetching error", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) return alert("Mobile number must be 10 digits");
    axios
      .post("http://localhost:5000/post3", { name, id, email, mobile })
      .then(() => {
        fetchData();
        alert("Data added");
        setName("");
        setId("");
        setEmail("");
        setMobile("");
      })
      .catch((err) => {
        if (err.response?.data?.error?.includes("Duplicate")) {
          alert("Duplicate entry");
        } else {
          console.error(err);
        }
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    axios.delete(`http://localhost:5000/delete/${id}`).then(() => fetchData());
  };

  const handleEdit = (data) => {
    setModaldata(data);
  };

  const handleUpdate = () => {
    const { id, name, email, mobile } = modaldata;
    axios
      .put(`http://localhost:5000/update/${id}`, { name, email, mobile })
      .then(() => {
        fetchData();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h4>Input Form</h4>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="form-control mb-2"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <input
              className="form-control mb-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-control mb-2"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <button className="btn btn-success w-100">Submit</button>
          </form>
        </div>

        <div className="col-md-8">
          <h4>Database</h4>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {user.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.mobile}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(u.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={() => handleEdit(u)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit User</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                value={modaldata.name}
                onChange={(e) =>
                  setModaldata({ ...modaldata, name: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                value={modaldata.email}
                onChange={(e) =>
                  setModaldata({ ...modaldata, email: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                value={modaldata.mobile}
                onChange={(e) =>
                  setModaldata({ ...modaldata, mobile: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputform;
