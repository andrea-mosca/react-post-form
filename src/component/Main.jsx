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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <h2>Crea un nuovo post</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label className="form-label">Autore:</label>
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
            <label className="form-label">Titolo:</label>
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
            <label className="form-label">Contenuto:</label>
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
              Rendi pubblico
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </form>
      </div>
    </main>
  );
}
