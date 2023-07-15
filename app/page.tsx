"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { useRouter } from "next/navigation"



export default function Home() {
const router = useRouter()
  return (
    <main className='w-full flex justify-center items-center relative h-screen'>
      <div className="p-10 bg-white rounded-lg space-y-10">
        <h1 className="text-2xl font-bold">Seconnecter</h1>

        <div className=" space-y-8">
          <Input className="min-w-[360px] p-6" placeholder="Votre numéro de téléphone" />
          <Input className="min-w-[360px] p-6" placeholder="Votre mot de passe" />
          <div className="flex items-center w-full justify-between">
              <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Rester connecter</Label>
          </div>
          <Link className="text-sm text-blue-700" href={"#"}>Mot de passe oublié ?</Link>
          </div>
        
          <Button onClick={()=>router.push("/forum")} className="w-full p-6">se connecter</Button>
        </div>
      </div>
    </main>
  )
}
