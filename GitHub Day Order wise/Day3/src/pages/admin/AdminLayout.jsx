import PropTypes from 'prop-types'
import '../../assets/css/admin.css'
import SideBar from '../../components/ui/admin/SideBar'
import Footer from '../../components/Footer'
const AdminLayout = ({children}) => {
  return (
    <div className="admin_container">
      <aside>
        <SideBar/>
      </aside>
      <main>
        {children}
      </main>
      <footer>
        {/* <Footer/> */}
      </footer>
    </div>
  )
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminLayout
