import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const DetailPage = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => navigate("/undefined", { state: err.message }));
  }, []);
  console.log(book);

  return (
    <div>
      {!book && <p>Yükleniyor...</p>}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <img
              style={{ maxWidth: "400px" }}
              className="img-fluid rounded shadow"
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3 ">
            <h1>{book.title}</h1>
            <div>
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="İçerik" value={book.description} />
              <BookInfo label="Sayfa sayısı" value={book.page} />
              <BookInfo label="Yıl" value={book.year} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
//2. komponent
const BookInfo = ({ label, value }) => {
  return (
    <p className="fs-5 text-info ">
      <span className="badge bg-success me-3">{label}:</span>
      <span>{value}</span>
    </p>
  );
};
