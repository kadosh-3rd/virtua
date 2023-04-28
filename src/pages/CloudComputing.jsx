function CloudComputing() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline mb-10 text-center'>
				CloudComputing
			</h1>
			<div className='content'>
				<div className='p-4 mt-5'>
					<p>
						In Simplest terms, cloud computing means storing and accessing the
						data and programs on remote servers that are hosted on the internet
						instead of the computer’s hard drive or local server. Cloud
						computing is also referred to as Internet-based computing.
					</p>
					<br />
					<p>Ils comptent plusieurs avantages tels que :</p>
					<ul>
						<li className='p-4'>
							<strong>Scalability :</strong> With Cloud hosting, it is easy to
							grow and shrink the number and size of servers based on the need.
							This is done by either increasing or decreasing the resources in
							the cloud. This ability to alter plans due to fluctuation in
							business size and needs is a superb benefit of cloud computing,
							especially when experiencing a sudden growth in demand.
						</li>
						<li className='p-4'>
							<strong>Instant :</strong> Whatever you want is instantly
							available in the cloud.
						</li>
						<li className='p-4'>
							<strong>Save money :</strong> An advantage of cloud computing is
							the reduction in hardware costs. Instead of purchasing in-house
							equipment, hardware needs are left to the vendor. For companies
							that are growing rapidly, new hardware can be large, expensive,
							and inconvenient. Cloud computing alleviates these issues because
							resources can be acquired quickly and easily. Even better, the
							cost of repairing or replacing equipment is passed to the vendors.
							Along with purchase costs, off-site hardware cuts internal power
							costs and saves space. Large data centers can take up precious
							office space and produce a large amount of heat. Moving to cloud
							applications or storage can help maximize space and significantly
							cut energy expenditures.
						</li>
						<li className='p-4'>
							<strong>Reliability : </strong> Rather than being hosted on one
							single instance of a physical server, hosting is delivered on a
							virtual partition that draws its resource, such as disk space,
							from an extensive network of underlying physical servers. If one
							server goes offline it will have no effect on availability, as the
							virtual servers will continue to pull resources from the remaining
							network of servers.
						</li>
						<li className='p-4'>
							<strong>Physical Security : </strong> The underlying physical
							servers are still housed within data centers and so benefit from
							the security measures that those facilities implement to prevent
							people from accessing or disrupting them on-site.
						</li>
						<li className='p-4'>
							<strong>Outsource Management : </strong> When you are managing the
							business, Someone else manages your computing infrastructure. You
							do not need to worry about management as well as upgradation.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CloudComputing;
