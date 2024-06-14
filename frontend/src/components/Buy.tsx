import useForm from "../hooks/useForm";
import { useReadContract, useWriteContract } from "wagmi";
import { contract } from "../abis/indexToken";
import { useUi } from "../main";
import { ethers } from "ethers";

type FormData = {
  amount: number;
  description: string;
};

export default function Register() {
  const { showNotification } = useUi();
  const { writeContract } = useWriteContract();

  const { data, error, isFetched, isFetching, isLoading, status } =
    useReadContract({
      abi: contract.abi,
      address: contract.address as any,
      functionName: "calculateIndexPrice",
    });

  console.log({ data, error, isFetched, isFetching, isLoading, status });

  const { form, keys, handleChange, handleFormSubmit, formRef } =
    useForm<FormData>({
      amount: 1,
      description: "",
    });

  const price = data ? parseFloat(data.toString()) : 0;

  const formattedPrice = data ? `${price} CEUR` : "Loading price...";
  const formattedAmount = data
    ? `${form.amount / price} GMB`
    : "Loading price...";

  async function buyIndexToken(data: FormData) {
    const amountInWei = ethers.parseEther("0.01");

    writeContract(
      {
        abi: contract.abi,
        address: contract.address as any,
        functionName: "buyIndexToken",
        args: [amountInWei],
      },
      {
        onSuccess: (address) => {
          console.log("success", address);
        },
        onSettled: (address) => {
          console.log("settled", address);
        },
        onError: (e) => {
          console.log({ name: e.name, message: e.message, stack: e.stack });
          showNotification("Something went wrong");
        },
      }
    );
  }

  return (
    <div className="w-full mt-32 max-w-lg mx-auto">
      <form
        className="flex flex-col gap-5"
        ref={formRef}
        onSubmit={handleFormSubmit(buyIndexToken)}
      >
        <h1 className="text-gray-900 uppercase text-5xl md:text-6xl xl:text-7xl">
          Buy $GameB Index
        </h1>
        <fieldset>
          <label className="block mb-5">
            <span className="block mb-2">Amount in cEUR</span>
            <div className="relative">
              <input
                placeholder="Please enter amount"
                className="block w-full bg-lime-200 rounded-md text-2xl border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-lime-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-300  sm:leading-6"
                type="number"
                min={1}
                step={1}
                name={keys.amount}
                autoComplete="organization"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </div>
          </label>
        </fieldset>
        <div className="grid grid-cols-2 gap-2">
          <div>Price per GMB</div>
          <div>{formattedPrice}</div>
          <div>You will recieve</div>
          <div>{formattedAmount}</div>
        </div>
        <button
          className="bg-black font-mono text-white font-bold py-4 px-5 rounded"
          type="submit"
        >
          Buy Now
        </button>
      </form>
    </div>
  );
}
