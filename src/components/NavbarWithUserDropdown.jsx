import { useState } from "react";
import {
	UserIcon,
	ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const Navbar = () => {
	const [isToggleOpen, setIsToggleOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className=" fixed top-0 z-20 w-full border-b-1 border-b border-slate-200 bg-white/90 shadow-md shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
				<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
					<nav
						aria-label="main navigation"
						className="flex h-20 items-stretch justify-between font-medium text-slate-800"
						role="navigation"
					>
						{/*      <!-- Brand logo --> */}
						<a
							id="ws"
							aria-label="logo"
							aria-current="page"
							className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none"
							href="/"
						>
							{/* <img src={} alt="logo"  className="aspect-auto w-40" /> */}
                            <h1>AcmeCorp</h1>
							
						</a>
						{/*      <!-- Mobile trigger --> */}
						<button
							className={`relative order-10 block h-10 w-10 self-center lg:hidden
                                    ${isToggleOpen
                                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                        : "" }
                            `}
							onClick={() => setIsToggleOpen(!isToggleOpen)}
							aria-expanded={isToggleOpen ? "true" : "false"}
							aria-label="Toggle navigation"
						>
							<div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900   transition-all duration-300"
								></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
								></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
								></span>
							</div>
						</button>
						{/*      <!-- Navigation links --> */}
						<ul
							role="menubar"
							aria-label="Select page"
							className={`flex flex-col lg:flex-row justify-center items-center  absolute top-0 left-0 z-[-1] h-[28.5rem] w-full overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:h-full lg:w-auto lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                                isToggleOpen
                                    ? "visible opacity-100 backdrop-blur-sm"
                                    : "invisible opacity-0"
                            }`}
						>
							<li role="none" className="flex items-center ">
								<a
									role="menuitem"
									aria-haspopup="false"
									className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
									href="#"
								>
									<span>Blog</span>
								</a>
							</li>
							<li role="none" className="flex items-center">
								<a
									role="menuitem"
									aria-current="page"
									aria-haspopup="false"
									className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
									href="#"
								>
									<span>Jobs</span>
								</a>
							</li>
							<li role="none" className="flex items-center">
								<a
									role="menuitem"
									aria-haspopup="false"
									className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
									href="#"
								>
									<span>Companies</span>
								</a>
							</li>
						</ul>

						<div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">

                            {/* if isAuthenticated */}
							{isAuthenticated ? (
								<>
									<a
										href="#"
										className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
										onClick={(e) => {
											e.preventDefault();
											setIsOpen(!isOpen);
										}}
									>
										<img
											// src={}
											alt="user name"
											title="user name"
											width="40"
											height="40"
											className="max-w-full rounded-full"
										/>
									</a>
									{isOpen && (
										<div className="absolute  right-0 top-16 w-28 mr-1 rounded-md shadow-lg transition">
											<div className="rounded-md bg-gray-100 shadow-xs">
												<div className="p-1">
													<a
														href="/profile"
														className="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
													>
														<UserIcon
															className="h-5 w-5 text-gray-800"
															aria-hidden="true"
														/>
														Profile
													</a>
													<a
														href="#"
														// onClick={} // add logout functionality link
														className="flex gap-2 px-4 py-2 text-sm text-red-700 hover:bg-gray-50 rounded"
													>
														<ArrowLeftStartOnRectangleIcon
															className="h-5 w-5 text-red-700"
															aria-hidden="true"
														/>
														Logout
													</a>
												</div>
											</div>
										</div>
									)}
								</>
							) : (
								<button
									// onClick={} // add login functionality link
									type="button"
									className="bg-green-600 rounded-md text-white px-3 py-2 m-5"
								>
									Log In
								</button>
							)}
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};
