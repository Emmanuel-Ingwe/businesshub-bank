import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {

	type data = {
		iconsrc: "string"
	}

	const data = [
		{
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
		{
			iconsrc: "/images/frame.svg",
			link: "/",
		  },
		  {
			iconsrc: "/images/mail.svg",
			link: "/",
		  },
	  ];

	return (
		<>
			<nav className='flex items-center bg-navbg z-50 top-0 w-full border-b'>
					<div className="flex">
						<Link href='/' passHref className="h-[100%]">
							<Image width={235} height={72}
								src="/images/logoo.svg"
								alt=""
							/>
						</Link>
					</div>

					<div className="flex w-full items-center justify-between">
						<div className="flex pl-[59px]">
							<Image
								alt=""
								height={22}
								width={23}
								src="/images/smiley.png"
							/>
							<h1 className=" text-secondary text-[15px] pl-1">Hello, <span className="font-semibold">Bolaji</span></h1>
						</div>

						<div className="pr-[117px] flex">
							<div className="flex pr-4">
								{data.map((item, index) => (
										<Link href={item.link} className="pr-4" >
											<Image
												alt=""
												height={23}
												width={23}
												src={item.iconsrc}
											/>
										</Link>
								))}
							</div>

							<div className="flex">
								<Image
									alt=""
									height={22}
									width={23}
									src="/images/smiley.png"
								/>
								<h1 className="">Bolaji</h1>
								<Image
									alt=""
									height={22}
									width={23}
									src="/images/chevron-down.svg"
								/>
							</div>
						</div>
					</div>
			</nav>
		</>
	);
};

export default Navigation;

