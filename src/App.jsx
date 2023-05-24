import { Suspense, lazy } from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import Intro from './pages/Intro';
import Virtualization from './pages/Virtualization';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Outro from './pages/Outro';
import Webography from './pages/Webography';

import Cloud from './assets/cloud_arch.png';

import Navbar from './components/Navbar';

const CloudComputing = lazy(() => import('./pages/CloudComputing'));
const VirtualCompanies = lazy(() => import('./pages/VirtualCompanies'));
const VirtualSoftwares = lazy(() => import('./pages/VirtualSoftwares'));

export default function App() {
	return (
		<>
			<Navbar />
			<main className='w-[75%] m-auto p-10'>
				<Suspense
					fallback={
						<div className='bg-white text-center p-10 w-1/4 m-auto'>
							<span>Lazy loading...</span>
						</div>
					}
				>
					<Routes>
						<Route
							index
							element={
								<>
									<div className='w-full bg-white rounded-lg p-6 pb-8 mt-2'>
										<div className='title border border-gray-400 rounded-sm mb-10 lg:mb-16 p-12 pt-2 flex flex-col'>
											<span className='text-[24px] md:text-2xl lg:text-3xl font-semibold lg:font-bold underline mb-10 lg:mb-12 mt-5 text-gray-800'>
												Thème :
											</span>
											<h1 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-center italic text-gray-800'>
												VIRTUALIZATION & CLOUD COMPUTING : Logiciels,
												Concepteurs & Approfondissement
											</h1>
											<img
												src={Cloud}
												alt='cloud'
												className='rounded-md mt-12'
											/>
										</div>
										<div className='subtitles flex flex-col lg:flex-row justify-between place-items-start lg:items-center relative bottom-0 left-0'>
											<div className='flex justify-between items-center pb-2'>
												<h2 className='font-bold underline pr-2'>
													Enseignant :
												</h2>
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
											<h1 className='text-xl md:text-2xl lg:text-3xl font-bold underline'>
												SOMMAIRE
											</h1>
										</div>
										<div className='title p-6 lg:p-10 pt-6 lg:pt-2'>
											<Link to={'/intro'} className='hover:underline'>
												<h1 className='text-2xl lg:text-3xl font-bold text-center'>
													Introduction
												</h1>
											</Link>
										</div>
										<div className='subtitles'>
											<ul className='text-lg md:text-xl lg:text-2xl'>
												<li className='w-[50%] relative left-[20%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
													<Link to={'/vm'}>I. Virtualisation</Link>
												</li>
												<li className='w-[50%] relative left-[50%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
													<Link to={'/softwares'}>
														II. Logiciels de virtualisation
													</Link>
												</li>
												<li className='w-[50%] relative left-[20%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
													<Link to={'/companies'}>III. Entreprises</Link>
												</li>
												<li className='w-[50%] relative left-[50%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
													<Link to={'/cloud'}>IV. Cloud Computing</Link>
												</li>
												<li className='w-[50%] relative left-[20%] py-3 decoration-cyan-600 hover:underline text-cyan-600'>
													<Link to={'/src'}>V. Sources</Link>
												</li>
											</ul>
										</div>
										<div className='title px-6 pt-8 lg:pt-12 pb-3'>
											<Link to={'/outro'} className='hover:underline'>
												<h1 className='text-2xl lg:text-3xl font-bold text-center'>
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
						<Route path='/src' element={<Webography />} />
					</Routes>
				</Suspense>
			</main>
		</>
	);
}
