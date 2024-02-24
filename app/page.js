"use client";
import { useState, useEffect } from "react";
import crypto from "crypto";
export default function Home() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [method, setMethod] = useState("sha1");
  let hash_methods = crypto.getHashes();

  useEffect(() => {
    try {
      let hashPwd = crypto.createHash(method).update(text).digest("hex");
      setHash(hashPwd);
    } catch (error) {
      setHash("something went wrong");
    }
    if (text == "") {
      setHash("");
    }
  }, [text, method]);

  return (
    <div className="flex items-center justify-center w-full h-screen  bg-gradient-to-br from-black to-gray-700 ">
      <div className="fixed max-w-3xl w-full  glass rounded-2xl p-4 text-white mx-3">
        <div>
          <label for="inputname" class="block font-semibold text-base">
            Input a string to calculate the hash
          </label>
          <div class="mt-2">
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              name="inputname"
              class="block bg-white rounded-lg py-1 px-3 focus:outline-none border-2 border-gray-600 focus:border-black w-full ring-black text-black"
            />{" "}
            <select
              id="countries"
              onChange={(e) => {
                setMethod(e.target.value);
              }}
              className="py-1 px-3 text-black bg-white rounded-lg text-sm w-full mt-1"
            >
              {hash_methods.map((hash) => {
                return (
                  <option value={hash} key={hash}>
                    {hash}
                  </option>
                );
              })}
            </select>
          </div>

          <label class="pt-1 block opacity-75 text-white text-sm">
            Some Description
          </label>
        </div>
        {/* <button className="submit_button w-full mt-6">
          <span class="button_top py-2 "> Calculate HASH</span>
        </button> */}
        <div className="bg-gray-950  text-gray-100 font-bold text-sm rounded-md min-h-40 mt-6 relative p-4">
          <button className="copy_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
              />
            </svg>
          </button>
          <textarea
            disabled
            className="  text pr-4 bg-transparent w-full h-full"
            value={hash}
          ></textarea>
        </div>
        <div></div>
      </div>
    </div>
  );
}
