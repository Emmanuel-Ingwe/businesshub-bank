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

  return (
    <>
        <section className="grid grid-cols-2 gap-1">
            <Benefits />
            <>
                <section className="flex flex-col items-center m-[49px]">
                    <div className="flex border border-b-blac">
                        {data.map ((item) => (
                            <div className="flex items-center border border-t-secondary border-l-secondary border-r-secondary">
                                ss
                            </div>
                        ))}
                    </div>
                    <div className="">
                        ss
                    </div>
                </section>
            </>
        </section>
    </>
  )
}

export default index