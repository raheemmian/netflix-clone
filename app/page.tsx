
import { Button } from "@/components/ui/button"
import { 
  ChevronRight, 
  Play,
  Plus,
  ThumbsUp,
  ChevronDown,
  LucideIcon

} from "lucide-react"
import Image from "next/image"

function Videobuttons({Icon, color}: any) {
  const color_style = color ? "bg-white" : "bg-zinc-900"
  const color_icon = !color ? "#FFF" : "#000"
  return (
    <Button className={`rounded-full border-white ${color_style}`} variant="outline" size="icon">
      <Icon className="h-4 w-4 " color={`${color_icon}`}/>
    </Button>
  )
}


export default function Dashboard() {

  return (
    <div className="flex flex-col w-80">
      <div>
        <Image 
          src="/samurai.jpeg"
          width={500}
          height={500}
          className="w-80"
          alt="Picture of the author"
        />
      </div>
      <div className="bg-zinc-900">
        <div className="flex flex-row justify-between pt-4 w-80">
          <div className="flex space-x-2 ml-4">
            <Videobuttons Icon={Play} color={true}/>
            <Videobuttons Icon={Plus} color={false}/>
            <Videobuttons Icon={ThumbsUp} color={false}/>
          </div>
          <div className="mr-4">
            <Videobuttons Icon={ChevronDown} color={false}/>
          </div>
        </div>
        <div className="mt-6 ml-3 text-white">
            <div className="inline-block p-2 border-2 border-solid">TV-MA</div>
            <div className="inline-block m-2"> 8 Episodes</div>
            <div className="inline-block px-1 border-2 rounded border-solid">HD</div>
            <div className="my-3">
              <p> Violent &#8226; Action &#8226; Visually Striking </p>
            </div>
        </div>
      </div>
   </div>
  )
}



