function VirtualCompanies() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline my-10 text-center'>
				Companies working on Virtualization
			</h1>
			<img
				src='https://th.bing.com/th/id/R.6358ec492a6d7886cd33c399a99e3f34?rik=TVGDpTw%2fATjDEA&pid=ImgRaw&r=0'
				alt='Companies working on building cloud computing'
				className='rounded-lg m-auto'
			/>
			<div className='content'>
				<div className='p-4 mt-5'>
					<p>
						There's a lot of companies working on the development and growing of
						cloud computing and virtualization.
					</p>
					<br />
					<p>Let's have a talk about :</p>
					<ul className='list-disc pl-8'>
						<li className='p-4'>
							<strong>Amazon Web Services(AWS):</strong> One of the most
							successful cloud-based businesses is Amazon Web Services(AWS),
							which is an Infrastructure as a Service(Iaas) offering that pays
							rent for virtual computers on Amazon’s infrastructure.
						</li>
						<li className='p-4'>
							<strong>Microsoft Azure Platform:</strong> Microsoft is creating
							the Azure platform which enables the .NET Framework Application to
							run over the internet as an alternative platform for Microsoft
							developers. This is the classic Platform as a Service(PaaS).
						</li>
						<li className='p-4'>
							<strong>Google:</strong> Google has built a worldwide network of
							data centers to service its search engine. From this service,
							Google has captured the world’s advertising revenue. By using that
							revenue, Google offers free software to users based on
							infrastructure. This is called Software as a Service(SaaS).
						</li>
						<li className='p-4'>
							<strong>IBM Cloud</strong> is a collection of cloud computing
							services for business provided by the IBM Corporation. It provides
							infrastructure as a service, software as a service, and platform
							as a service.
						</li>
						<li className='p-4'>
							<strong>Oracle Cloud</strong> is a collection of cloud services
							offered by Oracle Corporation, including infrastructure as a
							service (IaaS), platform as a service (PaaS), and software as a
							service (SaaS).
						</li>
						<li className='p-4'>
							<strong>Alibaba Cloud</strong> is the cloud computing arm of
							Alibaba Group, providing a comprehensive suite of global cloud
							computing services to power both their international customers’
							online businesses and Alibaba Group’s own e-commerce ecosystem.
						</li>
						<li className='p-4'>
							<strong>Cisco Cloud</strong> – A cloud platform by Cisco, offering
							a range of services including networking, security, and
							application development.
						</li>
						<li className='p-4'>
							<strong>OVH Cloud</strong> – A cloud platform offering a range of
							services including compute, storage, and networking.
						</li>
						<li className='p-4'>
							<strong>VMware Cloud</strong> – A cloud platform by VMware,
							offering services such as virtualization, cloud management, and
							network virtualization.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default VirtualCompanies;
