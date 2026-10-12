import { siteConfig } from '../data/siteConfig'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi ${siteConfig.name}! I'd like to talk about a photo/video project for my brand.`,
  )
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:pr-5"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0 fill-white">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.26.63 4.372 1.724 6.176L4 29l8.03-1.67A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.8a9.77 9.77 0 0 1-4.98-1.36l-.357-.21-4.76.99.99-4.64-.233-.37A9.76 9.76 0 0 1 5.2 15c0-5.96 4.84-10.8 10.804-10.8S26.8 9.04 26.8 15 21.968 24.8 16.004 24.8Zm5.37-7.35c-.294-.147-1.74-.858-2.01-.956-.27-.098-.467-.147-.664.147-.196.294-.76.956-.932 1.153-.172.196-.344.221-.638.074-.294-.147-1.242-.458-2.366-1.46-.874-.78-1.465-1.744-1.637-2.038-.172-.294-.018-.453.129-.6.133-.132.294-.343.44-.515.148-.172.197-.294.295-.49.098-.196.049-.368-.025-.515-.074-.147-.664-1.6-.91-2.19-.24-.576-.484-.498-.664-.507l-.566-.01c-.196 0-.515.074-.785.368-.27.294-1.03 1.007-1.03 2.455s1.055 2.846 1.202 3.043c.147.196 2.077 3.17 5.033 4.445.703.303 1.252.484 1.68.62.706.224 1.348.192 1.856.117.566-.085 1.74-.712 1.985-1.4.245-.687.245-1.277.172-1.4-.074-.123-.27-.196-.564-.343Z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  )
}
