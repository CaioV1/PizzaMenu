import { Outlet } from "react-router";

import '../../index.css';
import { Footer, Header } from ".."

const AppLayout: React.FC = () => {
  return (
    <div className='container'>
      <Header title="Pizza Menu"/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout;