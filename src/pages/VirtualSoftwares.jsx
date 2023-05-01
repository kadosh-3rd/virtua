import { Link } from 'react-router-dom';

function VirtualSoftwares() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline mb-10 text-center'>
				Virtualization Softwares
			</h1>
			<div className='content'>
				<div className='p-4 mt-5'>
					<h1 className='font-bold underline text-xl mb-3'>
						Logiciels de virtualisation
					</h1>
					<p>
						Il s’agit d’un logiciel qui permet de créer un environnement virtuel
						pour les applications, les ressources et les systèmes
						d’exploitation. Il rend possible la simulation d'un PC avec des
						ressources que nous pouvons leur affecter, par exemple CPU, RAM et
						stockage. Nous pouvons diviser les principales ressources des
						serveurs hyperviseurs en plus petits morceaux pour que les machines
						virtuelles puissent les utiliser.
					</p>
					<br />
					<p>
						Un logiciel de virtualisation dissocie le système d’exploitation du
						matériel sous-jacent. Il devient ainsi possible de diviser de
						puissantes ressources informatiques en unités plus petites. Entre
						autres, les logiciels de virtualisation permettent de faire
						fonctionner plusieurs « machines virtuelles » (VM) sur un même
						serveur physique. Des environnements informatiques évolutifs peuvent
						alors être créés au moyen de grands parcs de serveurs.
					</p>
					<br />
					<p>
						Le logiciel de virtualisation est un prérequis pour les plateformes
						Cloud modernes qui proposent une infrastructure en tant que service
						(IaaS). Les utilisateurs se voient attribuer des ressources
						virtualisées sur simple pression d’un bouton, suivant le principe du
						libre-service. Mais les outils de virtualisation ont un intérêt pour
						les utilisateurs individuels également, car les machines virtuelles
						offrent un environnement de travail reproductible et sûr. Nous avons
						dressé pour vous un comparatif des meilleurs logiciels de
						virtualisation.
					</p>
				</div>

				<div className='p-4 mt-3'>
					<h1 className='font-bold underline text-xl mb-8'>
						Les plus populaires
					</h1>
					<table className='border border-gray-400 mb-5 w-full max-w-full bg-white'>
						<thead>
							<tr>
								<th className='bg-gray-300 border border-gray-400 p-3'>
									Logiciel
								</th>
								<th className='bg-gray-300 border border-gray-400 p-3'>
									Virtualisation
								</th>
								<th className='bg-gray-300 border border-gray-400 p-3'>
									Architecture
								</th>
								<th className='bg-gray-300 border border-gray-400 p-3'>
									OS hôte
								</th>
								<th className='bg-gray-300 border border-gray-400 p-3'>
									OS invité
								</th>
								<th className='bg-gray-300 border border-gray-400 p-3'>Prix</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td
									data-label='Logiciel'
									className='border border-gray-400 text-center'
								>
									<Link
										to='https://techcommunity.microsoft.com/t5/educator-developer-blog/step-by-step-enabling-hyper-v-for-use-on-windows-11/ba-p/3745905'
										target='blank'
										className='hover:underline'
									>
										Microsoft Hyper-V Manager
									</Link>
								</td>
								<td
									data-label='Virtualisation'
									className='border border-gray-400 text-center'
								>
									Hyperviseur natif
								</td>
								<td
									data-label='Architecture'
									className='border border-gray-400 text-center'
								>
									x86-64
								</td>
								<td
									data-label='OS hôte'
									className='border border-gray-400 text-center'
								>
									Windows 64 bits 10 Entreprise/Pro/Education
								</td>
								<td
									data-label='OS invité'
									className='border border-gray-400 text-center'
								>
									Windows et Linux 32 et 64 bits ; à partir de Windows Vista
									(SP2)
								</td>
								<td
									data-label='Prix'
									className='border border-gray-400 text-center'
								>
									Gratuit
								</td>
							</tr>
							<tr className='bg-gray-100'>
								<td
									data-label='Logiciel'
									className='border border-gray-400 text-center'
								>
									<Link
										to={'https://www.vmware.com/'}
										target='blank'
										className='hover:underline'
									>
										VMware Workstation Pro
									</Link>
								</td>
								<td
									data-label='Virtualisation'
									className='border border-gray-400 text-center'
								>
									Hyperviseur hébergé
								</td>
								<td
									data-label='Architecture'
									className='border border-gray-400 text-center'
								>
									x86-64
								</td>
								<td
									data-label='OS hôte'
									className='border border-gray-400 text-center'
								>
									Windows ou Linux 64 bits ; à partir de Windows 8/Windows
									Server 2012
								</td>
								<td
									data-label='OS invité'
									className='border border-gray-400 text-center'
								>
									Windows et Linux 32 et 64 bits ; à partir de Windows XP
								</td>
								<td
									data-label='Prix'
									className='border border-gray-400 text-center'
								>
									Payant
								</td>
							</tr>
							<tr>
								<td
									data-label='Logiciel'
									className='border border-gray-400 text-center'
								>
									<Link
										to={'https://www.vmware.com/'}
										target='blank'
										className='hover:underline'
									>
										VMware Workstation Player
									</Link>
								</td>
								<td
									data-label='Virtualisation'
									className='border border-gray-400 text-center'
								>
									Hyperviseur natif
								</td>
								<td
									data-label='Architecture'
									className='border border-gray-400 text-center'
								>
									x86-64
								</td>
								<td
									data-label='OS hôte'
									className='border border-gray-400 text-center'
								>
									Windows ou Linux 64 bits ; à partir de Windows 8/Windows
									Server 2012
								</td>
								<td
									data-label='OS invité'
									className='border border-gray-400 text-center'
								>
									Windows et Linux 32 et 64 bits ; à partir de Windows XP
								</td>
								<td
									data-label='Prix'
									className='border border-gray-400 text-center'
								>
									Gratuit
								</td>
							</tr>
							<tr className='bg-gray-100'>
								<td
									data-label='Logiciel'
									className='border border-gray-400 text-center'
								>
									<Link
										to={'https://www.virtualbox.org/'}
										target='blank'
										className='hover:underline'
									>
										Oracle VirtualBox
									</Link>
								</td>
								<td
									data-label='Virtualisation'
									className='border border-gray-400 text-center'
								>
									Hyperviseur hébergé
								</td>
								<td
									data-label='Architecture'
									className='border border-gray-400 text-center'
								>
									x86-64
								</td>
								<td
									data-label='OS hôte'
									className='border border-gray-400 text-center'
								>
									Windows ou Linux 64 bits ; à partir de Windows 8.1/Windows
									Server 2012
								</td>
								<td
									data-label='OS invité'
									className='border border-gray-400 text-center'
								>
									Windows et Linux 32 et 64 bits ; à partir de Windows 8,
									versions antérieures avec fonctionnalités limitées
								</td>
								<td
									data-label='Prix'
									className='border border-gray-400 text-center'
								>
									Gratuit
								</td>
							</tr>
							<tr>
								<td
									data-label='Logiciel'
									className='border border-gray-400 text-center'
								>
									<Link
										to={'https://www.parallels.com/fr/products/desktop/'}
										target='blank'
										className='hover:underline'
									>
										Parallels Desktop pour Mac
									</Link>
								</td>
								<td
									data-label='Virtualisation'
									className='border border-gray-400 text-center'
								>
									Hyperviseur hébergé
								</td>
								<td
									data-label='Architecture'
									className='border border-gray-400 text-center'
								>
									x86-64 et ARM (Apple Silicon)
								</td>
								<td
									data-label='OS hôte'
									className='border border-gray-400 text-center'
								>
									macOS 10.13 « High Sierra » jusqu’à 12 « Monterey »
								</td>
								<td
									data-label='OS invité'
									className='border border-gray-400 text-center'
								>
									macOS, Windows et Linux 32 et 64 bits
								</td>
								<td
									data-label='Prix'
									className='border border-gray-400 text-center'
								>
									Payant
								</td>
							</tr>
							<tr className='bg-gray-100'>
								<td
									data-label='Logiciel'
									className='border border-gray-400 text-center'
								>
									<Link
										to={'https://www.qemu.org/download/'}
										target='blank'
										className='hover:underline'
									>
										QEMU
									</Link>
								</td>
								<td
									data-label='Virtualisation'
									className='border border-gray-400 text-center'
								>
									Hyperviseur hébergé et émulateur
								</td>
								<td
									data-label='Architecture'
									className='border border-gray-400 text-center'
								>
									x86, x86-64 PowerPC, ARM, MIPS, RISC-V, SPARC
								</td>
								<td
									data-label='OS hôte'
									className='border border-gray-400 text-center'
								>
									macOS, Windows et Linux 32 et 64 bits
								</td>
								<td
									data-label='OS invité'
									className='border border-gray-400 text-center'
								>
									Windows et Linux 32 et 64 bits
								</td>
								<td
									data-label='Prix'
									className='border border-gray-400 text-center'
								>
									Gratuit
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default VirtualSoftwares;
