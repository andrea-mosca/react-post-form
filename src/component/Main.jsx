import axios from "axios";

const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

export default function Main() {
  return (
    <main>
      <div className="container">
        <h2>Crea un nuovo post</h2>
        <form onSubmit={""}>
          <div>
            <label className="form-label">Autore:</label>
            <input
              className="form-control"
              type="text"
              name="author"
              value={""}
              onChange={""}
              required
            />
          </div>
          <div>
            <label className="form-label">Titolo:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={""}
              onChange={""}
              required
            />
          </div>
          <div>
            <label className="form-label">Contenuto:</label>
            <textarea
              className="form-control"
              name="body"
              value={""}
              onChange={""}
              required
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="public"
                checked={""}
                onChange={""}
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
