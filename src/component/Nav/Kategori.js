import React from "react";

export default function Kategori() {
  return (
    <div>
      <div className=" mt-40 ml-20 pr-20">
        <div className="flex">
          {/* tab filter */}
          <div className="w-1/3 bg-[#F1F8FF] py-10 px-7 mr-28 flex flex-col space-y-4 rounded-2xl">
            <p className="font-bold text-4xl">Filter</p>
            <p className="font-bold text-2xl">Harga</p>

            {/* input Minimum */}
            <p className="text-xl text-[#1F1F1F]">Minimum</p>
            <div className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">Rp</span>
              <input className="bg-[#E4F2FF] w-full rounded-lg py-5 pl-9"/>
            </div>

            {/* input Maksimum */}
            <p className="text-xl text-[#1F1F1F]">Maksimum</p>
            <div className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">Rp</span>
              <input className="bg-[#E4F2FF] w-full rounded-lg py-5 pl-9"/>
            </div>

            <p className="text-xl font-semibold text-[#1F1F1F]">Berdasarkan Stok</p>
            <form>
            <input id="draft" class="peer/draft" type="radio" name="status" checked />
            <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>
            <br/>

            <input id="published" class="peer/published" type="radio" name="status" />
            <label for="published" class="peer-checked/published:text-sky-500">Published</label>

            </form>
          </div>
          <div className="bg-slate-400 w-full">
            <p>satunya</p>
          </div>
        </div>
      </div>
    </div>
  );
}
