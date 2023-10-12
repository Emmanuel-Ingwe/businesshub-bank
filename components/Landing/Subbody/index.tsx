import React from 'react'
import Benefits from './Benefits'

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
            },
        {
          title: "Limited Liability",
            },
        {
          title: "View Status",
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
                    <div className="mt-[49px]">
                        ss
                    </div>
                </section>
            </>
        </section>
    </>
  )
}

export default index