import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#D5E1EF]">
      <div className="border p-2.5 flex flex-col items-center rounded-xl bg-white  max-w-[375px] gap-4">
        <Image
          src="/image-qr-code.png"
          alt="QR code"
          width={350}
          height={300}
          className="rounded-xl"
        />
        <h1 className="text-slate-900 font-bold text-center text-[20px]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px] text-slate-500 text-center pb-3 ">
          Scan the QR code to visit Front-end Mentor and take your skills to the
          next level
        </p>
      </div>
    </main>
  );
}
