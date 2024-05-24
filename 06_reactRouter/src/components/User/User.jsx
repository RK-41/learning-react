import { useParams } from 'react-router-dom';

function User() {
	const { userid } = useParams();

	return (
		<div>
			<div className='page-heading'>User</div>

			<div className='text-center my-10 font-bold'>
				{userid && <h3>User ID: {userid}</h3>}
			</div>
		</div>
	);
}

export default User;
