import { createBook, listBooks } from "../../actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BOOK_CREATE_RESET } from "../../constants";
import "./newbook.css";

const ModalCreate = (props: any) => {
  const { openModal, setOpenModal } = props;
  const dispatch = useDispatch();

  const userSingin = useSelector((state: any) => state.userSingin);
  const { userInfo } = userSingin;
  const { uuid } = userInfo;

  // < ----------- List process ----------------->
  const bookList = useSelector((state: any) => state.bookList);
  const { loading, error, data: book } = bookList;

  const Inventorylist = book?.filter((e: any) => {
    return e.user === uuid;
  });

  const titleList = Inventorylist?.map((libro: any) => libro.title);
  const authorList = Inventorylist?.map((libro: any) => libro.author);

  const bookCreate = useSelector((state: any) => state.bookCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = bookCreate;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");
  const [amount, setAmount] = useState("");
  const [state, setState] = useState("BUENO");

  const CleanStates = () => {
    setTitle("");
    setAuthor("");
    setEditorial("");
    setAmount("");
    setState("");
  };

  const submitCreateHandler = (e: any): void => {
    e.preventDefault();
    dispatch(
      createBook({
        user: uuid,
        title,
        author,
        editorial,
        amount,
        state,
      }) as any
    );
    CleanStates();
  };

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: BOOK_CREATE_RESET });
      setOpenModal(false);
    }

    dispatch(listBooks(uuid) as any);
  }, [dispatch, successCreate]);

  return (
    <div className={openModal ? "openModal" : "closeModal"}>
      <div className="modal scale-up-center">
        <div className="modal_header">
          <h2 className="titlemodal">Nuevo Registro</h2>
          <button className="modal-close" onClick={() => setOpenModal(false)}>
            <i className="bx bx-x"></i>
          </button>
        </div>

        <form onSubmit={submitCreateHandler} className="form_items">
          <div className="inputModal">
            <label htmlFor="">Titulo del libro</label>
            <input
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Editorial</label>
            <input
              type="text"
              placeholder=""
              value={editorial}
              onChange={(e) => setEditorial(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Autor</label>
            <input
              type="text"
              placeholder=""
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Existencias</label>
            <input
              className="input-md"
              type="number"
              placeholder=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Estado del libro</label>
            <select
              className="select"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="BUENO"> BUENO</option>
              <option value="REGULAR">REGULAR</option>
              <option value="MALO">MALO</option>
            </select>
          </div>
          <input className="button-card-login" type="submit" value={"Registrar"} />
        </form>
      </div>
    </div>
  );
};

export default ModalCreate;
