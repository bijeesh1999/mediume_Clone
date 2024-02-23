import BlogForm from './components/blogForm/blogForm';
import Footer from './components/footer';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './components/user/userSignUp';
import Login from './components/user/userLogin';
import BlogList from './components/blog/blogList';
import SingleBlog from './components/blog/singleBlog';
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form" element={<BlogForm />} />
        <Route path='/userSignUp' element={<Signup />} />
        <Route path='/userLogin' element={<Login />} />
        <Route path='/BlogList' element={<BlogList />} />
        <Route path='/singleBlog/:id' element={<SingleBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
