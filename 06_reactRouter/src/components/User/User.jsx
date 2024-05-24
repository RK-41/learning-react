import { useParams } from 'react-router-dom';

function User() {
	const { userid } = useParams();

	return (
		<div>
			<div className='page-heading'>User</div>
			{userid && <h3>User ID: {userid}</h3>}
		</div>
	);
}

export default User;
