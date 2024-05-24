import { Link, useLoaderData } from 'react-router-dom';

function GitHub() {
	const data = useLoaderData();
	// console.log(data);

	return (
		<div>
			<div className='page-heading'>GitHub</div>

			<section className='my-10 flex gap-10 justify-center flex-wrap'>
				<div className='max-w-[50%] rounded-xl overflow-hidden shadow-xl'>
					<img src={data.avatar_url} alt='user image' className='w-[200px]' />
				</div>

				<div className='max-w-[50%] py-2 flex flex-col justify-end gap-2 font-bold'>
					<h3>Name: {data.name}</h3>
					<p>On GitHub since {data.created_at.substring(0, 10)}</p>
					<p>Public Repositories: {data.public_repos}</p>
					<Link to={data.html_url} target='_blank' className='text-[#0000ff]'>
						GitHub Profile Link
					</Link>
				</div>
			</section>
		</div>
	);
}

export default GitHub;

export const githubInfoLoader = async () => {
	const res = await fetch('https://api.github.com/users/RK-41');

	return res.json();
};
