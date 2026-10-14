import LocomotiveScroll from 'locomotive-scroll';

type LenisState = {
	window?: LocomotiveScroll;
};

export const scroller: LenisState = $state({});

export function initLenis() {
	scroller.window = new LocomotiveScroll({
		lenisOptions: { duration: 1.6 }
	});
}
