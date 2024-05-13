/**
 * Moves the specified elements vertically.
 * @param {string} selector - The CSS selector of the elements to be moved.
 */
export function moveIt(selector) {
	/**
	 * The elements to be moved.
	 * @type {NodeListOf<HTMLElement>}
	 */
	const toasts = globalThis.document.querySelectorAll(selector)

	/**
	 * The previously processed toast element.
	 * @type {HTMLElement | null}
	 */
	let prevToast

	for (const [idx, toast] of Array.from(toasts).reverse().entries()) {
		if (idx === 0) {
			toast.style.transform = 'translateY(0rem)'
			prevToast = toast
			continue
		}

		if (prevToast) {
			/**
			 * The previous translateY value.
			 * @type {number}
			 */
			const prevValue = prevToast.style.transform.slice(11, -4)

			/**
			 * The new translateY value.
			 * @type {number}
			 */
			const newValue = (prevToast.offsetHeight + prevValue * 16) / 16

			toast.style.transform = `translateY(${newValue}rem)`
			prevToast = toast
		}
	}
}
