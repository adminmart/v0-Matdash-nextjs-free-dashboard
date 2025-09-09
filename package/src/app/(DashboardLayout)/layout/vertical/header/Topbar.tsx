"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import adminmart_logo from "/public/images/logos/logo-adminmart.svg";
import { Dropdown } from "flowbite-react/components/Dropdown";
import Link from "next/link";
import Image from "next/image";


const Topbar = () => {
    const dropdownItems = [
        {
            id: 1,
            img: "/images/svgs/next-cat-icon.svg",
            title: "Nextjs Version",
            href: "https://adminmart.com/product/matdash-next-js-admin-dashboard-template/?ref=56#product-demo-section"
        },
        {
            id: 2,
            img: "/images/svgs/angular-cat-icon.svg",
            title: "Angular Version",
            href: "https://adminmart.com/product/matdash-material-angular-dashboard-template/?ref=56#product-demo-section"
        },
        {
            id: 3,
            img: "/images/svgs/vue-cat-icon.svg",
            title: "Vuejs Version",
            href: "https://adminmart.com/product/matdash-vuejs-admin-dashboard/?ref=56#product-demo-section"
        },
        {
            id: 4,
            img: "/images/svgs/nuxt-cat-icon.svg",
            title: "Nuxtjs Version",
            href: "https://adminmart.com/product/matdash-vuetify-nuxt-js-admin-template/?ref=56#product-demo-section"
        },
        {
            id: 5,
            img: "/images/svgs/react-cat-icon.svg",
            title: "React Version",
            href: "https://adminmart.com/product/matdash-tailwind-react-admin-template/?ref=56#product-demo-section"
        },

        {
            id: 6,
            img: "/images/svgs/bt-cat-icon.svg",
            title: "Bootstrap Version",
            href: "https://adminmart.com/product/matdash-bootstrap-5-admin-dashboard-template/?ref=56#product-demo-section"
        },

    ]
    return (
        <div className="py-[15px] px-6 z-40 sticky top-0 bg-[linear-gradient(90deg,_#0f0533_0%,_#1b0a5c_100%)]">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="md:flex hidden items-center gap-5">
                    <Link href="https://adminmart.com/">
                        <Image src={adminmart_logo} alt="data" width={150} />
                    </Link>
                    <div className="xl:flex items-center gap-4 pl-5 border-l border-opacity-20 border-white hidden">
                        <Link target="_black" href="https://adminmart.com/templates/nextjs/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#5d87ff]">
                            <Icon icon="solar:window-frame-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#5d87ff]">Templates</h4>
                        </Link>
                        <Link target="_black" href="https://adminmart.com/support/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#5d87ff]">
                            <Icon icon="solar:question-circle-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#5d87ff]">Help</h4>
                        </Link>
                        <Link target="_black" href="https://adminmart.com/hire-us/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#5d87ff]">
                            <Icon icon="solar:case-round-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#5d87ff]">Hire Us</h4>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                    <h4 className="text-sm text-white uppercase font-semibold bg-[linear-gradient(90deg,_#FFFFFF_0%,_#8D70F8_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]">Checkout Pro Version</h4>
                    <div className="flex flex-col sm:flex-row items-center gap-[10px]">
                        <div className="flex items-center gap-[10px]">
                            <div className="live-preview-drop !rounded-[4px] border border-[#ffffff66] border-1 hover:bg-[#5d87ff]">
                                <Dropdown label={
                                    <p className="text-base text-white font-normal">Live Preview</p>
                                } color="" size="sm" className="py-3 px-4 text-white" >
                                    {
                                        dropdownItems.map((item) => {
                                            return (
                                                <Dropdown.Item key={item.id} className="flex items-center gap-3 text-base text-[#000c29] py-3 px-[18px] group rounded-[4px] hover:bg-[#000c290d] hover:text-[#000c29]" as={Link} href={item.href} target='_blank' icon={() =>
                                                    <img src={item.img} width={18} alt="logo" />}>
                                                    <span className="group-hover:text-[#000c29]" >{item.title}</span>
                                                </Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar 