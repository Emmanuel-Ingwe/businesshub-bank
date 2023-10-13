import React from 'react'
import Benefits from './Benefits'
import Image from 'next/image'
import Button from '../../global/Button'

type Props = {}

const index = (props: Props) => {
    type data = {
		title: "string"
	}

	const data = [
    {
      title: "Basic Business support",
		},
    {
      title: "Custom Business support",
		},
    {
      title: "View Status",
		},
	  ];

      const dataa = [
        {
          title: "Business Name",
          para0: "Business Name Registration", 
          para1: "TIN Registration", 
          para2: "Zero AMF for up to 3 years", 
          para3: "Search Report", 
          para4: "Open an Account", 
          image: "/Images/NGR.png",
          figure: "23,000",
          button: <Button label='CHOOSE' />,
            },
        {
          title: "Limited Liability",
          para0: "Register a Limited Liability Company", 
          para1: "TIN Registration", 
          para2: "Zero AMF for up to 3 years", 
          para3: "Search Report", 
          para4: "Open an Account", 
          image: "/Images/NGR.png",
          figure: "47,000",
          button: <Button label='CHOOSE' />,
            },
        {
          title: "Incoporrated Trustee",
          para0: "Business Name Registration", 
          para1: "TIN Registration", 
          para2: "Zero AMF for up to 3 years", 
          para3: "Search Report", 
          para4: "Open an Account", 
          image: "/Images/NGR.png",
          figure: "150,000",
          button: <Button label='CHOOSE' />,
            },
          ];

  return (
    <>
        <section className="flex">
            <Benefits />
            <>
                <section className="flex flex-col m-[49px] w-[728px]">
                    <div className="flex border-b">
                        {data.map ((item) => (
                            <div className="flex items-center justify-center border rounded-tr rounded-tl hover:bg-deepbrown border-t-secondary border-l-secondary border-r-secondary mr-[11px] w-[222px] h-[46px]">
                                <h1 className=" text-secondary">{item.title}</h1>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[49px] flex items-center">
                      {dataa.map((item) => (
                         <div className="">
                          <div className="flex justify-between border-b">
                            <h3 className="">{item.title}</h3>
                            <input type="checkbox" />
                          </div>
                          <div className="flex">
                            <Image
                                alt=""
                                height={14}
                                width={14}
                                src="/Images/check.png"
                            />
                            <p className=""></p>
                          </div>
                         </div>  
                      ))}
                    </div>
                </section>
            </>
        </section>
    </>
  )
}

export default index