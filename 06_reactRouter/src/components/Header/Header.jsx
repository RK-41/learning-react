import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<>
			<nav className='flex justify-between items-center h-16 bg-slate-300 drop-shadow-xl shadow-black font-bold'>
				<div className='mx-4'>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-blue-800' : ''
						}
					>
						icon
					</NavLink>
				</div>

				<div className='flex gap-4 mx-4'>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-blue-800' : ''
						}
					>
						Home
					</NavLink>
					<NavLink
						to='about'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-blue-800' : ''
						}
					>
						About
					</NavLink>
					<NavLink
						to='contact'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-blue-800' : ''
						}
					>
						Contact
					</NavLink>
				</div>
			</nav>
		</>
	);
}

export default Header;
