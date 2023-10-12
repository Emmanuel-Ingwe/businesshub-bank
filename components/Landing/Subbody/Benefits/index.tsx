import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Benefits = (props: Props) => {
  return (
    <>
    <section className="flex">
      <div className="h h-screen w-[235px] bg-brownn pl-[16px] pt-[43px]">
        <div className="border-b border-[#768396] box-border w-[166px]">
            <h2 className="font-semibold text-[13px]">Benefits</h2>
        </div>
        <div className="flex mt-[14px]">
            <div className="">
                <Image
                    alt=""
                    height={14}
                    width={14}
                    src="/Images/check.png"
                />
            </div>
            <p className="text-[11px] pl-[7px]">Zero AMF for upto 3 year. (Annual Manintanace Fee)</p>
        </div>
        <div className="flex mt-[14px]">
            <div className="">
                <Image
                    alt=""
                    height={14}
                    width={14}
                    src="/Images/check.png"
                />
            </div>
            <p className="text-[11px] pl-[7px]">Zero AMF for upto 3 year. (Annual Manintanace Fee)</p>
        </div>
        <div className="flex mt-[14px]">
            <div className="">
                <Image
                    alt=""
                    height={14}
                    width={14}
                    src="/Images/check.png"
                />
            </div>
            <p className="text-[11px] pl-[7px]">Zero AMF for upto 3 year. (Annual Manintanace Fee)</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default Benefits