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
      <section className="h h-screen w-[235px] bg-navbg space-x-[12px]">
        {data.map((item, index) => (
          <div className="flex w-[210px] bg-navcolor rounded items-start justify-center">
            <Link href={item.link} className="flex" >
											<Image
												alt=""
												height={23}
												width={23}
												src={item.iconsrc}
											/>
                      <h2>{item.title}</h2>
						</Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default Body