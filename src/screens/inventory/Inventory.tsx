import { listBooks } from "../../actions";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import "./inventory.css";
import ModalCreate from "./NewBook";

const Inventory = () => {
  const dispatch = useDispatch();
  const userSingin = useSelector((state: any) => state.userSingin);
  const { userInfo } = userSingin;
  const { uuid } = userInfo;

  const bookList = useSelector((state: any) => state.bookList);
  const { loading, error, data: book } = bookList;
  console.log(book);

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [search, setSearch] = useState("");

  const [item, setItem] = useState("");

  const databook = useMemo(
    () =>
      book?.filter((e: any) => {
        return e.title.toLowerCase().includes(search.toLowerCase());
      }),
    [book, search]
  );

  const databookUser = databook?.filter((e: any) => {
    return e.user === uuid;
  });

  useEffect(() => {
    dispatch(listBooks(uuid) as any);
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="screen">
        <div className="header-screen">
          <h3 className="title-screen">Inventario Biblioteca</h3>
        </div>
        <div className="table-screen">
          <div className="header-table-screen">
            <div className="search-table">
              <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
                <input
                  placeholder="Search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <button
              className="btn-header-screen"
              onClick={() => setOpenModalCreate(!openModalCreate)}
            >
              Agregar Registro
            </button>
          </div>
          <div className="container-table">
            <table>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Autor</th>
                  <th>Editorial</th>
                  <th>Cantidad</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              {databookUser?.map((book: any) => (
                <tbody>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.editorial}</td>
                  <td className="td-center">{book.amount}</td>
                  <td>{book.state}</td>
                  <td>
                    <div className="btn-actions-table">
                      <button className="action-edit">
                        <i className="bx bx-edit"></i>
                      </button>
                      <button className="action-trash">
                        <i className="bx bx-trash"></i>
                      </button>
                    </div>
                  </td>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>

      <ModalCreate
        openModal={openModalCreate}
        setOpenModal={setOpenModalCreate}
      />
    </>
  );
};

export default Inventory;
