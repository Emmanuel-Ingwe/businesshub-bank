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
      image: "/images/NGR.png",
      figure: "150,000",
      button: <Button label='CHOOSE' />,
    },
    {
      title: "Incoporrated Trustee",
      para0: "Business Name Registration",
      para1: "TIN Registration",
      para2: "Zero AMF for up to 3 years",
      para3: "Search Report",
      para4: "Open an Account",
      button: <Button label='Contact Us' className='items-center w-[250px] translate-x-[-90px]' />,
    },
    {
      title: "Incoporrated Trustee",
      para0: "Business Name Registration",
      para1: "TIN Registration",
      para2: "Zero AMF for up to 3 years",
      para3: "Search Report",
      para4: "Open an Account",
      image: "/images/NGR.png",
      figure: "150,000",
      button: <Button label='CHOOSE' />,
    },
  ];

  return (
    <>
      <section className="flex-col flex lg:flex-row w-screen">
        <Benefits />
        <>
          <section className="flex m-[49px] flex-col lg:m- w-[60%]">
            <div className="flex border-b w-[90%]">
              {data.map((item) => (
                <div className="flex items-center justify-center border rounded-tr rounded-tl hover:bg-deepbrown border-t-secondary border-l-secondary border-r-secondary mr-[11px] w-full h-[46px]">
                  <h1 className="text-secondary">{item.title}</h1>
                </div>
              ))}
            </div>

            <div className="grid gap-10 grid-cols-3 mt-[49px]">
              {dataa.map((item) => (
                <div className="pl-[21px] pr-[10px] pt-[21px] rounded-xl pb-[21px] shadow-md">
                  <div className="justify-between pb-[13px] border-b flex items-start">
                    <h3 className="text-[13px] text-secondary font-bold text-">{item.title}</h3>
                    <input
                      type="checkbox"
                      className="rounded-full border text-black appearance-none h-4 w-4 border-opacity-0 checked:bg-[#F8B400] checked:text-white checked:border-transparent focus:outline-none active:bg-brown active:text-white"
                    />
                  </div>
                  <div className="flex pt-[13px] flex-col">
                    <div className="flex pb-[7px] items-center">
                      <div className="pr-[5px]">
                        <Image
                          alt=""
                          height={14}
                          width={14}
                          src="/Images/greencheck.png"
                        />
                      </div>
                      <p className=" text-primary text-[10px]">{item.para0}</p>
                    </div>
                    <div className="flex pb-[7px]">
                      <div className="pr-[5px]">
                        <Image
                          alt=""
                          height={14}
                          width={14}
                          src="/Images/greencheck.png"
                        />
                      </div>
                      <p className=" text-primary text-[10px]">{item.para1}</p>
                    </div>
                    <div className="flex pb-[7px]">
                      <div className="pr-[5px]">
                        <Image
                          alt=""
                          height={14}
                          width={14}
                          src="/Images/greencheck.png"
                        />
                      </div>
                      <p className=" text-primary text-[10px]">{item.para2}</p>
                    </div>
                    <div className="flex pb-[7px]">
                      <div className="pr-[5px]">
                        <Image
                          alt=""
                          height={14}
                          width={14}
                          src="/Images/greencheck.png"
                        />
                      </div>
                      <p className=" text-primary text-[10px]">{item.para3}</p>
                    </div>
                    <div className="flex border-b pb-[13px]">
                      <div className="pr-[5px]">
                        <Image
                          alt=""
                          height={14}
                          width={14}
                          src="/Images/greencheck.png"
                        />
                      </div>
                      <p className="text-primary text-[10px]">{item.para4}</p>
                    </div>
                  </div>
                  <div className="pt-[13px] items-center gap-[37px] flex justify-between">
                    <div className="flex items-center">
                      <div className="pr-2">
                        <Image
                          src={item.image}
                          alt=''
                          width={44}
                          height={14}
                        />
                      </div>
                      <p className="text-[18px] font-[500]">{item.figure}</p>
                    </div>
                    <div className="">
                      {item.button}
                    </div>
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