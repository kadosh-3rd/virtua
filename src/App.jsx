import { Link, Route, Routes } from 'react-router-dom';

import Intro from './pages/Intro';
import CloudComputing from './pages/CloudComputing';
import Virtualization from './pages/Virtualization';
import VirtualCompanies from './pages/VirtualCompanies';
import VirtualSoftwares from './pages/VirtualSoftwares';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Outro from './pages/Outro';

import Cloud from './assets/cloud_arch.png';

import Navbar from './components/Navbar';

export default function App() {
	return (
		<>
			<Navbar />
			<main className='w-[75%] m-auto p-10'>
				<Routes>
					<Route
						index
						element={
							<>
								<div className='w-full bg-white rounded-lg p-6 pb-8 mt-2'>
									<div className='title border border-gray-400 rounded-sm mb-16 p-12 pt-2 flex flex-col'>
										<span className='text-3xl font-bold underline mb-12'>
											Thème :
										</span>
										<h1 className='text-3xl font-extrabold text-center italic text-gray-800'>
											VIRTUALIZATION & CLOUD COMPUTING : Logiciels, Concepteurs
											& Approfondissement
										</h1>
										<img src={Cloud} alt='cloud' className='rounded-md mt-12' />
									</div>
									<div className='subtitles flex justify-between items-center relative bottom-0 left-0'>
										<div className='flex justify-between items-center'>
											<h2 className='font-bold underline pr-2'>Enseignant :</h2>
											<p>M. Daniel AKWE</p>
										</div>
										<div className='flex justify-between items-center'>
											<h2 className='font-bold underline pr-2'>
												Année Académique :
											</h2>
											<p>2022 / 2023</p>
										</div>
									</div>
								</div>

								<div className='w-full bg-white text-gray-900 rounded-lg p-4 pb-8 mt-12'>
									<div className='title px-10 pt-3 pb-3 flex flex-col'>
										<h1 className='text-3xl font-bold underline'>SOMMAIRE</h1>
									</div>
									<div className='title p-10 pt-2'>
										<Link to={'/intro'} className='hover:underline'>
											<h1 className='text-3xl font-bold text-center'>
												Introduction
											</h1>
										</Link>
									</div>
									<div className='subtitles'>
										<ul className='text-2xl'>
											<li className='w-[50%] relative left-[20%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
												<Link to={'/vm'}>I. Virtualisation</Link>
											</li>
											<li className='w-[50%] relative left-[50%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
												<Link to={'/softwares'}>
													II. Logiciels de virtualisation
												</Link>
											</li>
											<li className='w-[50%] relative left-[20%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
												<Link to={'/cloud'}>III. Cloud Computing</Link>
											</li>
											<li className='w-[50%] relative left-[50%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
												<Link to={'/companies'}>IV. Entreprises</Link>
											</li>
											<li className='w-[50%] relative left-[20%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
												<Link to={'/thanks'}>V. Sources</Link>
											</li>
										</ul>
									</div>
									<div className='title px-6 pt-12 pb-3'>
										<Link to={'/outro'} className='hover:underline'>
											<h1 className='text-3xl font-bold text-center'>
												Conclusion
											</h1>
										</Link>
									</div>
								</div>
							</>
						}
					/>
					<Route path='/intro' element={<Intro />} />
					<Route path='/vm' element={<Virtualization />} />
					<Route path='/cloud' element={<CloudComputing />} />
					<Route path='/companies' element={<VirtualCompanies />} />
					<Route path='/softwares' element={<VirtualSoftwares />} />
					<Route path='/signIn' element={<SignIn />} />
					<Route path='/signUp' element={<SignUp />} />
					<Route path='/outro' element={<Outro />} />
				</Routes>
			</main>
		</>
	);
}
