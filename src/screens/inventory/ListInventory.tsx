import { listBooks } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import logo from "../../assets/oms.jpg";
import "./listinventory.css";

const ListInventory = () => {
  const dispatch = useDispatch();
  const userSingin = useSelector((state: any) => state.userSingin);
  const { userInfo } = userSingin;
  const { uuid } = userInfo;

  const bookList = useSelector((state: any) => state.bookList);
  const { loading, error, data: book } = bookList;

  const databook = book?.filter((e: any) => {
    return e.user === uuid;
  });

  useEffect(() => {
    dispatch(listBooks(uuid) as any);
  }, [dispatch]);

  return (
    <div className="container-list">
      <div className="header-list">
        <img src={logo} alt="logo" />
        <div className="text-header">
          <h2>Institucion Educativa Obdulio Mayo Scarpeta</h2>
          <h4>Inventario Biblioteca</h4>
          <p>
            Aprobada Según Resolución N° 361 de julio 28 de 2011 emanada de la
            Secretaria de Educación del Departamento de Córdoba
          </p>
          <div className="info-list">
            <span>DANE 123500000249</span>
            <span>Moñitos - Cordoba</span>
            <span>NIT 900061762-1</span>
          </div>
        </div>
      </div>
      <div className="body-list">
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Editorial</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          {databook?.map((book: any) => (
            <tbody>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.editorial}</td>
              <td className="td-center">{book.amount}</td>
              <td>{book.state}</td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ListInventory;
