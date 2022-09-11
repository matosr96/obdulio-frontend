import {  listBooks, updateBook } from "../../actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BOOK_CREATE_RESET } from "../../constants";
import "./newbook.css";

const ModalUpdate = (props: any) => {
  const { openModalUpdate, setOpenModalUpdate, book_uuid } = props;
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

  const bookUpdate = useSelector((state: any) => state.bookUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = bookUpdate;

  const bookselected = Inventorylist?.filter(
    (product: any) => product.uuid === book_uuid
  );

  const [titleUpdate, setTitleUpdate] = useState("");
  const [authorUpdate, setAuthorUpdate] = useState("");
  const [editorialUpdate, setEditorialUpdate] = useState("");
  const [amountUpdate, setAmountUpdate] = useState("");
  const [stateUpdate, setStateUpdate] = useState("BUENO");

  if (titleUpdate === "") {
    bookselected?.map((book: any) => {
      setTitleUpdate(book.title);
      setAuthorUpdate(book.author);
      setEditorialUpdate(book.editorial);
      setAmountUpdate(book.amount);
      setStateUpdate(book.state);
    });
  }

  const CleanStates = () => {
    setTitleUpdate("");
    setAuthorUpdate("");
    setEditorialUpdate("");
    setAmountUpdate("");
    setStateUpdate("");
  };

  const submitUpdateHandler = (e: any): void => {
    e.preventDefault();
    setOpenModalUpdate(!openModalUpdate);
    dispatch(
      updateBook(book_uuid, {
        uuid: book_uuid,
        title: titleUpdate,
        author: authorUpdate,
        editorial: editorialUpdate,
        amount: amountUpdate,
        state: stateUpdate,
      }) as any
    );
  };

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BOOK_CREATE_RESET });
      setOpenModalUpdate(false);
    }

    dispatch(listBooks(uuid) as any);
  }, [dispatch, successUpdate]);

  return (
    <div className={openModalUpdate ? "openModal" : "closeModal"}>
      <div className="modal scale-up-center">
        <div className="modal_header">
          <h2 className="titlemodal">Nuevo Registro</h2>
          <button
            className="modal-close"
            onClick={() => setOpenModalUpdate(false)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        <form onSubmit={submitUpdateHandler} className="form_items">
          <div className="inputModal">
            <label htmlFor="">Titulo del libro</label>
            <input
              type="text"
              placeholder=""
              value={titleUpdate}
              onChange={(e) => setTitleUpdate(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Editorial</label>
            <input
              type="text"
              placeholder=""
              value={editorialUpdate}
              onChange={(e) => setEditorialUpdate(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Autor</label>
            <input
              type="text"
              placeholder=""
              value={authorUpdate}
              onChange={(e) => setAuthorUpdate(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Existencias</label>
            <input
              className="input-md"
              type="number"
              placeholder=""
              value={amountUpdate}
              onChange={(e) => setAmountUpdate(e.target.value)}
            />
          </div>
          <div className="inputModal">
            <label htmlFor="">Estado del libro</label>
            <select
              className="select"
              onChange={(e) => setStateUpdate(e.target.value)}
            >
              <option value="BUENO"> BUENO</option>
              <option value="REGULAR">REGULAR</option>
              <option value="MALO">MALO</option>
            </select>
          </div>
          <input
            className="button-card-login"
            type="submit"
            value={"Registrar"}
          />
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
