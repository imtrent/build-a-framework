import React, { useState, forwardRef, useImperativeHandle, useCallback, useEffect } from 'react';

const Popup = forwardRef(({ handleConfirm }, ref) => {
	const [isActive, setIsActive] = useState(false);
	const [queuedItem, setQueuedItem] = useState(null);

	const showPopup = (item) => {
		// Open
		setQueuedItem(item);
		setIsActive(true);
	};

	const hidePopup = () => {
		// Hide popup and set the item to be deleted to null
		setQueuedItem(null);
		setIsActive(false);
	};

	const handleClickedConfirm = () => {
		// Call the handleConfirm prop with the item to be deleted
		// Then hide the popup
		handleConfirm(queuedItem);
		setIsActive(false);
	};

	useImperativeHandle(ref, () => {
		return {
			showPopup
		};
	});

	const escFunction = useCallback((event) => {
		// If escape key was pressed, call the hidePopup function
		if (event.keyCode === 27) {
			hidePopup();
		}
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false);

		return () => {
			document.removeEventListener('keydown', escFunction, false);
		};
	}, [escFunction]);

	return (
		<div
			className={`${
				isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
			} absolute z-50 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center transition duration-200 ease-in-out`}
		>
			<div className="fixed inset-0 transition-opacity">
				<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
			</div>
			<div
				className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-headline"
			>
				<div>
					<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
						<svg className="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</div>
					<div className="mt-3 text-center sm:mt-5">
						<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
							Are you sure?
						</h3>
						<div className="mt-2">
							<p className="text-sm leading-5 text-gray-500">
								This action <b>cannot</b> be undone. Please click the <b>delete</b> button to confirm
								this action.
							</p>
						</div>
					</div>
				</div>
				<div className="mt-5 sm:mt-6">
					<div className="flex">
						<button
							onClick={() => hidePopup()}
							type="button"
							className="w-full mr-2 rounded-md border border-transparent px-4 py-2 bg-gray-300 text-sm leading-6 font-medium text-black shadow-sm hover:bg-gray-400 transition ease-in-out duration-150"
						>
							Cancel
						</button>
						<button
							onClick={() => handleClickedConfirm()}
							type="button"
							className="w-full ml-2 rounded-md border border-transparent px-4 py-2 bg-red-500 text-sm leading-6 font-medium text-white shadow-sm hover:bg-red-600 transition ease-in-out duration-150"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Popup;
