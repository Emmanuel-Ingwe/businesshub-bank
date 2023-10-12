import React from 'react'
import Benefits from './Benefits'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <section className="grid grid-cols-2 gap-3">
            <Benefits />
            <div>index</div>
        </section>
    </>
  )
}

export default index