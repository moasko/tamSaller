import type { FC } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { MdAddShoppingCart } from 'react-icons/md'
import { Checkbox } from "@/components/ui/checkbox"
import { BsSend } from 'react-icons/bs'
import { BiImageAdd } from 'react-icons/bi'

import { Textarea } from "@/components/ui/textarea"
interface NewSubjectModalProps { }

const NewSubjectModal: FC<NewSubjectModalProps> = ({ }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div onClick={() => console.log('ghjk')} className='w-full h-16 rounded-sm bg-slate-100 flex items-center px-3'>
                    <p className='text-lg text-slate-300'>Vous êtes à la recherche d’un produit ou service ?
                        Exprimez vous !</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className='flex items-center space-x-2'>
                            <MdAddShoppingCart color='gray' size={30} />
                            <div>
                                <h2>Ouvrir une nouvelle demande</h2>
                                <p className='text-sm text-slate-600 font-normal'>Faite une demande de produit services</p>
                            </div>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <div className='space-y-4'>
                    <div className='flex py-2 px-4 rounded-md bg-green-100 w-max'>
                        <BiImageAdd color='green' size={25} />
                        <span>Photo</span>
                    </div>
                    <Textarea className='text-lg h-64 bg-slate-100' placeholder='Votre requette ici ...' />
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Me contacter via whatsapp
                        </label>
                    </div>
                    <Button className='space-x-3' size="lg">
                        <BsSend />
                        <span>Publier</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
export default NewSubjectModal;