import { InfiniteScrollingBackground } from './InfiniteScrollingBackground.js';

export class Stars extends InfiniteScrollingBackground {

    constructor(ctx) {

        super(ctx);

        this.velocity = 1;

        this.spritesheetUrl = 'spritesheets/stars.png';
        
    }
}
