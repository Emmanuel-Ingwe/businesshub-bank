import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Body = (props: Props) => {

  type data = {
		iconsrc: "string"
	}

	const data = [
		{
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
    {
      title: "Get Started",
		  iconsrc: "/images/mail.svg",
		  link: "/",
		},
	  ];

  return (
    <>
      <section className="h h-full w-[235px] bg-navbg space-x-[12px]">
        {data.map((item, index) => (
          <div className=" bg-navcolor">
            <Link href={item.link} className="pr-4" >
											<Image
												alt=""
												height={23}
												width={23}
												src={item.iconsrc}
											/>
						</Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default Body