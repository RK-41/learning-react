import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<>
			<nav className='flex justify-between items-center h-16 bg-slate-300 drop-shadow-xl shadow-black font-bold'>
				<div className='mx-4'>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-[#0000ff]' : ''
						}
					>
						icon
					</NavLink>
				</div>

				<div className='flex gap-4 mx-4'>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-[#0000ff]' : ''
						}
					>
						Home
					</NavLink>
					<NavLink
						to='about'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-[#0000ff]' : ''
						}
					>
						About
					</NavLink>
					<NavLink
						to='contact'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-[#0000ff]' : ''
						}
					>
						Contact
					</NavLink>
					<NavLink
						to='github'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-[#0000ff]' : ''
						}
					>
						GitHub
					</NavLink>
					<NavLink
						to='user'
						className={({ isActive, isPending }) =>
							isPending ? 'text-yellow-500' : isActive ? 'text-[#0000ff]' : ''
						}
					>
						User
					</NavLink>
				</div>
			</nav>
		</>
	);
}

export default Header;
