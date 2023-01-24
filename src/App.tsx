import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import NotFound from "./NotFound";
import BookLayout from "./BookLayout";
// import About from "./About";
// import BooksRoutes from "./BooksRoutes";
// import Contact from "./Contact";

function App() {
  // para searchParams ir a <NotFount />
  // Otra forma de definir el Router
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <NavLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         element: <About />,
  //       },
  //       {
  //         index: true,
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/*",
  //     element: <NotFound />,
  //    }
  // ]);

  // y en el return ponemos el element que seria el Outlet
  // return ({element})
  return (
    <>
      {/* 
          Lo copado de esto es que te permite renderizar algo asi como, por ej, un
          sidebar e ir modificandola segun en que ruta estes

          Extra: tambien se puede agregar location, para hardcodear la url para renderizar
          especifico componente

          <Routes location="/books">
            <Route path="/books" element={<h1>Extra content</h1>} />
          </Routes>
      */}
      <Routes>
        <Route path="/books" element={<h1>Extra content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            {/* La dif entre navlink y link, es que navlink te permite hacer estas cosas 
              Nota: Si no ponemos estilos o cosas por el estilo y lo usamos por default
              <NavLink to="/">Home</NavLink>

              la clase de active se la va a agregar de todas formas
            */}
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
            >
              {/* Esto solo se puede hacer con el navlink tmb */}
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="newBook" element={<NewBook />} />
        </Route>

        {/* 
          Esta es otra forma de usar las rutas, las haces en un componente aparte
          y para asegurarte que funcione, tenes q agregar el /* al final
          <Route path="/books/*" element={<BooksRoutes />} /> 
        */}

        {/* 
          Rutas simples
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} /> 
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
