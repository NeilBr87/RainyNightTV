// Single source of truth for every show on the site.
// Each show gets its own URL: /shows/:slug and /shows/:slug/episodes/:number

// Posters / heroes
import crPoster from '../assets/img/cr-zero-poster.webp';
import crPosterLqip from '../assets/img/cr-zero-poster-lqip.jpg';
import crHero from '../assets/img/cr-zero-hero.webp';
import hgPoster from '../assets/img/hungry-grass-poster.webp';
import hgPosterLqip from '../assets/img/hungry-grass-poster-lqip.jpg';
import hgHero from '../assets/img/hungry-grass-hero.webp';
import dubPoster from '../assets/img/dubai-poster.webp';
import dubPosterLqip from '../assets/img/dubai-poster-lqip.jpg';
import dubHero from '../assets/img/dubai-hero.webp';
import motelPoster from '../assets/img/motel-day-poster.webp';
import motelPosterLqip from '../assets/img/motel-day-poster-lqip.jpg';

// CR Zero episode stills
import cr1 from '../assets/img/cr-zero-ep1.webp';
import cr1q from '../assets/img/cr-zero-ep1-lqip.jpg';
import cr2 from '../assets/img/cr-zero-ep2.webp';
import cr2q from '../assets/img/cr-zero-ep2-lqip.jpg';
import cr3 from '../assets/img/cr-zero-ep3.webp';
import cr3q from '../assets/img/cr-zero-ep3-lqip.jpg';
import cr4 from '../assets/img/cr-zero-ep4.webp';
import cr4q from '../assets/img/cr-zero-ep4-lqip.jpg';
import cr5 from '../assets/img/cr-zero-ep5.webp';
import cr5q from '../assets/img/cr-zero-ep5-lqip.jpg';
import cr6 from '../assets/img/cr-zero-ep6.webp';
import cr6q from '../assets/img/cr-zero-ep6-lqip.jpg';
// Hungry Grass episode stills
import hg1 from '../assets/img/hungry-grass-ep1.webp';
import hg1q from '../assets/img/hungry-grass-ep1-lqip.jpg';
// Dubai W⚓ episode stills
import dub1 from '../assets/img/dubai-ep1.webp';
import dub1q from '../assets/img/dubai-ep1-lqip.jpg';
import dub2 from '../assets/img/dubai-ep2.webp';
import dub2q from '../assets/img/dubai-ep2-lqip.jpg';
import dub3 from '../assets/img/dubai-ep3.webp';
import dub3q from '../assets/img/dubai-ep3-lqip.jpg';
import dub4 from '../assets/img/dubai-ep4.webp';
import dub4q from '../assets/img/dubai-ep4-lqip.jpg';
import dub5 from '../assets/img/dubai-ep5.webp';
import dub5q from '../assets/img/dubai-ep5-lqip.jpg';
import dub6 from '../assets/img/dubai-ep6.webp';
import dub6q from '../assets/img/dubai-ep6-lqip.jpg';

// Episode videos
import CE1 from '../Components/EpisodePlayer/CE1.mp4';
import CE2 from '../Components/EpisodePlayer/CE2.mp4';
import CE3 from '../Components/EpisodePlayer/CE3.mp4';
import CE4 from '../Components/EpisodePlayer/CE4.mp4';
import CE5 from '../Components/EpisodePlayer/CE5.mp4';
import CE6 from '../Components/EpisodePlayer/CE6.mp4';
import HE1 from '../Components/EpisodePlayer/HE1.mp4';
import DE1 from '../Components/EpisodePlayer/DE1.mp4';
import DE2 from '../Components/EpisodePlayer/DE2.mp4';
import DE3 from '../Components/EpisodePlayer/DE3.mp4';
import DE4 from '../Components/EpisodePlayer/DE4.mp4';
import DE5 from '../Components/EpisodePlayer/DE5.mp4';
import DE6 from '../Components/EpisodePlayer/DE6.mp4';

function episodes(list) {
    return list.map(([still, stillLqip, video], i) => ({
        number: i + 1,
        title: `Episode ${i + 1}`,
        still,
        stillLqip,
        video,
    }));
}

export const shows = [
    {
        slug: 'cr-zero',
        title: 'CR Zero',
        genre: 'Crime drama',
        badge: 'Full season',
        poster: crPoster,
        posterLqip: crPosterLqip,
        hero: crHero,
        blurb: 'When a Croydon gang boss is convicted, his unlikely protégé must earn the respect of veteran captains who expected to inherit power—while two rival alliances stand on the brink of all-out war.',
        episodes: episodes([
            [cr1, cr1q, CE1],
            [cr2, cr2q, CE2],
            [cr3, cr3q, CE3],
            [cr4, cr4q, CE4],
            [cr5, cr5q, CE5],
            [cr6, cr6q, CE6],
        ]),
    },
    {
        slug: 'hungry-grass',
        title: 'Hungry Grass',
        genre: 'Western',
        badge: 'Pilot',
        poster: hgPoster,
        posterLqip: hgPosterLqip,
        hero: hgHero,
        blurb: "September, 1851. Michael McCourt steps off a steamboat in Independence, Missouri — the last civilized town before the wilderness swallows everything. He needs answers, and he'll ride into certain death to get them.",
        episodes: episodes([[hg1, hg1q, HE1]]),
    },
    {
        slug: 'dubai',
        title: 'Dubai W⚓',
        genre: 'Mockumentary',
        badge: 'Full season',
        poster: dubPoster,
        posterLqip: dubPosterLqip,
        hero: dubHero,
        blurb: "A cringe-comedy mockumentary following Dubai's most self-absorbed influencers, crypto bros, and expats as they navigate personal brand crises and social hierarchies while war looms on the horizon.",
        episodes: episodes([
            [dub1, dub1q, DE1],
            [dub2, dub2q, DE2],
            [dub3, dub3q, DE3],
            [dub4, dub4q, DE4],
            [dub5, dub5q, DE5],
            [dub6, dub6q, DE6],
        ]),
    },
];

export const shorts = [
    {
        slug: 'motel-day',
        title: 'Motel Day',
        badge: 'Short',
        poster: motelPoster,
        posterLqip: motelPosterLqip,
        url: 'https://youtu.be/SwoxQxRPsJ4',
    },
];

export const featuredShow = shows[0];

export function getShow(slug) {
    return shows.find((show) => show.slug === slug) || null;
}

export function showPath(show) {
    return `/shows/${show.slug}`;
}

export function episodePath(show, number) {
    return `/shows/${show.slug}/episodes/${number}`;
}

// Warm the browser cache for above-the-fold artwork (called while the splash plays).
export function preloadArtwork() {
    const urls = [featuredShow.hero, ...shows.map((s) => s.poster), ...shorts.map((s) => s.poster)];
    urls.forEach((url) => {
        const img = new Image();
        img.decoding = 'async';
        img.src = url;
    });
}
