import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { loginModalState } from "../../atoms/modalsAtom";

const LoginModal = () => {
    const [open, setOpen] = useRecoilState(loginModalState);

    return (
        <Transition show={open} as={Fragment}>
            <Dialog
                className="fixed inset-0 z-10 overflow-y-auto"
                as="div"
                onClose={setOpen}
            >
                <div className="sm:-pb-40 flex min-h-[800px] items-end justify-center px-4 pb-60 pt-0 pb-20 text-center sm:block sm:min-h-screen sm:p-0 sm:pt-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <span
                        aria-hidden="true"
                        className="hidden sm:inline-block sm:h-screen sm:align-middle"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block transform overflow-hidden rounded-lg bg-gray-700 px-4 pt-5 pb-4 text-left align-bottom text-gray-300 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="">Login Form</p>
                                </div>
                                <div className="">
                                    <XCircleIcon
                                        className="h-6 w-6 cursor-pointer hover:text-white"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                            </div>
                            <form method="post"></form>
                            <div className=""></div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default LoginModal;
