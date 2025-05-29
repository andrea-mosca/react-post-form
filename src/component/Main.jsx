import axios from "axios";
import { useState } from "react";

const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

export default function Main() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post(apiUrl, formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <main>
      <div className="container">
        <div className="mt-5 card p-3 text-bg-dark">
          <h2>Create new post</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label className="form-label">Author:</label>
              <input
                className="form-control"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="form-label">Title:</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="form-label">Content:</label>
              <textarea
                className="form-control"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="public"
                  checked={formData.public}
                  onChange={handleInputChange}
                />
                Make public
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Invia
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
