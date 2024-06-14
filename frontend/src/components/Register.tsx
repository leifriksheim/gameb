import useForm from "../hooks/useForm";
import { useReadContract, useWriteContract } from "wagmi";
import { contract } from "../abis/indexToken";
import { useUi } from "../main";

type RegisterProps = {
  contractAddress: `0x${string}`;
  remove: boolean;
};

export default function Register() {
  const { showNotification } = useUi();

  const {
    data: tokens,
    refetch: refetchProjects,
  }: { data: string[] | undefined } = useReadContract({
    abi: contract.abi,
    address: contract.address as any,
    functionName: "getAllTokens",
  });

  const { writeContract, isPending } = useWriteContract();

  const { form, keys, handleChange, handleFormSubmit, formRef } =
    useForm<RegisterProps>({
      remove: false,
      contractAddress: "0xB5A76b174C09962518838D32351Ce59955Fb6dc9",
    });

  function removeProject(token: string) {
    writeContract(
      {
        abi: contract.abi,
        address: contract.address as any,
        functionName: "removeToken",
        args: [token],
      },
      {
        onSuccess: (address) => {
          showNotification(`Token removed from portfolio: ${address}`);
          refetchProjects();
        },
        onSettled: (address) => {
          refetchProjects();
        },
        onError: (e) => {
          console.log({ name: e.name, message: e.message, stack: e.stack });
          showNotification("Something went wrong");
        },
      }
    );
  }

  function addProject(data: RegisterProps) {
    writeContract(
      {
        abi: contract.abi,
        address: contract.address as any,
        functionName: "addToken",
        args: [form.contractAddress],
      },
      {
        onSuccess: (address) => {
          showNotification(`Token added to portfolio: ${address}`);
          refetchProjects();
        },
        onSettled: (address) => {
          console.log("settled", address);
          refetchProjects();
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
      <h1 className="text-gray-900 text-center uppercase text-5xl md:text-6xl xl:text-7xl">
        Projects
      </h1>
      <p className="mt-8 text-gray-700 font-mono text-xl">
        See a live overview over tokens that are held by our index token
      </p>
      <div className="flex flex-col gap-5 mt-10">
        {tokens?.map((token: any) => (
          <div
            key={token}
            className="text-gray-900 flex gap-2 bg-lime-200 p-5 rounded-lg text-center uppercase text-1xl "
          >
            <span>{token}</span>
            <button
              className="text-red-500"
              onClick={() => removeProject(token)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <form
        className="flex flex-col gap-5 mt-10"
        ref={formRef}
        onSubmit={handleFormSubmit(addProject)}
      >
        <fieldset className="mt-5">
          <legend className="text-lg text-center font-semibold">
            Add a new token to the portfolio
          </legend>
          <label className="block mt-5">
            <span className="block mb-2">Contract Address</span>
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name={keys.contractAddress}
              autoComplete=""
              value={form.contractAddress}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
        <button
          disabled={isPending}
          className="bg-black text-white font-bold py-5 px-4 rounded"
          type="submit"
        >
          {form.remove ? "Remove Token" : "Add Token"}
        </button>
      </form>
    </div>
  );
}
