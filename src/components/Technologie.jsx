import {RiReactjsLine} from "react-icons/ri";
const Technologie = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Techno<span className="text-neutral-500">Logies</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-4xl text-teal-600"/>
        </div>
      </div>
    </div>
  )
}

export default Technologie