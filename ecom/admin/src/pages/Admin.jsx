import AddProduct from '../components/AddProduct'
import Sidebar from '../components/Sidebar'
import ListProduct from '../components/ListProduct'
import {Route, Routes} from 'react-router-dom'

const Admin = () => {
  return (
    <div className='lg:flex'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin