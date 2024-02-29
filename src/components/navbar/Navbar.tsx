import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-purple-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar