import LocomotiveScroll from 'locomotive-scroll';

type ScrollerState = {
	window?: LocomotiveScroll;
};

export const scroller: ScrollerState = $state({});

export function initScroller() {
	scroller.window = new LocomotiveScroll({
		lenisOptions: { duration: 1.6 }
	});
}
