"use client"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export const BackButon = ({linkToRoute}:{linkToRoute:string})=>{
    return(
        <div className="w-[200px] bg-blue-600 rounded-lg p-2  hover:bg-blue-500">
            <Link href={linkToRoute}>
                <div className="flex justify-center w-full items-center">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-white mr-5"/>
                    <h1 className=" text-white text-center" >Back</h1>
                </div>
            </Link>
        </div>
    )
}

export default BackButon;