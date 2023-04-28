function Virtualization() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline mb-10 text-center'>
				Virtualization
			</h1>
			<div className='content'>
				<div className='border border-blue-400 p-4 mt-5'>
					<h1 className='font-bold underline text-xl mb-3'>
						Qu'est-ce que la virtualisation ?
					</h1>
					<p>
						Parlant de virtualisation, il s’agit d’un mécanisme permettant de
						faire fonctionner plusieurs machines virtuelles à l’aide d’une seule
						machine physique. Procédé qui permet de créer plusieurs
						environnements simulés en utilisant le logiciel dans une seule
						machine matérielle physique. Il existe différents types de
						virtualisation, tels que la virtualisation de réseau, la
						virtualisation de stockage, la virtualisation de serveur, la
						virtualisation de logiciel.
					</p>
					<br />
					<p>
						L’utilisation de plusieurs systèmes d’exploitation sur un seul
						matériel sans redémarrage est un exemple de virtualisation. L’autre
						utilisation générale de la virtualisation est l’application en nuage
						(Cloud Application).
					</p>
				</div>

				<div className='border border-blue-400 p-4 mt-10'>
					<h1 className='font-bold underline text-xl mb-3'>
						Qu'est-ce qu'une machine virtuelle ?
					</h1>
					<p>
						Une machine virtuelle (VM) est un environnement logiciel qui émule
						un système informatique. Elle facilite le remplacement d’une machine
						réelle. Elle imite les architectures informatiques et offre les
						mêmes fonctionnalités qu’un ordinateur physique.
					</p>
					<br />
					<p>
						Les VMs résolvent les problèmes auxquels de nombreuses entreprises
						sont confrontées en raison des avancées technologiques tant au
						niveau du matériel que des logiciels. Différents logiciels peuvent
						entrer en conflit et provoquer des plantages, des gels et d’autres
						problèmes. Un logiciel VM est un logiciel qui permet à différents
						logiciels de fonctionner parfaitement ensemble sous le même système
						d’exploitation.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Virtualization;
