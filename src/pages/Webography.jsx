import { Link } from 'react-router-dom';

function Webography() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline mb-10 text-center'>
				Webography
			</h1>
			<div className='content'>
				<ul className='text-2xl list-decimal pl-8'>
					<li className='py-3 decoration-cyan-600 hover:underline text-cyan-600'>
						<Link
							to={'https://logicielfr.com/blog/logiciels-vm-virtualisation/'}
							target='blank'
						>
							https://logicielfr.com/blog/logiciels-vm-virtualisation/
						</Link>
					</li>
					<li className='py-3 decoration-cyan-600 hover:underline text-cyan-600'>
						<Link
							to={'https://techpourpc.com/logiciel-de-virtualisation-gratuit/'}
							target='blank'
						>
							https://techpourpc.com/logiciel-de-virtualisation-gratuit/
						</Link>
					</li>
					<li className='py-3 decoration-cyan-600 hover:underline text-cyan-600'>
						<Link
							to={
								'https://www.ionos.fr/digitalguide/serveur/configuration/comparatif-des-meilleurs-logiciels-de-virtualisation/'
							}
							target='blank'
						>
							https://www.ionos.fr/digitalguide/serveur/configuration/comparatif-des-meilleurs-logiciels-de-virtualisation/
						</Link>
					</li>
					<li className='py-3 decoration-cyan-600 hover:underline text-cyan-600'>
						<Link
							to={'https://www.geeksforgeeks.org/cloud-computing/'}
							target='blank'
						>
							https://www.geeksforgeeks.org/cloud-computing/
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Webography;
