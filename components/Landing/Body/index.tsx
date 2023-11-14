import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SubBody } from '../..'

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
      title: "Dashboard",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
    {
      title: "Business",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
    {
      title: "Loans",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
    {
      title: "Store",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
    {
      title: "Payments",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
    {
      title: "Banking",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
    {
      title: "Settings",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
    {
      title: "Help Center",
      iconsrc: "/images/mail.svg",
      link: "/",
    },
  ];

  return (
    <>
      <section className="flex absolute">
        <div className="h relative h-screen justify-center items-center w-[235px] bg-navbg pl-[12px] pt-[26px] z-10">
          {data.map((item, index) => (
            <div className="flex w-[210px] bg-navcolor hover:bg-brown p-[10px] rounded items-start pl-[30px] mb-[9px]">
              <Link href={item.link} className="flex" >
                <Image
                  alt=""
                  height={23}
                  width={23}
                  src={item.iconsrc}
                />
                <h2 className='pl-[16.6px]'>{item.title}</h2>
              </Link>
            </div>
          ))}
        </div>
        <SubBody />
      </section>
    </>
  )
}

export default Body