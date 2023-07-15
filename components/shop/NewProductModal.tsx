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
interface NewProductModalProps { }

const NewProductModal: FC<NewProductModalProps> = ({ }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div onClick={() => console.log('ghjk')} className='w-full h-16 rounded-sm bg-slate-100 flex items-center px-3'>
                    <p className='text-lg text-slate-300'>Vous proposez un produit ou service ?
                        Exprimez vous !</p>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className='flex items-center space-x-2'>
                            <MdAddShoppingCart color='gray' size={30} />
                            <div>
                                <h2>Ajouter un article</h2>
                                <p className='text-sm text-slate-600 font-normal'>Proposez vos produits ou services</p>
                            </div>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <div className='space-y-4'>
                  <div className='w-full h-36 rounded-lg bg-cyan-200 border border-green-600 border-dashed border-3'></div>
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
export default NewProductModal;